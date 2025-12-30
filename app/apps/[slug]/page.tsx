import { appsData } from "@/lib/apps"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Code } from "lucide-react"

// This tells Next.js which URLs exist (for static generation)
export async function generateStaticParams() {
    return appsData.map((app) => ({
        slug: app.slug,
    }))
}

// ⚠️ Using async/await for Next.js 15 params
export default async function AppDetailsPage({ params }: { params: Promise<{ slug: string }> }) {

    const resolvedParams = await params
    const app = appsData.find((a) => a.slug === resolvedParams.slug)

    if (!app) {
        return notFound()
    }

    return (
        <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-lime-900/50">

            {/* Background Layers */}
            <div className="fixed inset-0 z-0 bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat opacity-40" />
            <div className="fixed inset-0 z-0 bg-black/70 backdrop-blur-sm" />

            <div className="relative z-10 max-w-5xl mx-auto p-6 md:p-12">

                {/* Navigation */}
                <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-lime-400 mb-8 transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Back to Dock
                </Link>

                {/* Main Content Card */}
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-12 border-b border-white/10 pb-12">

                        {/* Huge Icon */}
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                            <app.icon className="h-16 w-16 text-lime-400" />
                        </div>

                        <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-4 mb-2">
                                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">{app.title}</h1>
                                {app.status === 'live' ? (
                                    <Badge className="bg-lime-900/50 text-lime-400 border-lime-500/50">Live</Badge>
                                ) : (
                                    <Badge variant="outline" className="text-red-400 border-red-900/50">Offline</Badge>
                                )}
                            </div>

                            <p className="text-xl text-zinc-400 mb-6">{app.desc}</p>

                            <div className="flex flex-wrap gap-4">
                                {/* Launch Button */}
                                <Button asChild className="bg-lime-700 hover:bg-lime-600 text-white font-bold shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                                    <Link href={app.url} target="_blank" className="flex gap-2">
                                        <ExternalLink className="h-4 w-4" /> Launch App
                                    </Link>
                                </Button>

                                {/* Global GitHub Button */}
                                <Button asChild variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-zinc-300">
                                    <Link href="https://github.com/Dahc-Dragyn?tab=repositories" target="_blank" className="flex items-center">
                                        <Code className="h-4 w-4 mr-2" /> View Developer GitHub
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Details & Architecture Grid */}
                    <div className="grid md:grid-cols-3 gap-12">

                        {/* Left Col: Description */}
                        <div className="md:col-span-2 space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    Architecture & Logic
                                </h2>
                                <div className="prose prose-invert prose-zinc max-w-none">
                                    <p className="text-lg leading-relaxed">{app.longDesc || "Detailed documentation coming soon..."}</p>
                                </div>
                            </section>
                        </div>

                        {/* Right Col: Tech Stack */}
                        <div className="space-y-6">
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                <h3 className="text-zinc-400 font-bold mb-4 uppercase text-xs tracking-wider">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {app.techStack ? (
                                        app.techStack.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="bg-zinc-900 text-zinc-300 border-zinc-700 hover:bg-zinc-800">
                                                {tech}
                                            </Badge>
                                        ))
                                    ) : (
                                        <span className="text-zinc-600 italic">No stack data</span>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}