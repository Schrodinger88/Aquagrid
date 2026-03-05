"use client";

import Image from "next/image";
import { Users, Droplets, Globe2, BookOpen, Target, Sparkles } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen text-deep-forest">

            {/* ========== HERO ========== */}
            <section className="pt-6 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
                <div className="relative w-full h-[60vh] min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl text-white flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#012604] via-[#01340A] to-[#012604]">
                    <div className="absolute inset-0 opacity-15">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kelp-green rounded-full blur-[180px]" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-blue rounded-full blur-[180px]" />
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                            <Users className="w-4 h-4 text-sky-blue" />
                            Who We Are
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-md">
                            Rooted in <span className="text-[#5AABD9]">Conservation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/75 font-medium leading-relaxed max-w-2xl mx-auto">
                            Founded through Enactus uOttawa, our multidisciplinary team combines marine science, engineering, and sustainable business to address one of our planet&apos;s most urgent challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========== MISSION / VISION ========== */}
            <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card p-12 group">
                        <div className="w-14 h-14 bg-light-blue rounded-2xl flex items-center justify-center mb-8 border border-sky-blue/20 group-hover:bg-sky-blue transition-colors duration-300">
                            <Target className="w-6 h-6 text-royal-blue group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h2 className="text-3xl font-bold text-deep-forest mb-4">Our Mission</h2>
                        <p className="text-lg text-slate leading-relaxed">
                            To remove greenhouse gases from waters, produce oxygen, and generate sustainable revenue for coastal communities through modular kelp farming systems.
                        </p>
                    </div>

                    <div className="bg-deep-forest text-white p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-kelp-green/30 blur-3xl rounded-full" />
                        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 relative z-10">
                            <Sparkles className="w-6 h-6 text-[#5AABD9]" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
                        <p className="text-lg text-white/70 leading-relaxed relative z-10">
                            A thriving blue planet where ethical kelp harvesting is the standard for ocean restoration — rebuilding marine chemistry while supporting coastal economies.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========== SCIENCE & TEAM ========== */}
            <section className="pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <span className="text-kelp-green font-bold uppercase tracking-widest text-sm mb-4 block">• Multidisciplinary Approach</span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] text-deep-forest mb-6">Student-Driven. Science-Backed.</h2>
                    <p className="text-slate max-w-2xl text-lg leading-relaxed">
                        By unifying biology, precision engineering, and market strategy, we bridge the gap between academic research and commercial viability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
                    {/* Image Block */}
                    <div className="md:col-span-7 relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg group">
                        <Image src="/images/science-analysis.png" alt="Marine Biologist holding kelp" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#012604]/85 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Field-Tested Biology</h3>
                            <p className="text-white/75 font-medium">Authentic research informing scalable deployment.</p>
                        </div>
                    </div>

                    {/* Disciplines Blocks */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                        <div className="glass-card p-8 flex-1 group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-light-green rounded-xl flex items-center justify-center border border-kelp-green/20">
                                    <Droplets className="w-5 h-5 text-kelp-green" />
                                </div>
                                <h4 className="text-2xl font-bold text-deep-forest">Marine Biology</h4>
                            </div>
                            <p className="text-slate leading-relaxed">Oceanography and ecosystem research ensuring maximum carbon sequestration efficiency.</p>
                        </div>

                        <div className="glass-card p-8 flex-1 group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center border border-sky-blue/20">
                                    <BookOpen className="w-5 h-5 text-royal-blue" />
                                </div>
                                <h4 className="text-2xl font-bold text-deep-forest">Engineering</h4>
                            </div>
                            <p className="text-slate leading-relaxed">Patent-pending aquaculture systems focusing on minimal disruption and high yield operations.</p>
                        </div>
                    </div>

                    {/* Wide Stat Block */}
                    <div className="md:col-span-12 glass-card p-12 flex flex-col md:flex-row items-center justify-between mt-6 group">
                        <div className="md:max-w-xl">
                            <div className="inline-flex items-center gap-2 bg-light-green text-kelp-green px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4">
                                <Globe2 className="w-4 h-4" /> Enactus Core Values
                            </div>
                            <h3 className="text-3xl font-bold text-deep-forest mb-4">Empowering Youth Impact</h3>
                            <p className="text-slate text-lg leading-relaxed">
                                Aqua Grid was born from a desire to take direct action on climate change. Through Enactus, we are driven by the belief that sustainable business models are the most powerful vehicles for social and environmental change.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-0 glass-panel p-8 rounded-[2rem] bg-deep-forest text-center min-w-[250px]">
                            <div className="text-5xl font-black text-sky-blue mb-2">100<span className="text-3xl">%</span></div>
                            <div className="text-white font-bold uppercase tracking-widest text-sm">Dedication to Ocean Health</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
