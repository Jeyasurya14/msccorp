
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, icon: Icon, href = '/services' }) {
    return (
        <Link href={href} className="group block h-full">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-brand-gold/30">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors">
                    <Icon className="w-8 h-8 text-brand-blue group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading group-hover:text-brand-blue transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center text-brand-blue font-semibold group-hover:text-brand-gold transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
