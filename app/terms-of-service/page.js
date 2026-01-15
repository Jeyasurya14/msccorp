export const metadata = {
    title: "Terms of Service | Michael Scott Contractor LLC",
    description: "Terms and Conditions for using the Michael Scott Contractor LLC website.",
};

export default function TermsOfService() {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-blue prose-lg">
                <h1 className="text-3xl font-bold font-heading text-brand-blue mb-8">Terms of Service</h1>

                <p className="text-gray-600 mb-6">Last Updated: January 13, 2026</p>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                    <p className="text-gray-600">
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Michael Scott Contractor LLC ("we," "us," or "our"),
                        concerning your access to and use of the msccorp.co website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
                    <p className="text-gray-600">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content")
                        and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">3. User Representations</h2>
                    <p className="text-gray-600 mb-2">By using the Site, you represent and warrant that:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                        <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                        <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                        <li>Your use of the Site will not violate any applicable law or regulation.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">4. Limitations of Liability</h2>
                    <p className="text-gray-600">
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages,
                        including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">5. Governing Law</h2>
                    <p className="text-gray-600">
                        These Terms shall be governed by and defined following the laws of West Virginia. Michael Scott Contractor LLC and yourself irrevocably consent that the courts of West Virginia shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                    <p className="text-gray-600">
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
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
