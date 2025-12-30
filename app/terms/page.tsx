import Link from 'next/link';

export default function TermsPage() {
    return (
        <div className="relative min-h-screen font-sans text-zinc-300 selection:bg-indigo-500/30 flex flex-col bg-black">

            {/* Background Layers */}
            <div className="fixed inset-0 z-0 bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat opacity-50" />
            <div className="fixed inset-0 z-0 bg-black/60 backdrop-blur-sm" />

            {/* Content Container */}
            <div className="relative z-10 p-6 md:p-12 max-w-4xl mx-auto w-full">

                {/* Glass Card */}
                <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">

                    {/* Navigation */}
                    <div className="mb-8 flex flex-wrap gap-4 text-sm font-medium border-b border-white/10 pb-6 text-zinc-400">
                        <Link href="/" className="hover:text-indigo-400 transition-colors flex items-center gap-1">← Home</Link>
                        <span>|</span>
                        <Link href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="/safety" className="hover:text-indigo-400 transition-colors">Safety Standards</Link>
                    </div>

                    {/* Typography Article */}
                    <article className="prose prose-invert prose-zinc max-w-none 
            prose-headings:text-indigo-100 prose-headings:font-bold
            prose-h1:text-4xl prose-h1:mb-2
            prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-li:marker:text-indigo-500">

                        <h1>Terms of Use</h1>
                        <p className="text-zinc-400 italic text-sm mt-0 mb-8">Effective Date: January 2nd, 2025</p>

                        <p className="lead">By using AIYODA apps, you agree that you are human and not an automated bot script.</p>

                        <h3>1. Acceptance of Terms</h3>
                        <p>
                            By accessing or using the AIYODA ecosystem (the "Service"), you agree to be bound by these Terms.
                            These tools are provided for educational and entertainment purposes.
                        </p>

                        <h3>2. Acceptable Use</h3>
                        <p>You agree NOT to use the Service for:</p>
                        <ul>
                            <li>Automated scraping or high-velocity API calls without permission.</li>
                            <li>Generating content that violates local or international laws.</li>
                            <li>Attempting to bypass our Caddy proxy or authentication layers.</li>
                        </ul>

                        <h3>3. Disclaimer</h3>
                        <p>
                            The Service is provided "AS IS". Our AI agents (including Jane Austen and the D&D Arbiter) may hallucinate facts.
                            Do not use "Life Coach" for medical or psychiatric advice.
                        </p>

                        <h3>4. Contact</h3>
                        <p>
                            Issues? Email us at <a href="mailto:aiyodachad@gmail.com">aiyodachad@gmail.com</a>.
                        </p>
                    </article>

                </div>
            </div>
        </div>
    );
}