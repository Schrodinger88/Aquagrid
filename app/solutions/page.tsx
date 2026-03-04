"use client";

import { CheckCircle2, Leaf } from "lucide-react";

export default function Solutions() {
    return (
        <div className="bg-sandstone min-h-screen pt-16 font-sans">
            {/* Our Solution - Split Layout */}
            <section id="solution" className="py-32 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-seafoam-teal/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-mist-blue/10 text-mist-blue text-xs font-bold tracking-widest uppercase mb-6 border border-mist-blue/20 backdrop-blur-sm">Technology</span>
                            <h2 className="text-5xl md:text-6xl mb-8 text-deep-kelp font-serif font-bold leading-tight">Modular Kelp Farming <br /> <span className="text-seafoam-teal italic">Reimagined</span></h2>
                            <p className="text-xl text-driftwood/80 mb-12 leading-relaxed font-light">
                                Aquagrid's patent-pending system combines cutting-edge marine engineering with nature's most powerful carbon capture organism: kelp.
                            </p>

                            <div className="space-y-8">
                                {[
                                    {
                                        title: "Smart & Scalable",
                                        points: "Modular units adapt to any coastal environment with rapid deployment."
                                    },
                                    {
                                        title: "Self-Sustaining",
                                        points: "Low-maintenance operation creates a permanent habitat for marine life."
                                    },
                                    {
                                        title: "Proven Resilience",
                                        points: "Engineered for extreme durability based on decades of marine research."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-seafoam-teal/20 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                <CheckCircle2 className="h-5 w-5 text-seafoam-teal" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2 text-deep-kelp font-serif">{item.title}</h4>
                                            <p className="text-driftwood/70 leading-relaxed">{item.points}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] bg-white/40 backdrop-blur-xl rounded-[3rem] p-4 shadow-2xl shadow-mist-blue/10 rotate-3 transition-transform hover:rotate-0 duration-700 border border-white/50">
                                <div className="h-full w-full bg-gradient-to-br from-white to-sandstone rounded-[2.5rem] overflow-hidden relative flex items-center justify-center border border-white/50 shadow-inner">
                                    <Leaf className="h-64 w-64 text-seafoam-teal/20" />
                                    <div className="absolute inset-x-0 bottom-0 p-8 bg-white/70 backdrop-blur-md border-t border-white/30">
                                        <p className="font-serif italic text-deep-kelp text-xl text-center">"Nature's most powerful carbon capture technology."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works - Vertical Roadmap */}
            <section id="how-it-works" className="py-32 bg-white relative">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 opacity-60">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-sandstone"></path>
                    </svg>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-deep-kelp">From Design to Harvest</h2>
                        <p className="text-xl text-driftwood/60 font-light">A streamlined process for rapid deployment</p>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>

                        <div className="space-y-20">
                            {[
                                {
                                    title: "Design & Planning",
                                    time: "Months 1-2",
                                    desc: "Site assessment and environmental analysis to identify optimal locations.",
                                },
                                {
                                    title: "Installation",
                                    time: "Months 3-4",
                                    desc: "Rapid deployment of modular units with minimal environmental disruption.",
                                },
                                {
                                    title: "Growth & Monitoring",
                                    time: "Months 5-8",
                                    desc: "Smart monitoring tracks rapid kelp growth and water quality in real-time.",
                                },
                                {
                                    title: "Harvest & Impact",
                                    time: "Month 9+",
                                    desc: "First harvest yields returns. Continuous cycles provide year-round restoration.",
                                }
                            ].map((step, i) => (
                                <div key={i} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} group`}>

                                    {/* Dot */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-seafoam-teal z-10 mt-1.5 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>

                                    {/* Content */}
                                    <div className={`pl-20 md:pl-0 flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <h4 className="text-3xl font-serif font-bold text-deep-kelp mb-3">{step.title}</h4>
                                        <span className="inline-block py-1 px-3 rounded-lg bg-sandstone text-mist-blue text-xs font-bold uppercase mb-4 tracking-wider border border-slate-200">{step.time}</span>
                                        <p className={`text-driftwood/70 leading-relaxed ${i % 2 === 0 ? 'md:ml-auto' : ''} max-w-md text-lg font-light`}>{step.desc}</p>
                                    </div>

                                    <div className="hidden md:block flex-1"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
