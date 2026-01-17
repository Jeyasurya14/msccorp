
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-gold">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/logo.png"
                                    alt="Michael Scott Contractor LLC"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold font-heading flex flex-col leading-none">
                                <span className="text-white">MICHAEL SCOTT</span>
                                <span className="text-brand-gold text-sm tracking-widest">CONTRACTOR LLC</span>
                            </h3>
                        </div>
                        <p className="text-brand-gold font-semibold mb-4 tracking-wide uppercase text-sm">
                            National Retail Construction Experts
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Specializing in high-quality retail store remodels and mall construction projects across all 50 states. We bring your vision to life with precision and professionalism.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Placeholders */}
                            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white font-heading border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-400 hover:text-brand-gold transition-colors flex items-center"><span className="mr-2">›</span> Home</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-brand-gold transition-colors flex items-center"><span className="mr-2">›</span> Services</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-brand-gold transition-colors flex items-center"><span className="mr-2">›</span> About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-brand-gold transition-colors flex items-center"><span className="mr-2">›</span> Contact</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 transition-colors flex items-center"><span className="mr-2">›</span> Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="text-gray-500 hover:text-gray-300 transition-colors flex items-center"><span className="mr-2">›</span> Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white font-heading border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Phone className="w-5 h-5 text-brand-gold mt-1 mr-3 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:304-552-8228" className="text-gray-300 hover:text-white font-medium">(304) 552-8228</a>
                                    <a href="tel:304-993-9176" className="text-gray-400 hover:text-white text-sm">(304) 993-9176</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 text-brand-gold mt-1 mr-3 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <a href="mailto:info@msccorp.co" className="text-gray-300 hover:text-white break-all">
                                        info@msccorp.co
                                    </a>
                                    <span className="text-gray-500 text-xs mt-1">8am-5pm EST</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-brand-gold mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300">Serving clients nationwide</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} Michael Scott Contractor LLC. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Licensed & Insured</p>
                </div>
            </div>
        </footer>
    );
}
