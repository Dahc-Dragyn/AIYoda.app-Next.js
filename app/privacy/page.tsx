import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="relative min-h-screen font-sans text-zinc-300 selection:bg-indigo-500/30 flex flex-col bg-black">

            {/* Background Layers (Space Theme) */}
            <div className="fixed inset-0 z-0 bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat opacity-50" />
            <div className="fixed inset-0 z-0 bg-black/60 backdrop-blur-sm" />

            {/* Content Container */}
            <div className="relative z-10 p-6 md:p-12 max-w-4xl mx-auto w-full">

                {/* Glass Card */}
                <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">

                    {/* Navigation Links */}
                    <div className="mb-8 flex flex-wrap gap-4 text-sm font-medium border-b border-white/10 pb-6 text-zinc-400">
                        <Link href="/" className="hover:text-indigo-400 transition-colors flex items-center gap-1">← Home</Link>
                        <span>|</span>
                        <Link href="/safety" className="hover:text-indigo-400 transition-colors">Child Safety Standards</Link>
                        <span>|</span>
                        <Link href="/terms" className="hover:text-indigo-400 transition-colors">Terms of Use</Link>
                    </div>

                    {/* Typography Article */}
                    <article className="prose prose-invert prose-zinc max-w-none 
            prose-headings:text-indigo-100 prose-headings:font-bold
            prose-h1:text-4xl prose-h1:mb-2
            prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-li:marker:text-indigo-500">

                        <h1>Privacy Policy</h1>
                        <p className="text-zinc-400 italic text-sm mt-0 mb-8">Effective Date: January 2nd, 2025</p>

                        <section>
                            <p className="lead border-l-4 border-indigo-500 pl-4 bg-white/5 p-4 rounded-r">
                                Your privacy is important to us. We do not sell your data to bots.
                            </p>
                        </section>

                        <section>
                            <h2>1. Introduction</h2>
                            <p>
                                AIyoda ("us", "we", or "our") operates the AIyoda website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
                            </p>
                        </section>

                        <section>
                            <h2>2. Information Collection</h2>
                            <p>We collect minimal information to provide and improve our Service.</p>

                            <h3>Types of Data Collected</h3>
                            <h4>Personal Data</h4>
                            <p>While using our Service, we may ask you to provide us with certain personally identifiable information, mainly limited to:</p>
                            <ul>
                                <li>Email address (for authentication only)</li>
                                <li>Cookies and Usage Data</li>
                            </ul>

                            <h4>Usage Data</h4>
                            <p>
                                We may also collect information on how the Service is accessed and used ("Usage Data"). This may include your IP address, browser type, and the pages you visit.
                            </p>
                        </section>

                        <section>
                            <h2>3. Use of Data</h2>
                            <p>AIyoda uses the collected data to provide and maintain the Service, provide support, monitor usage, and detect technical issues.</p>
                        </section>

                        <section>
                            <h2>4. Transfer Of Data</h2>
                            <p>
                                Your information may be transferred to and maintained on computers located outside of your state or country where data protection laws may differ. We primarily process data in the United States (Google Cloud regions).
                            </p>
                        </section>

                        <section>
                            <h2>5. Disclosure Of Data</h2>
                            <p>AIyoda may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation or protect the personal safety of users.</p>
                        </section>

                        <section>
                            <h2>6. Security</h2>
                            <p>
                                We use commercial grade encryption (HTTPS/TLS) for all data transmission. However, remember that no method of transmission over the Internet is 100% secure.
                            </p>
                        </section>

                        {/* --- UPDATED SECTION TO MATCH SAFETY STANDARDS --- */}
                        <section>
                            <h2>7. Children's Privacy</h2>
                            <p>
                                <strong>General Age Limit:</strong> Our Service addresses users aged <strong>13 and older</strong>.
                            </p>
                            <p>
                                We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and become aware that your child has provided us with Personal Data, please contact us immediately so we can remove that data.
                            </p>
                            <p>
                                <em>Note: Specific apps may have different recommended age ratings (e.g., "Perfect AI Boyfriend" is recommended for 13+). See our <Link href="/safety">Child Safety Standards</Link> for details.</em>
                            </p>
                        </section>

                        <section>
                            <h2>8. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us:</p>
                            <ul>
                                <li>
                                    By email: <a href="mailto:aiyodachad@gmail.com">aiyodachad@gmail.com</a>
                                </li>
                            </ul>
                        </section>

                    </article>
                </div>
            </div>
        </div>
    );
}