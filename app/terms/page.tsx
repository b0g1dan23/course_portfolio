const page = () => {
    return (
        <div className="container py-20!">
            <h1 className="mb-12!">Terms of Service</h1>

            <p className="mb-8! opacity-90">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="mb-8!">
                Welcome to Bogdan Stevanovic's website. By accessing or using our website, services, or resources, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
            </p>

            <section className="py-8!">
                <h2 className="mb-6!">1. Acceptance of Terms</h2>
                <p className="mb-4!">
                    By accessing this website, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website or services.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">2. Services Provided</h2>
                <p className="mb-4!">We offer the following services:</p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>Web development and design services</li>
                    <li>Consultation and advisory services</li>
                    <li>Free resources, templates, and digital downloads</li>
                    <li>Educational content and tutorials</li>
                    <li>Email newsletters and updates</li>
                </ul>
                <p className="mt-4!">
                    Services are subject to availability and may be modified or discontinued at any time without prior notice.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">3. Free Resources and Downloads</h2>
                <p className="mb-4!"><strong>License Grant:</strong></p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>All free resources provided (templates, code snippets, guides) are for personal and commercial use</li>
                    <li>You may modify and adapt resources for your own projects</li>
                    <li>Attribution is appreciated but not required</li>
                </ul>
                <p className="mb-4! mt-6!"><strong>Restrictions:</strong></p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>Redistribution, resale, or sublicensing of resources is strictly prohibited</li>
                    <li>You may not claim authorship of unmodified resources</li>
                    <li>Resources may not be used in products that compete directly with our services</li>
                    <li>Sharing download links or bypassing opt-in requirements is prohibited</li>
                </ul>
                <p className="mt-4!">
                    <strong>Disclaimer:</strong> Resources are provided "as is" without warranty of any kind. We are not responsible for any issues arising from their use.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">4. Booking Consultations and Calls</h2>
                <p className="mb-4!"><strong>Scheduling:</strong></p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>Consultations are scheduled based on availability</li>
                    <li>Booking confirmations will be sent via email</li>
                    <li>A calendar invite will be provided with meeting details</li>
                </ul>
                <p className="mb-4! mt-6!"><strong>Cancellation and Rescheduling:</strong></p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>Cancellations or rescheduling must be made at least 24 hours in advance</li>
                    <li>Late cancellations (less than 24 hours) may result in forfeiture of the session</li>
                    <li>No-shows without prior notice will not be rescheduled</li>
                    <li>We reserve the right to cancel or reschedule with reasonable notice</li>
                </ul>
                <p className="mb-4! mt-6!"><strong>Consultation Terms:</strong></p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>Initial consultations are non-binding and for informational purposes</li>
                    <li>Confidential information shared during calls will be protected</li>
                    <li>Follow-up work requires a separate agreement and payment</li>
                </ul>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">5. User Conduct</h2>
                <p className="mb-4!">When using our website and services, you agree to:</p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>Provide accurate and truthful information</li>
                    <li>Not engage in any unlawful or fraudulent activities</li>
                    <li>Not attempt to hack, disrupt, or damage the website</li>
                    <li>Not use automated systems (bots, scrapers) without permission</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not spam or send unsolicited communications</li>
                </ul>
                <p className="mt-4!">
                    Violation of these terms may result in immediate termination of access to our services.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">6. Intellectual Property</h2>
                <p className="mb-4!">
                    All content on this website, including but not limited to text, graphics, logos, images, code, and software, is the property of Bogdan Stevanovic and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="mb-4!"><strong>You may not:</strong></p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>Copy, reproduce, or distribute website content without permission</li>
                    <li>Use our trademarks, logos, or branding without authorization</li>
                    <li>Create derivative works from our proprietary materials</li>
                    <li>Reverse engineer or decompile any software or code</li>
                </ul>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">7. Payment and Refunds</h2>
                <p className="mb-4!">
                    For paid services (if applicable):
                </p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>Payment is required in full before services are rendered</li>
                    <li>Accepted payment methods include credit card, PayPal, and bank transfer</li>
                    <li>All prices are in USD/EUR unless otherwise stated</li>
                    <li>Refunds are evaluated on a case-by-case basis</li>
                    <li>Digital products and completed services are generally non-refundable</li>
                    <li>Refund requests must be made within 14 days of purchase</li>
                </ul>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">8. Limitation of Liability</h2>
                <p className="mb-4!">
                    To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages</li>
                    <li>We do not guarantee specific results or outcomes from our services</li>
                    <li>We are not responsible for third-party content, links, or services</li>
                    <li>Our total liability shall not exceed the amount paid for services (if any)</li>
                    <li>We are not liable for losses due to factors beyond our reasonable control</li>
                </ul>
                <p className="mt-4!">
                    <strong>Disclaimer:</strong> Information provided on this website is for general informational purposes only. While we strive for accuracy, we make no representations or warranties regarding completeness, reliability, or suitability.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">9. Indemnification</h2>
                <p>
                    You agree to indemnify, defend, and hold harmless Bogdan Stevanovic from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, violation of these terms, or infringement of any third-party rights.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">10. Third-Party Services and Links</h2>
                <p className="mb-4!">
                    Our website may contain links to third-party websites or integrate third-party services (e.g., Google Analytics, payment processors). We are not responsible for:
                </p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>The content, privacy policies, or practices of third-party sites</li>
                    <li>Availability or accuracy of external services</li>
                    <li>Transactions or interactions with third parties</li>
                </ul>
                <p className="mt-4!">
                    Your use of third-party services is subject to their respective terms and conditions.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">11. Data Protection and Privacy</h2>
                <p>
                    Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-(--primary-400) hover:underline">Privacy Policy</a> to understand how we collect, use, and protect your personal data in compliance with GDPR and applicable data protection laws.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">12. Modifications to Terms</h2>
                <p>
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. The "Last updated" date will reflect the most recent revision. Continued use of our services after changes constitutes acceptance of the updated terms.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">13. Termination</h2>
                <p className="mb-4!">
                    We may terminate or suspend your access to our services at any time, without prior notice or liability, for any reason, including:
                </p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>Violation of these Terms of Service</li>
                    <li>Fraudulent or illegal activity</li>
                    <li>Abuse of services or resources</li>
                    <li>Non-payment (for paid services)</li>
                </ul>
                <p className="mt-4!">
                    Upon termination, your right to use our services will cease immediately.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">14. Governing Law and Jurisdiction</h2>
                <p className="mb-4!">
                    These Terms of Service are governed by and construed in accordance with the laws of Serbia, without regard to its conflict of law principles.
                </p>
                <p className="mb-4!">
                    Any disputes arising from these terms or use of our services shall be subject to the exclusive jurisdiction of the courts of Serbia.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">15. Dispute Resolution</h2>
                <p className="mb-4!">
                    In the event of a dispute, we encourage informal resolution through direct communication. If a dispute cannot be resolved informally:
                </p>
                <ul className="list-disc pl-8! space-y-2">
                    <li>Parties agree to attempt mediation before pursuing legal action</li>
                    <li>Any legal proceedings must be initiated within one year of the dispute arising</li>
                    <li>Class action lawsuits are not permitted</li>
                </ul>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">16. Severability</h2>
                <p>
                    If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">17. Entire Agreement</h2>
                <p>
                    These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and Bogdan Stevanovic regarding the use of our services and supersede all prior agreements.
                </p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">18. Contact Information</h2>
                <p className="mb-4!">
                    If you have any questions or concerns about these Terms of Service, please contact us:
                </p>
                <p className="mb-2!"><strong>Email:</strong> <a href="mailto:contact@bogdanstevanovic.com" className="text-(--primary-400) hover:underline">contact@bogdanstevanovic.com</a></p>
                <p className="mb-2!"><strong>Website:</strong> <a href="https://bogdanstevanovic.com" className="text-(--primary-400) hover:underline">bogdanstevanovic.com</a></p>
            </section>

            <section className="py-8!">
                <h2 className="mb-6!">19. Acknowledgment</h2>
                <p>
                    By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
            </section>
        </div>
    )
}
export default page