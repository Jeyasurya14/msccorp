
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import Button from './ui/Button';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24"> {/* Increased height slightly for logo */}
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-16 h-16">
                                <Image
                                    src="/logo.png"
                                    alt="Michael Scott Contractor LLC"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-bold font-heading text-brand-blue tracking-tight group-hover:text-brand-blue-light transition-colors">
                                    MICHAEL SCOTT
                                </span>
                                <span className="text-xs md:text-sm font-semibold text-brand-gold tracking-widest uppercase">
                                    Contractor LLC
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-brand-blue font-medium transition-colors font-heading text-sm uppercase tracking-wide"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button
                            href="tel:304-552-8228"
                            variant="primary" /* Gold button */
                            className="gap-2 !py-2 !px-5 font-bold"
                        >
                            <Phone size={18} />
                            <span>(304) 552-8228</span>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} border-t border-gray-100`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-blue-50"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="mt-4 px-3 pb-4">
                        <Button href="tel:304-552-8228" variant="primary" className="w-full justify-center gap-2">
                            <Phone size={18} />
                            Call Now
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
