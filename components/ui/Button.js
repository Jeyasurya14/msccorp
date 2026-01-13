
import Link from 'next/link';

export default function Button({
    children,
    href,
    variant = 'primary',
    className = '',
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-brand-blue text-white hover:bg-blue-700 focus:ring-brand-blue",
        secondary: "bg-brand-gold text-brand-dark hover:bg-yellow-400 focus:ring-brand-gold",
        outline: "border-2 border-brand-blue text-brand-blue hover:bg-blue-50 focus:ring-brand-blue",
        white: "bg-white text-brand-blue hover:bg-gray-100 focus:ring-white"
    };

    const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
