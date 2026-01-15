export const metadata = {
    title: "Privacy Policy | Michael Scott Contractor LLC",
    description: "Privacy Policy for Michael Scott Contractor LLC. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-blue prose-lg">
                <h1 className="text-3xl font-bold font-heading text-brand-blue mb-8">Privacy Policy</h1>

                <p className="text-gray-600 mb-6">Last Updated: January 13, 2026</p>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                    <p className="text-gray-600">
                        Michael Scott Contractor LLC ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
                        This policy describes the types of information we may collect from you or that you may provide when you visit the website msccorp.co (our "Website")
                        and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                    <p className="text-gray-600 mb-2">We collect several types of information from and about users of our Website, including information:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, phone number, and company name when you voluntarily fill out our contact forms.</li>
                        <li><strong>Usage Data:</strong> We may collect non-personal information about your internet connection, the equipment you use to access our Website, and usage details.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                    <p className="text-gray-600 mb-2">We use information that we collect about you or that you provide to us, including any personal information:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>To present our Website and its contents to you.</li>
                        <li>To provide you with information, products, or services that you request from us (e.g., responding to renovation quotes).</li>
                        <li>To fulfill any other purpose for which you provide it.</li>
                        <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">4. Disclosure of Your Information</h2>
                    <p className="text-gray-600">
                        We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.
                        This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you,
                        so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate
                        to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                    <p className="text-gray-600">
                        We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                        However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information,
                        we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">6. Contact Information</h2>
                    <p className="text-gray-600">
                        To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                        <br /><br />
                        <strong>Michael Scott Contractor LLC</strong><br />
                        Email: <a href="mailto:michaelscottcontractorllc@gmail.com" className="text-brand-blue hover:underline">michaelscottcontractorllc@gmail.com</a><br />
                        Phone: (304) 552-8228
                    </p>
                </section>
            </div>
        </div>
    );
}
