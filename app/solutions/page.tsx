"use client";

import Image from "next/image";
import { MoveRight, Zap, Target, RefreshCw, BarChart3, Leaf } from "lucide-react";
import CountUpNumber from "@/components/CountUpNumber";
import Link from "next/link";

export default function Solutions() {
    return (
        <div className="min-h-screen text-deep-forest">

            {/* ========== HERO ========== */}
            <section className="pt-6 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
                <div className="relative w-full h-[60vh] min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl group">
                    <Image
                        src="/images/modular-rig.png"
                        alt="Modular Kelp Rig in ocean"
                        fill
                        className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#012604]/90 via-[#012604]/40 to-transparent" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm flex items-center gap-2">
                            <Zap className="w-4 h-4 text-sky-blue" />
                            The Aqua Grid Solution
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white mb-6 leading-tight tracking-tight max-w-5xl drop-shadow-md">
                            Engineered for <span className="text-sky-blue">Scale.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/85 max-w-2xl font-medium mb-10 drop-shadow-sm leading-relaxed">
                            Our 200ft x 10ft modular grid relies on a patent-pending siphon pump system, maximizing nutrient availability year-round to ensure massive kelp yields.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========== METRICS ========== */}
            <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            <div className="w-12 h-12 bg-light-green rounded-xl flex items-center justify-center border border-kelp-green/20 group-hover:bg-kelp-green transition-colors duration-300">
                                <Target className="w-6 h-6 text-kelp-green group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold">Base Setup Cost</h3>
                        </div>
                        <p className="text-slate mb-6">Complete materials, rigging, and seeding hardware for the fundamental 200x10 module.</p>
                        <div className="text-5xl font-black text-deep-forest group-hover:text-kelp-green transition-colors duration-300">
                            <CountUpNumber end={6500} prefix="$" />
                        </div>
                    </div>

                    <div className="glass-card p-10 group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center border border-sky-blue/20 group-hover:bg-royal-blue transition-colors duration-300">
                                <RefreshCw className="w-6 h-6 text-royal-blue group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold">Annual Maint.</h3>
                        </div>
                        <p className="text-slate mb-6">Routine upkeep, partial reseeding if necessary, and infrastructure checks.</p>
                        <div className="text-5xl font-black text-deep-forest group-hover:text-royal-blue transition-colors duration-300">
                            <CountUpNumber end={600} prefix="$" />
                        </div>
                    </div>

                    <div className="bg-deep-forest text-white p-10 rounded-[2.5rem] shadow-lg hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-kelp-green blur-3xl opacity-40 transition-opacity group-hover:opacity-70" />
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                                <BarChart3 className="w-6 h-6 text-sky-blue" />
                            </div>
                            <h3 className="text-xl font-bold">Annual Revenue</h3>
                        </div>
                        <p className="text-white/65 mb-6 relative z-10">Conservative projected revenue per module generated through raw biomass sales.</p>
                        <div className="text-5xl font-black text-white relative z-10">
                            <CountUpNumber end={3000} prefix="$" suffix="+" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== SIPHON INNOVATION ========== */}
            <section className="pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card p-12 md:p-16 relative flex flex-col md:flex-row items-center justify-between gap-12 group">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-light-blue rounded-full blur-[180px] opacity-40" />

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
                        <div className="bg-gradient-to-br from-sky-blue to-[#3D8FBF] p-10 rounded-[2rem] shadow-2xl hover:scale-[1.03] transition-transform duration-500">
                            <h3 className="text-white font-bold text-lg mb-2 opacity-90">Payback Period</h3>
                            <div className="text-6xl font-black text-white mb-2 leading-none">3 <span className="text-3xl font-bold">Years</span></div>
                            <p className="text-white/85 font-medium">Fast return on investment, enabling communities to rapidly expand their local Aqua Grid networks.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== CTA ========== */}
            <section className="bg-deep-forest text-white py-24 mt-8 rounded-t-[3rem] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-blue rounded-full blur-[150px]" />
                </div>
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to review the technical details?</h2>
                    <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">Explore the data behind our system or book a technical deep-dive with our engineering team.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="https://cal.com/aquagrid" target="_blank" className="bg-sky-blue text-white hover:bg-[#4A9BC9] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 text-lg">
                            Schedule Technical Review
                        </Link>
                        <Link href="/impact" className="btn-secondary px-8 py-4 text-lg flex items-center justify-center gap-2">
                            See Ocean Impact <MoveRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
