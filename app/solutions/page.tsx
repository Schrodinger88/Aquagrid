"use client";

import Image from "next/image";
import { MoveRight, Zap, Target, RefreshCw, BarChart3, Settings2, Leaf } from "lucide-react";
import CountUpNumber from "@/components/CountUpNumber";
import Link from "next/link";

export default function Solutions() {
    return (
        <div className="bg-[#FAF9F6] min-h-screen text-deep-forest font-sans">

            {/* Contained Hero Section */}
            <section className="pt-8 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
                <div className="relative w-full h-[60vh] min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl group">
                    <Image
                        src="/images/modular-rig.png"
                        alt="Modular Kelp Rig in ocean"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/90 via-deep-forest/40 to-transparent" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm flex items-center gap-2">
                            <Settings2 className="w-4 h-4 text-sky-blue" />
                            The Aqua Grid Solution
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-6 leading-tight tracking-tight max-w-5xl drop-shadow-md">
                            Engineered for <span className="text-white">Scale.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl font-medium mb-10 drop-shadow-sm leading-relaxed">
                            Our 200ft x 10ft modular grid relies on a patent-pending siphon pump system, maximizing nutrient availability year-round to ensure massive kelp yields.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Solution Metrics */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 max-w-3xl">
                    <span className="text-kelp-green font-bold uppercase tracking-widest text-sm mb-4 block">• Scalable Economics</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Rapid Deployment</h2>
                    <p className="text-lg text-slate leading-relaxed">
                        Aqua Grid brings kelp farming out of the cottage industry and into large-scale commercial viability through highly predictable, optimized modular rig frameworks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="glass-card p-10 group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-light-green rounded-xl flex items-center justify-center border border-kelp-green/20 group-hover:bg-kelp-green transition-colors">
                                <Target className="w-6 h-6 text-kelp-green group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold">Base Setup Cost</h3>
                        </div>
                        <p className="text-slate mb-6 line-clamp-2">Complete materials, rigging, and seeding hardware for the fundamental 200x10 module.</p>
                        <div className="text-5xl font-black text-deep-forest group-hover:text-kelp-green transition-colors">
                            <CountUpNumber end={6500} prefix="$" />
                        </div>
                    </div>

                    <div className="glass-card p-10 group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center border border-ocean-blue/20 group-hover:bg-ocean-blue transition-colors">
                                <RefreshCw className="w-6 h-6 text-ocean-blue group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold">Annual Maint.</h3>
                        </div>
                        <p className="text-slate mb-6 line-clamp-2">Routine upkeep, partial reseeding if necessary, and infrastructure checks.</p>
                        <div className="text-5xl font-black text-deep-forest group-hover:text-ocean-blue transition-colors">
                            <CountUpNumber end={600} prefix="$" />
                        </div>
                    </div>

                    <div className="bg-deep-forest text-white p-10 rounded-[2rem] shadow-lg hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-kelp-green blur-3xl opacity-50 transition-opacity group-hover:opacity-80" />
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                                <BarChart3 className="w-6 h-6 text-sky-blue" />
                            </div>
                            <h3 className="text-xl font-bold">Annual Revenue</h3>
                        </div>
                        <p className="text-white/70 mb-6 relative z-10">Conservative projected revenue per module generated through raw biomass sales.</p>
                        <div className="text-5xl font-black text-white relative z-10">
                            <CountUpNumber end={3000} prefix="$" suffix="+" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Siphon Innovation Highlight */}
            <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card p-12 md:p-16 relative flex flex-col md:flex-row items-center justify-between gap-12 group">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-light-blue rounded-full blur-[150px] opacity-50" />

                    <div className="relative z-10 md:w-1/2">
                        <div className="inline-flex items-center gap-2 bg-light-green text-kelp-green px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4 shadow-sm border border-kelp-green/10">
                            <Zap className="w-4 h-4" /> Patent Pending
                        </div>
                        <h2 className="text-4xl font-bold mb-6 text-deep-forest">The Siphon Pump Advantage</h2>
                        <p className="text-lg text-slate leading-relaxed mb-6">
                            Unlike traditional ocean farming that depends heavily on seasonal upwelling for nutrients, our siphon pump technology creates an artificial upwelling loop.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Unlocking year-round growing seasons",
                                "Massive acceleration in carbon capture per unit",
                                "Lower spatial footprints for high biomass yields"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <Leaf className="w-5 h-5 text-kelp-green mt-1 shrink-0" />
                                    <span className="text-slate font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10 md:w-5/12 w-full">
                        <div className="bg-sky-blue p-10 rounded-[2rem] shadow-2xl hover:scale-105 transition-transform duration-500">
                            <h3 className="text-white font-bold text-lg mb-2 opacity-90">Payback Period</h3>
                            <div className="text-6xl font-black text-white mb-2 leading-none">3 <span className="text-3xl font-bold">Years</span></div>
                            <p className="text-white/90 font-medium">Fast return on investment, enabling communities to rapidly expand their local Aqua Grid networks.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple CTA */}
            <section className="glass-card border-x-0 border-b-0 py-20 mt-12 rounded-none">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-deep-forest mb-6">Ready to review the technical details?</h2>
                    <div className="flex justify-center gap-4">
                        <Link href="https://cal.com/aquagrid" target="_blank" className="btn-primary px-8 py-4 text-lg hidden sm:flex">
                            Schedule Technical Review
                        </Link>
                        <Link href="/impact" className="btn-secondary px-8 py-4 text-lg flex">
                            See Ocean Impact <MoveRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
