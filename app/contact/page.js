
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Us | Michael Scott Contractor LLC",
    description: "Get in touch for your next retail construction project. Direct contact info for our team.",
};

export default function Contact() {
    return (
        <div className="bg-brand-light min-h-screen">
            {/* Hero */}
            <section className="bg-brand-dark text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                        Get In <span className="text-brand-gold">Touch</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-300">
                        Let's discuss your next retail construction project.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Form (Span 7) */}
                    <div className="lg:col-span-7">
                        <ContactForm />
                    </div>

                    {/* Right Column: Info (Span 5) */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Corporate Info Card */}
                        <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-blue">
                            <h3 className="text-xl font-bold font-heading text-brand-dark mb-6">Corporate Office</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0 mr-4">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">National Headquarters</p>
                                        <p className="text-gray-600">Serving clients nationwide across all 50 states.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0 mr-4">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Phone Numbers</p>
                                        <a href="tel:304-552-8228" className="block text-gray-600 hover:text-brand-blue transition-colors">Primary: (304) 552-8228</a>
                                        <a href="tel:304-993-9176" className="block text-gray-600 hover:text-brand-blue transition-colors">Secondary: (304) 993-9176</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0 mr-4">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email Address</p>
                                        <a href="mailto:info@msccorp.co" className="text-gray-600 hover:text-brand-blue transition-colors break-all">
                                            info@msccorp.co
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0 mr-4">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Business Hours</p>
                                        <p className="text-gray-600">8am-5pm EST</p>
                                        <p className="text-gray-500 text-sm">Sat: By Appointment | Sun: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Direct Contacts */}
                        <div className="bg-brand-dark text-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold font-heading text-brand-gold mb-6">Direct Team Access</h3>
                            <div className="space-y-6">
                                <div className="border-b border-gray-700 pb-4">
                                    <p className="font-bold text-white">Scott - Owner</p>
                                    <a href="mailto:owner@msccorp.co" className="text-gray-400 hover:text-white text-sm block">owner@msccorp.co</a>
                                    <a href="tel:304-552-8228" className="text-gray-400 hover:text-white text-sm block">(304) 552-8228</a>
                                </div>
                                <div className="border-b border-gray-700 pb-4">
                                    <p className="font-bold text-white">Chris - Construction Manager</p>
                                    <a href="mailto:construction@msccorp.co" className="text-gray-400 hover:text-white text-sm block">construction@msccorp.co</a>
                                    <a href="tel:918-520-9599" className="text-gray-400 hover:text-white text-sm block">(918) 520-9599</a>
                                </div>
                                <div>
                                    <p className="font-bold text-white">Ron - Project Manager</p>
                                    <a href="mailto:projects@msccorp.co" className="text-gray-400 hover:text-white text-sm block">projects@msccorp.co</a>
                                    <a href="tel:304-993-9176" className="text-gray-400 hover:text-white text-sm block">(304) 993-9176</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
