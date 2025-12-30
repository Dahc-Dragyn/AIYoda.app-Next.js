'use client'

import Link from 'next/link'
import { appsData } from "@/lib/apps"
import {
  AlertTriangle,
  Clock,
  Coffee
} from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/ui/Footer"

export default function AppDockPage() {
  return (
    // 🌌 MAIN CONTAINER
    <div className="relative min-h-screen font-sans selection:bg-indigo-500/30 flex flex-col bg-black overflow-x-hidden">

      {/* 1. Background Image (Fixed) */}
      <div
        className="fixed inset-0 z-0 bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat"
      />

      {/* 2. Gradient Overlay (Adds Depth) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-indigo-950/20 via-black/10 to-black/80 pointer-events-none" />

      {/* 3. Dark Tint (Readability) */}
      <div className="fixed inset-0 z-0 bg-black/40 pointer-events-none" />

      {/* 4. Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* --- SYSTEM NOTICE --- */}
        <div className="bg-amber-950/40 border-b border-amber-900/30 p-3 text-center backdrop-blur-md">
          <div className="flex items-center justify-center gap-2 text-sm text-amber-400 font-medium tracking-wide">
            <AlertTriangle className="h-4 w-4" />
            <span>SYSTEM NOTICE: Complex AI Agents (PromptForge, Bookfinder, Quill, D&D Knowledge bot) are in Sleep Mode until Jan 1st.</span>
          </div>
        </div>

        <div className="flex-grow p-6 md:p-12 max-w-7xl mx-auto w-full">

          {/* --- HEADER --- */}
          <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-8">
            <div>
              <h1 className="text-6xl font-black tracking-tighter text-white mb-2 drop-shadow-2xl">
                AIYODA<span className="text-indigo-500 text-4xl font-light">.app</span>
              </h1>
              <p className="text-zinc-400 text-xl font-light tracking-wide">
                Experimental Micro-Tools & AI Agents & Bots
              </p>
            </div>

            {/* ☕ KO-FI SUPPORT BUTTON */}
            <Button asChild className="bg-[#818CF8] hover:bg-[#22C55E]/90 text-white border-0 shadow-[0_0_25px_rgba(129,140,248,0.4)] rounded-full px-8 py-6 text-md font-bold transition-all hover:scale-105 hover:-translate-y-1">
              <Link href="https://ko-fi.com/aiyoda" target="_blank" className="flex items-center gap-3">
                <Coffee className="h-5 w-5 fill-current" />
                Support AIYoda.app
              </Link>
            </Button>
          </div>

          {/* --- GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {appsData.map((app) => (
              <Card
                key={app.title}
                className={`
                  group relative overflow-hidden flex flex-col h-full
                  border border-white/20 
                  !bg-black/20 backdrop-blur-md 
                  transition-all duration-300 ease-out
                  hover:scale-[1.02] hover:-translate-y-1
                  hover:!bg-black/40 hover:border-indigo-500/40 
                  hover:shadow-2xl hover:shadow-indigo-500/10
                `}
              >
                <div className="p-7 flex flex-col h-full">

                  {/* Header */}
                  <div className="flex justify-between items-start mb-5">
                    <div className={`
                      p-3.5 rounded-2xl border transition-colors duration-300
                      ${app.status === 'live'
                        ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                        : 'bg-white/5 border-white/5 text-zinc-500 group-hover:text-zinc-400'}
                    `}>
                      <app.icon className="h-8 w-8 stroke-[1.5]" />
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      {app.status === 'offline' && (
                        <Badge variant="outline" className="border-red-500/30 text-red-400 bg-red-950/30 backdrop-blur-sm px-3">Offline</Badge>
                      )}
                      {app.status === 'live' && (
                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 bg-emerald-950/30 backdrop-blur-sm shadow-[0_0_10px_rgba(16,185,129,0.1)] px-3">Live</Badge>
                      )}
                      {app.warning && (
                        <Badge variant="secondary" className="bg-amber-500/10 text-amber-300 border border-amber-500/20 flex gap-1.5 backdrop-blur-sm">
                          <Clock className="h-3 w-3" /> {app.warning}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-8 flex-grow">
                    <h3 className={`text-3xl font-extrabold mb-2 tracking-tight ${app.status === 'offline' ? 'text-zinc-500' : 'text-zinc-100 group-hover:text-white transition-colors'}`}>
                      {app.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                      {app.desc}
                    </p>
                    {app.note && (
                      <p className="text-xs text-red-400/80 mt-3 font-mono border-l-2 border-red-900/50 pl-3 py-1 bg-red-950/10 rounded-r">
                        {app.note}
                      </p>
                    )}
                  </div>

                  {/* Footer / Action */}
                  <div className="mt-auto pt-4 border-t border-white/5 flex gap-2">
                    {/* 1. Launch Button (Yoda Skin) */}
                    {app.status === 'live' ? (
                      <Button asChild className="flex-1 bg-lime-700 hover:bg-lime-600 text-white border-0 font-bold tracking-wide shadow-lg shadow-lime-900/20 transition-all">
                        <Link href={app.url} target="_blank">Launch</Link>
                      </Button>
                    ) : (
                      <Button disabled className="flex-1 bg-white/5 text-zinc-500 border border-white/5 cursor-not-allowed font-medium">
                        Jan 1st
                      </Button>
                    )}

                    {/* 2. New "Docs" Button (Star Wars Yellow Solid) */}
                    {app.slug && (
                      <Button
                        asChild
                        className="bg-[#FFE81F] hover:bg-yellow-400 text-black font-bold border-0 shadow-lg shadow-yellow-900/20 transition-all"
                      >
                        <Link href={`/apps/${app.slug}`}>Docs</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}