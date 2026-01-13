
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod'; // Ensure zod is installed: npm install zod
import Button from './ui/Button';

// Define the validation schema
const schema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    company: z.string().optional(),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
    location: z.string().optional(),
    projectType: z.enum([
        "Store Remodel",
        "New Construction",
        "Mall Project",
        "Other"
    ]),
    timeline: z.enum([
        "Immediate (0-30 days)",
        "1-3 months",
        "3-6 months",
        "6+ months",
        "Just exploring"
    ]),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
    gotcha: z.string().optional(), // Honeypot
});

export default function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            projectType: "Store Remodel",
            timeline: "Just exploring"
        }
    });

    const onSubmit = async (data) => {
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    service: data.projectType, // Map projectType to service for backend consistency
                }),
            });

            if (!response.ok) throw new Error('Failed to submit form');

            setStatus('success');
            reset();
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again later or call us directly.');
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border-t-4 border-brand-gold">
            <h3 className="text-2xl font-bold mb-6 text-brand-dark font-heading">Send Us a Message</h3>

            {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-md text-center">
                    <p className="text-lg font-bold mb-2">Thank you! We'll be in touch within 24 hours.</p>
                    <p className="text-green-700">We appreciate your interest in Michael Scott Contractor LLC.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-sm font-bold underline text-brand-blue hover:text-brand-gold transition-colors"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                            <input
                                {...register("name")}
                                type="text"
                                className={`w-full px-4 py-2 border rounded-md outline-none transition-shadow focus:ring-2 focus:ring-brand-blue ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                            <input
                                {...register("company")}
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none transition-shadow focus:ring-2 focus:ring-brand-blue"
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                            <input
                                {...register("email")}
                                type="email"
                                className={`w-full px-4 py-2 border rounded-md outline-none transition-shadow focus:ring-2 focus:ring-brand-blue ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                            <input
                                {...register("phone")}
                                type="tel"
                                className={`w-full px-4 py-2 border rounded-md outline-none transition-shadow focus:ring-2 focus:ring-brand-blue ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Project Location (City, State)</label>
                        <input
                            {...register("location")}
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none transition-shadow focus:ring-2 focus:ring-brand-blue"
                        />
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                            <select
                                {...register("projectType")}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none transition-shadow focus:ring-2 focus:ring-brand-blue bg-white"
                            >
                                <option value="Store Remodel">Store Remodel</option>
                                <option value="New Construction">New Construction</option>
                                <option value="Mall Project">Mall Project</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Project Timeline</label>
                            <select
                                {...register("timeline")}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none transition-shadow focus:ring-2 focus:ring-brand-blue bg-white"
                            >
                                <option value="Immediate (0-30 days)">Immediate (0-30 days)</option>
                                <option value="1-3 months">1-3 months</option>
                                <option value="3-6 months">3-6 months</option>
                                <option value="6+ months">6+ months</option>
                                <option value="Just exploring">Just exploring</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea
                            {...register("message")}
                            rows={4}
                            className={`w-full px-4 py-2 border rounded-md outline-none transition-shadow focus:ring-2 focus:ring-brand-blue ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    {/* Honeypot Field - Hidden from users */}
                    <input type="text" {...register("gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />

                    {status === 'error' && (
                        <div className="text-red-600 text-sm bg-red-50 p-3 rounded">{errorMessage}</div>
                    )}

                    <Button
                        type="submit"
                        variant="primary" // Gold button
                        disabled={status === 'loading'}
                        className="w-full md:w-auto font-bold shadow-md"
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            )}
        </div>
    );
}
