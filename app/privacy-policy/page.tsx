import Link from "next/link"

const page = () => {
    return (
        <div className="container py-20!">
            <h1 className="mb-12!">Privacy Policy</h1>

            <p className="opacity-90">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p>
                We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>

            <section className="py-8!">
                <h2 className="mb-6!">1. Data Controller</h2>
                <p className="mb-4!">
                    The data controller responsible for your personal data is:
                </p>
                <p className="mb-2!"><strong>Bogdan Stevanovic</strong></p>
                <p className="mb-2!">Email: <Link href="mailto:hi@boge.dev">hi@boge.dev</Link></p>
                <p>Website: <Link href="https://boge.dev">boge.dev</Link></p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">2. Data We Collect</h2>
                <p className="mb-4!">We may collect and process the following personal data:</p>
                <ul className="list-disc pl-8! space-y-2">
                    <li><strong>Contact Information:</strong> Email address, name (if provided voluntarily)</li>
                    <li><strong>Communication Data:</strong> Messages sent through contact forms or email</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent on site, click behavior, referral source</li>
                    <li><strong>Analytics Data:</strong> Collected via Google Analytics 4, anonymized where possible</li>
                    <li><strong>Cookie Data:</strong> Information stored via cookies (see Cookie Policy below)</li>
                </ul>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">3. Legal Basis for Processing</h2>
                <p className="mb-4!">We process your personal data based on the following legal grounds:</p>
                <ul className="list-disc pl-8! space-y-2">
                    <li><strong>Consent:</strong> When you sign up for newsletters, download freebies, or contact us</li>
                    <li><strong>Legitimate Interest:</strong> To improve our website, analyze performance, and provide better services</li>
                    <li><strong>Contractual Necessity:</strong> To fulfill services you've requested (e.g., project inquiries)</li>
                </ul>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">4. Purpose of Data Collection</h2>
                <p className="mb-4!">We use your personal data for the following purposes:</p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>To deliver requested freebies, resources, or newsletters</li>
                    <li>To respond to inquiries and provide customer support</li>
                    <li>To analyze website performance and user experience through analytics tools</li>
                    <li>To personalize content and improve our services</li>
                    <li>To send marketing communications (only with your explicit consent)</li>
                    <li>To comply with legal obligations</li>
                </ul>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">5. Data Sharing and Third Parties</h2>
                <p className="mb-4!">
                    We do not sell or rent your personal data. However, we may share data with trusted third-party service providers:
                </p>
                <ul className="list-disc pl-8! space-y-2">
                    <li><strong>Google Analytics 4:</strong> For website analytics (anonymized data)</li>
                    <li><strong>Email Service Providers:</strong> Mailchimp, ConvertKit, or similar (for newsletters)</li>
                    <li><strong>Hosting Providers:</strong> Vercel, AWS, or similar (for website hosting)</li>
                    <li><strong>Payment Processors:</strong> Stripe, PayPal (if applicable, for transactions)</li>
                </ul>
                <p className="mt-4!">
                    All third-party providers are GDPR-compliant and process data under strict data processing agreements.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">6. Data Retention</h2>
                <p className="mb-4!">We retain your personal data only as long as necessary:</p>
                <ul className="list-disc pl-8! space-y-2">
                    <li><strong>Email Addresses:</strong> Stored until you unsubscribe or request deletion</li>
                    <li><strong>Contact Form Data:</strong> Retained for up to 2 years or until resolved</li>
                    <li><strong>Analytics Data:</strong> Anonymized and retained according to provider policies (typically 26 months for Google Analytics)</li>
                    <li><strong>Cookie Data:</strong> Expires based on cookie type (session or persistent)</li>
                </ul>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">7. Your Rights Under GDPR</h2>
                <p className="mb-4!">You have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-8! space-y-2">
                    <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                    <li><strong>Right to Restriction:</strong> Limit how we process your data</li>
                    <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                    <li><strong>Right to Object:</strong> Opt-out of certain data processing activities</li>
                    <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time (does not affect prior processing)</li>
                </ul>
                <p className="mt-4!">
                    To exercise any of these rights, contact us at <Link href="mailto:hi@boge.dev" className="text-(--primary-400) hover:underline">hi@boge.dev</Link>.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">8. Cookies</h2>
                <p className="mb-4!">
                    We use cookies to enhance your browsing experience. Cookies are small text files stored on your device.
                </p>
                <p className="mb-4!"><strong>Types of cookies we use:</strong></p>
                <ul className="list-disc pl-8! space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Track website performance and user behavior</li>
                    <li><strong>Marketing Cookies:</strong> Used for personalized advertising (with consent)</li>
                </ul>
                <p className="mt-4!">
                    You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">9. Data Security</h2>
                <p className="mb-4!">
                    We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure hosting with reputable providers</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication mechanisms</li>
                </ul>
                <p className="mt-4!">
                    However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">10. International Data Transfers</h2>
                <p>
                    Your data may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure such transfers comply with GDPR through appropriate safeguards, such as Standard Contractual Clauses (SCCs) or adequacy decisions.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">11. Children's Privacy</h2>
                <p>
                    Our website is not intended for children under 16 years of age. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">12. Changes to This Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last updated" date at the top will indicate when changes were made. We encourage you to review this policy periodically.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">13. Contact Us</h2>
                <p className="mb-4!">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
                </p>
                <p className="mb-2!"><strong>Email:</strong> <Link href="mailto:hi@boge.dev" className="text-(--primary-400) hover:underline">hi@boge.dev</Link></p>
                <p className="mb-2!"><strong>Website:</strong> <Link href="https://boge.dev" className="text-(--primary-400) hover:underline">boge.dev</Link></p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">14. Supervisory Authority</h2>
                <p>
                    If you believe your data protection rights have been violated, you have the right to lodge a complaint with your local data protection supervisory authority.
                </p>
            </section>
        </div>
    )
}
export default page