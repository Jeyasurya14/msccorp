
import Button from "@/components/ui/Button";
import TeamMember from "@/components/TeamMember";
import { Shield, Clock, Users, Award, Briefcase } from "lucide-react";
import Image from 'next/image';

export const metadata = {
    title: "About Us | Michael Scott Contractor LLC",
    description: "Learn about our mission, history, and the experienced team behind our national construction success.",
};

export default function About() {
    const values = [
        { title: "Quality Craftsmanship", icon: Award },
        { title: "Professional Integrity", icon: Shield },
        { title: "Client-Focused Service", icon: Users },
        { title: "Safety First", icon: HardHatIcon }, // Defined below locally or valid import
        { title: "Timely Delivery", icon: Clock },
    ];

    function HardHatIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
                <path d="M14 6h0a6 6 0 0 1 6 6v3" />
            </svg>
        )
    }

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-brand-dark text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Briefcase size={200} />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                                About <span className="text-brand-gold">Michael Scott Contractor LLC</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed font-light">
                                A premier national retail construction company specializing in store remodels throughout shopping malls and outlet centers across the United States.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 flex justify-center">
                            {/* Logo */}
                            <div className="relative w-64 h-64 bg-white/5 rounded-2xl flex items-center justify-center p-4 backdrop-blur-sm border border-white/10 shadow-2xl">
                                <Image
                                    src="/logo.png"
                                    alt="Michael Scott Contractor LLC Logo"
                                    fill
                                    className="object-contain p-4"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro & Mission */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-brand-dark mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed border-l-4 border-brand-gold pl-6 italic">
                                "To transform retail spaces with quality craftsmanship, professional service, and unwavering commitment to our clients' success."
                            </p>
                            <div className="prose text-gray-600 space-y-4">
                                <p>With extensive experience in the retail construction sector, we understand the unique challenges of mall environments and deliver exceptional results on time and within budget.</p>
                                <p>Our dedicated team brings decades of combined experience, ensuring every project receives expert attention from start to finish.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold font-heading text-brand-dark mb-6">Our Core Values</h3>
                            <div className="grid gap-4">
                                {values.map((val, idx) => (
                                    <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                                        <val.icon className="w-6 h-6 text-brand-blue mr-4" />
                                        <span className="font-semibold text-gray-800">{val.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="bg-brand-light py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-heading text-brand-dark mb-4">Leadership Team</h2>
                        <p className="text-gray-600">Meet the experts dedicated to your project's success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TeamMember
                            initials="S"
                            name="Scott"
                            title="Owner"
                            bio="Strategic vision and over 20 years of experience in the national construction industry. Leads the company with a focus on integrity and results."
                            email="owner@msccorp.co"
                            phone="304-552-8228"
                        />
                        <TeamMember
                            initials="C"
                            name="Chris"
                            title="Construction Manager"
                            bio="Expert oversight of field operations, ensuring safety, quality control, and strict code compliance on every job site."
                            email="construction@msccorp.co"
                            phone="918-520-9599"
                        />
                        <TeamMember
                            initials="R"
                            name="Ron"
                            title="Project Manager"
                            bio="Detailed coordination of schedules, logistics, and communication. Your primary point of contact for day-to-day updates."
                            email="projects@msccorp.co"
                            phone="304-993-9176"
                        />
                    </div>
                </div>
            </section>

            {/* Why Partner With Us */}
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading text-brand-dark mb-8">Why Partner With Us?</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Nationwide Experience", "Mall Construction Expertise", "Proven Track Record", "Licensed & Insured", "Strong Vendor Relationships"].map((tag, i) => (
                            <span key={i} className="px-6 py-2 bg-blue-50 text-brand-blue rounded-full font-semibold text-sm border border-blue-100">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
