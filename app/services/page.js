
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Hammer, ShoppingBag, Map, HardHat, Check, ChevronRight } from "lucide-react";

export const metadata = {
    title: "Our Services | Michael Scott Contractor LLC",
    description: "Comprehensive retail construction solutions including store remodels, mall construction, and national rollouts.",
};

export default function Services() {
    const processSteps = [
        { num: "01", title: "Initial Consultation", desc: "We discuss your vision, timeline, and budget constraints." },
        { num: "02", title: "Design & Planning", desc: "Detailed project scope, logistics planning, and material selection." },
        { num: "03", title: "Permits & Approvals", desc: "Handling all necessary mall management and local city approvals." },
        { num: "04", title: "Construction Execution", desc: "Professional build-out with minimal disruption to operations." },
        { num: "05", title: "Final Walkthrough", desc: "Ensuring every detail meets our high standards before handover." },
    ];

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-r from-blue-50 to-white py-16 md:py-24 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-dark mb-4">
                        Our <span className="text-brand-blue">Services</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-gray-600">
                        Comprehensive Retail Construction Solutions tailored for national brands.
                    </p>
                </div>
            </section>

            {/* Main Services Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* Service 1: Retail Store Remodels */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="w-16 h-16 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6 text-brand-gold-dark">
                                <ShoppingBag size={32} />
                            </div>
                            <h2 className="text-3xl font-bold font-heading text-brand-dark mb-6">Retail Store Remodels</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Revitalize your retail footprint with our expert remodeling services. We handle everything from minor updates to complete gut renovations, ensuring your store looks modern and inviting.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Complete interior renovations", "Storefront redesigns", "Fixture installation and updates", "Flooring, lighting, and electrical work", "HVAC system updates", "Painting and finishing"].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="w-5 h-5 text-brand-green mr-3 mt-1 text-brand-blue" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-brand-blue">
                                <p className="text-sm font-semibold text-brand-blue">Efficiency Focus: We prioritize minimal disruption to get you back to business fast.</p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 rounded-2xl h-[400px] overflow-hidden shadow-lg relative">
                            <Image
                                src="/images/store-remodel.png"
                                alt="Modern retail store interior remodel"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Service 2: Mall & Outlet Mall Expertise */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="lg:order-1 rounded-2xl h-[400px] overflow-hidden shadow-lg relative">
                            <Image
                                src="/images/mall-construction.png"
                                alt="Mall construction and barricade"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:order-2">
                            <div className="w-16 h-16 bg-brand-blue/20 rounded-xl flex items-center justify-center mb-6 text-brand-blue">
                                <Map size={32} />
                            </div>
                            <h2 className="text-3xl font-bold font-heading text-brand-dark mb-6">Mall & Outlet Mall Expertise</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Building in a mall environment requires a specific set of skills. We are experts in navigating the complexities of mall rules, logistics, and strict compliance standards.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Understanding mall operational requirements", "Coordination with mall management", "After-hours and off-peak scheduling", "Security and safety protocols", "Compliance with codes", "Minimal disruption to neighbors"].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="w-5 h-5 text-brand-blue mr-3 mt-1" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Service 3: Project Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-brand-dark">
                                <HardHat size={32} />
                            </div>
                            <h2 className="text-3xl font-bold font-heading text-brand-dark mb-6">Project Management</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                From pre-construction planning to final handover, we manage every detail. Our transparent communication keeps you informed at every step.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {["Full-service oversight", "Budgeting & Cost Control", "Timeline Management", "Vendor Coordination", "Quality Assurance", "Regular Updates"].map((item, i) => (
                                    <li key={i} className="flex items-center p-3 bg-gray-50 rounded border border-gray-100">
                                        <ChevronRight className="w-4 h-4 text-brand-gold mr-2" />
                                        <span className="text-sm font-semibold text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 rounded-2xl h-[400px] overflow-hidden shadow-lg relative">
                            <Image
                                src="/images/project-management.png"
                                alt="Construction project management"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-brand-dark text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold font-heading mb-6">Nationwide Coverage</h2>
                    <p className="text-xl text-gray-300 mb-10">Serving retail clients nationwide</p>

                    {/* Map */}
                    <div className="relative w-full max-w-3xl mx-auto h-[300px] md:h-[400px] mb-10">
                        <Image
                            src="/images/nationwide-coverage.png"
                            alt="Nationwide coverage map"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <p className="text-brand-gold font-semibold uppercase tracking-wider">Coast to Coast Service</p>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-heading text-brand-dark mb-4">Our Construction Process</h2>
                        <p className="text-gray-600">A streamlined approach ensuring quality and timeliness.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="relative p-6 bg-white rounded-lg shadow-sm border-t-4 border-brand-blue hover:-translate-y-2 transition-transform">
                                <span className="text-4xl font-bold text-gray-100 absolute top-2 right-4">{step.num}</span>
                                <h3 className="text-lg font-bold text-brand-dark mb-3 relative z-10">{step.title}</h3>
                                <p className="text-sm text-gray-500 relative z-10">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold font-heading text-brand-dark mb-8">Get Your Project Started</h2>
                <Button href="/contact" variant="primary" className="text-lg px-8 py-3 font-bold">
                    Start Conversation
                </Button>
            </section>
        </div>
    );
}
