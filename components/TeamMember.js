
import { Mail, Phone } from 'lucide-react';

export default function TeamMember({ name, title, bio, email, phone, initials }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg">
            <div className="h-2 bg-brand-gold mb-0"></div>
            <div className="p-8">
                <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-2xl font-bold font-heading mr-4">
                        {initials}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-brand-dark font-heading">{name}</h3>
                        <p className="text-brand-blue font-medium">{title}</p>
                    </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px]">
                    {bio}
                </p>

                <div className="space-y-3 pt-6 border-t border-gray-100">
                    <a href={`mailto:${email}`} className="flex items-center text-gray-600 hover:text-brand-blue transition-colors">
                        <Mail className="w-4 h-4 mr-3 text-brand-gold" />
                        <span className="text-sm">{email}</span>
                    </a>
                    <a href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center text-gray-600 hover:text-brand-blue transition-colors">
                        <Phone className="w-4 h-4 mr-3 text-brand-gold" />
                        <span className="text-sm">{phone}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
