import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend conditionally
// const resend = new Resend(process.env.RESEND_API_KEY); // Moved to inside handler or usage check

// Define Validation Schema
const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().optional(), // Make phone optional but validated if present
    company: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
    gotcha: z.string().optional(), // Honeypot field
});

// Simple In-Memory Rate Limiter
// Note: This resets on server restart/cold start. For production at scale, use Redis/KV.
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // Max 5 requests per IP per hour

function checkRateLimit(ip) {
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW;

    const requestLog = rateLimit.get(ip) || [];
    const recentRequests = requestLog.filter(time => time > windowStart);

    if (recentRequests.length >= MAX_REQUESTS) {
        return false;
    }

    recentRequests.push(now);
    rateLimit.set(ip, recentRequests);

    // Cleanup old entries periodically (simple optimization)
    if (rateLimit.size > 1000) {
        rateLimit.clear(); // Reset if map gets too big to prevent memory leak in this simple implementation
    }

    return true;
}

export async function POST(request) {
    try {
        // 1. Rate Limiting
        const ip = request.headers.get('x-forwarded-for') || 'unknown';
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await request.json();

        // 2. Validate Data with Zod
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: 'Validation Failed', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { name, email, phone, company, service, message, gotcha } = result.data;

        // 3. Honeypot Check
        if (gotcha) {
            // Silently fail for bots
            console.warn(`Bot detected via honeypot from IP: ${ip}`);
            return NextResponse.json(
                { message: 'Message sent successfully' },
                { status: 200 }
            );
        }

        // 4. Send Email via Resend
        if (!process.env.RESEND_API_KEY) {
            console.error('Missing RESEND_API_KEY');
            // Allow dev mode to simulate success if key is missing
            if (process.env.NODE_ENV === 'development') {
                console.log('Mock Email Send:', result.data);
                return NextResponse.json({ message: 'Message sent successfully (Mock)' }, { status: 200 });
            }
            return NextResponse.json({ error: 'Server Configuration Error' }, { status: 500 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        // Determine Recipient based on Service/Project Type
        // Determine Recipient based on Service/Project Type
        let primaryRecipient = 'info@msccorp.co'; // Default
        const gmailBackup = process.env.CONTACT_EMAIL || 'michaelscottcontractorllc@gmail.com';

        if (service === 'Store Remodel' || service === 'New Construction') {
            primaryRecipient = 'construction@msccorp.co';
        } else if (service === 'Mall Project') {
            primaryRecipient = 'projects@msccorp.co';
        }

        // Send Email
        const data = await resend.emails.send({
            from: 'Michael Scott Contractor <contact@msccorp.co>',
            to: [primaryRecipient],
            cc: [gmailBackup], // Direct backup to Gmail (bypassing domain forwarding issues)
            reply_to: email, // Allow replying directly to the user
            subject: `New Inquiry from ${name} - ${service || 'General Inquiry'}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                    <p><strong>Company:</strong> ${company || 'N/A'}</p>
                    <p><strong>Service Interest:</strong> ${service || 'N/A'}</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <h3>Message:</h3>
                    <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 12px; color: #888;">Expected IP: ${ip}</p>
                </div>
            `,
        });

        if (data.error) {
            console.error('Resend Error:', data.error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        // 5. Send Auto-Reply
        await resend.emails.send({
            from: 'Michael Scott Contractor <contact@msccorp.co>',
            to: [email],
            subject: 'We received your message - Michael Scott Contractor LLC',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1e3a8a;">Thank you for contacting us!</h2>
                    <p>Hi ${name},</p>
                    <p>We have received your inquiry regarding <strong>${service || 'your project'}</strong>.</p>
                    <p>Our team will review your message and get back to you shortly, usually within 24 business hours.</p>
                    <br>
                    <p>Best regards,</p>
                    <p><strong>Michael Scott Contractor LLC Team</strong></p>
                    <p><a href="tel:304-552-8228">(304) 552-8228</a></p>
                </div>
            `,
        });

        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
