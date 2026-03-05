"use client";

import { Droplets, Globe2, Activity, Sprout, Wind } from "lucide-react";
import CountUpNumber from "@/components/CountUpNumber";
import Image from "next/image";

export default function Impact() {
    return (
        <div className="min-h-screen text-deep-forest">

            {/* ========== HERO ========== */}
            <section className="pt-6 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
                <div className="relative w-full h-[60vh] min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl text-white flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#012604] via-[#01340A] to-[#003273]">
                    <div className="absolute inset-0 opacity-15">
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-blue rounded-full blur-[180px]" />
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-kelp-green rounded-full blur-[180px]" />
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                            <Globe2 className="w-4 h-4 text-[#A8E6A3]" />
                            Global Impact
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-md">
                            Reversing <span className="text-sky-blue">Acidification</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/75 font-medium leading-relaxed max-w-2xl mx-auto">
                            By harnessing the fastest-growing organism on the planet, we are combating a 30% rise in oceanic acidity and providing a haven for marine life.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========== CORE METRICS ========== */}
            <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <span className="text-kelp-green font-bold uppercase tracking-widest text-sm mb-4 block">• Verified Metrics</span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] text-deep-forest mb-6">Actionable Environmental Data.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass-card p-10 group">
                        <div className="w-14 h-14 bg-light-blue rounded-2xl flex items-center justify-center mb-8 border border-sky-blue/20">
                            <Wind className="w-6 h-6 text-sky-blue group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-5xl font-black text-deep-forest mb-2">
                            <CountUpNumber end={1130} /> kg
                        </h3>
                        <p className="text-xl font-bold text-royal-blue mb-4">CO₂ Sequestered</p>
                        <p className="text-slate font-medium">Absorbed per module annually, functioning as the ultimate marine carbon sink.</p>
                    </div>

                    <div className="glass-card p-10 group">
                        <div className="w-14 h-14 bg-light-green rounded-2xl flex items-center justify-center mb-8 border border-kelp-green/20">
                            <Sprout className="w-6 h-6 text-kelp-green group-hover:-rotate-12 transition-transform" />
                        </div>
                        <h3 className="text-5xl font-black text-deep-forest mb-2">
                            <CountUpNumber end={1100} /> kg
                        </h3>
                        <p className="text-xl font-bold text-kelp-green mb-4">O₂ Produced</p>
                        <p className="text-slate font-medium">Vital oxygen produced per module annually, immediately revitalizing dead zones.</p>
                    </div>

                    <div className="bg-deep-forest p-10 rounded-[2.5rem] text-white shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-sky-blue blur-3xl opacity-25" />
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/20">
                            <Activity className="w-6 h-6 text-sky-blue group-hover:animate-pulse" />
                        </div>
                        <h3 className="text-5xl font-black text-white mb-2">0%</h3>
                        <p className="text-xl font-bold text-sky-blue mb-4">Acidity Rise Inside</p>
                        <p className="text-white/65 font-medium">Inside the kelp perimeter, local acidity levels stabilize entirely, creating a sanctuary for shellfish.</p>
                    </div>
                </div>
            </section>

            {/* ========== ECOSYSTEM SERVICES ========== */}
            <section className="pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8 glass-card p-8 md:p-12 items-center">
                    <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px] rounded-[2rem] overflow-hidden group shadow-md">
                        <Image src="/images/abstract-ocean.png" alt="Clean Ocean" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center py-6 px-4 md:px-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-deep-forest mb-6">Restoring Ecosystem Economics</h2>
                        <p className="text-lg text-slate mb-8 leading-relaxed">
                            Beyond direct farming output, the biological presence of a kelp farm provides extraordinary ancillary value to the immediate surrounding environment.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-light-green rounded-xl flex items-center justify-center shrink-0 border border-kelp-green/20">
                                    <Droplets className="w-5 h-5 text-kelp-green" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-deep-forest mb-1.5"><CountUpNumber end={28068} prefix="$" /> / ha / year</h4>
                                    <p className="text-slate">Estimated Economic Value of Kelp Forests globally.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center shrink-0 border border-sky-blue/20">
                                    <Globe2 className="w-5 h-5 text-royal-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-deep-forest mb-1.5"><CountUpNumber end={3187} /> kg / ha / year</h4>
                                    <p className="text-slate">Boost in adjacent Fisheries Production.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
