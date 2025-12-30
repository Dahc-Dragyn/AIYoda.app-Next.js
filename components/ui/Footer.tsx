import Link from 'next/link'

export function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-950 py-8 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
                <div className="mb-4 md:mb-0">
                    <span className="font-bold text-zinc-300">AIYODA</span> © 2025
                </div>
                <div className="flex gap-6">
                    <Link href="/safety" className="hover:text-zinc-300 transition-colors">Safety</Link>
                    <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
                    <Link href="/directory" className="hover:text-zinc-300 transition-colors">Directory</Link>
                </div>
            </div>
        </footer>
    )
}