import Link from 'next/link';
import { Badge } from "@/components/ui/badge"

export default function DirectoryPage() {
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
                        <Link href="/" className="hover:text-indigo-400 transition-colors flex items-center gap-1">← Return Home</Link>
                    </div>

                    {/* FIX: Removed 'hover:prose-a:underline' so links don't all light up at once */}
                    <article className="prose prose-invert prose-zinc max-w-none prose-headings:text-indigo-100 prose-a:text-indigo-400 prose-a:no-underline">

                        <h1>AIYoda Directory</h1>
                        <p className="lead text-zinc-400">
                            A complete index of all public AIYODA endpoints, apps, and legal documents.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

                            {/* SECTION 1: MAIN PAGES */}
                            <div>
                                <h3 className="text-white border-b border-white/10 pb-2 mb-4">Legal & Information</h3>
                                <ul className="space-y-2 list-none pl-0">
                                    <li><Link href="/" className="hover:underline transition-all">Home / App Dock</Link></li>
                                    <li><Link href="/privacy" className="hover:underline transition-all">Privacy Policy</Link></li>
                                    <li><Link href="/terms" className="hover:underline transition-all">Terms of Use</Link></li>
                                    <li><Link href="/safety" className="hover:underline transition-all">Child Safety Standards</Link></li>
                                    <li>
                                        <Link href="/sitemap.xml" className="text-zinc-600 hover:text-zinc-500 text-xs font-mono hover:underline transition-all">
                                            View XML (For Bots)
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* SECTION 2: THE APPS */}
                            <div>
                                <h3 className="text-white border-b border-white/10 pb-2 mb-4">AI Agents & Tools</h3>
                                <ul className="space-y-3 list-none pl-0">
                                    {/* OFFLINE APPS */}
                                    <li className="flex items-center justify-between">
                                        <span className="text-zinc-500 cursor-not-allowed">PromptForge</span>
                                        <Badge variant="outline" className="text-red-400 border-red-900/50 text-[10px]">Offline</Badge>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-zinc-500 cursor-not-allowed">BookFinder</span>
                                        <Badge variant="outline" className="text-red-400 border-red-900/50 text-[10px]">Offline</Badge>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-zinc-500 cursor-not-allowed">Digital Quill</span>
                                        <Badge variant="outline" className="text-red-400 border-red-900/50 text-[10px]">Offline</Badge>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-zinc-500 cursor-not-allowed">D&D Knowledge</span>
                                        <Badge variant="outline" className="text-red-400 border-red-900/50 text-[10px]">Offline</Badge>
                                    </li>

                                    {/* LIVE APPS */}
                                    <li className="flex items-center justify-between">
                                        <Link href="https://life-coach-service-140939405627.us-west1.run.app" target="_blank" className="hover:underline transition-all">Life Coach</Link>
                                        <Badge variant="outline" className="text-emerald-400 border-emerald-900/50 text-[10px]">Live</Badge>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <Link href="https://idx-rock-lizard-spock-97564177-140939405627.us-west1.run.app" target="_blank" className="hover:underline transition-all">Rock Lizard Spock</Link>
                                        <Badge variant="outline" className="text-emerald-400 border-emerald-900/50 text-[10px]">Live</Badge>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <Link href="https://tell-me-like-a-5yo-140939405627.us-east1.run.app" target="_blank" className="hover:underline transition-all">Explain Like I'm 5</Link>
                                        <Badge variant="outline" className="text-emerald-400 border-emerald-900/50 text-[10px]">Live</Badge>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <Link href="https://idx-perfect-boyfriend-7638571-z3iigmilpq-uw.a.run.app/" target="_blank" className="hover:underline transition-all">Perfect AI Boyfriend</Link>
                                        <Badge variant="outline" className="text-emerald-400 border-emerald-900/50 text-[10px]">Live</Badge>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <Link href="https://idx-russian-news-rss-4685253-140939405627.us-east1.run.app" target="_blank" className="hover:underline transition-all">WarNews RSS</Link>
                                        <Badge variant="outline" className="text-emerald-400 border-emerald-900/50 text-[10px]">Live</Badge>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <Link href="https://book-scene-service-140939405627.us-west1.run.app" target="_blank" className="hover:underline transition-all">Scene Generator</Link>
                                        <Badge variant="outline" className="text-emerald-400 border-emerald-900/50 text-[10px]">Live</Badge>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <Link href="https://turtle-service-140939405627.us-central1.run.app" target="_blank" className="hover:underline transition-all">Turtle Race</Link>
                                        <Badge variant="outline" className="text-emerald-400 border-emerald-900/50 text-[10px]">Live</Badge>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}