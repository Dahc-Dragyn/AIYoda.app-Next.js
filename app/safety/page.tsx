import Link from 'next/link';

export default function SafetyPage() {
    return (
        <div className="relative min-h-screen font-sans text-zinc-300 selection:bg-indigo-500/30 flex flex-col bg-black">
            <div className="fixed inset-0 z-0 bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat opacity-50" />
            <div className="fixed inset-0 z-0 bg-black/60 backdrop-blur-sm" />

            <div className="relative z-10 p-6 md:p-12 max-w-4xl mx-auto w-full">
                <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">

                    <div className="mb-8 flex flex-wrap gap-4 text-sm font-medium border-b border-white/10 pb-6 text-zinc-400">
                        <Link href="/" className="hover:text-indigo-400 transition-colors">← Home</Link>
                        <span>|</span>
                        <Link href="/terms" className="hover:text-indigo-400 transition-colors">Terms</Link>
                        <span>|</span>
                        <Link href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy</Link>
                    </div>

                    <article className="prose prose-invert prose-zinc max-w-none prose-headings:text-indigo-100 prose-a:text-indigo-400">
                        <h1>Child Safety Standards</h1>
                        <p>AIYODA is committed to safety in AI generation.</p>

                        <h3>1. Age Restrictions</h3>
                        <p>
                            Our "Perfect AI Boyfriend" and "Digital Quill" apps are designed for users 13+.
                            The "Explain Like I'm 5" app is safe for all ages but should be used with parental supervision.
                        </p>

                        <h3>2. Content Filtering</h3>
                        <p>
                            Our backend APIs utilize OpenAI and Llama Guard safety filters to reject prompts that generate hate speech, self-harm, or sexual violence content.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
}