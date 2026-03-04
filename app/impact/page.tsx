"use client";

import CountUpNumber from "@/components/CountUpNumber";
import { Clock } from "lucide-react";

export default function Impact() {
    return (
        <div className="bg-sandstone min-h-screen pt-16 font-sans">
            {/* By The Numbers - Dark Elegant Section */}
            <section id="impact" className="py-32 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-seafoam-teal/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-deep-kelp/5 text-deep-kelp text-xs font-bold tracking-widest uppercase mb-6 border border-deep-kelp/10 backdrop-blur-sm">Real Results</span>
                        <h2 className="text-5xl md:text-6xl mb-6 font-serif font-bold text-deep-kelp">Tangible Impact</h2>
                        <p className="text-driftwood/60 font-medium tracking-widest uppercase text-sm">Per Hectare Annually</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32 border-b border-deep-kelp/10 pb-20">
                        {[
                            { val: 15, suffix: "t", label: "CO2 Absorbed" },
                            { val: 50, suffix: "%", label: "Acidity Reduction" },
                            { val: 3, suffix: "x", label: "Fish Population" },
                            { val: 45, prefix: "$", suffix: "k", label: "Annual Revenue" }
                        ].map((item, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-5xl md:text-7xl font-bold mb-4 text-deep-kelp font-serif drop-shadow-sm group-hover:scale-110 transition-transform duration-500 ease-out">
                                    <CountUpNumber
                                        end={item.val}
                                        suffix={item.suffix}
                                        prefix={item.prefix}
                                        duration={2500}
                                    />
                                </div>
                                <div className="text-seafoam-teal font-bold uppercase text-xs tracking-widest">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/40 shadow-2xl shadow-mist-blue/5"></div>
                        <div className="relative z-10 p-12 lg:p-20">
                            <div className="grid lg:grid-cols-3 gap-16">
                                <div>
                                    <h3 className="text-4xl mb-6 font-serif font-bold text-deep-kelp">Economic <br /> Viability</h3>
                                    <p className="text-driftwood/80 leading-relaxed font-light text-lg">
                                        Our model ensures sustainability is profitable. By reducing operational costs and maximizing yield, we create a system that pays for itself.
                                    </p>
                                </div>
                                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-12">
                                    <div className="p-6 rounded-2xl bg-white/40 border border-white/30 hover:bg-white/60 transition-colors">
                                        <div className="text-sm text-deep-kelp/70 uppercase tracking-widest mb-2 font-bold">Investment</div>
                                        <div className="text-4xl font-bold mb-2 text-deep-kelp font-serif">$85,000</div>
                                        <div className="text-sm text-deep-kelp/50">per hectare setup</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-seafoam-teal/10 border border-seafoam-teal/20 hover:bg-seafoam-teal/15 transition-colors">
                                        <div className="text-sm text-seafoam-teal uppercase tracking-widest mb-2 font-bold">Projected Profit</div>
                                        <div className="text-4xl font-bold mb-2 text-seafoam-teal font-serif">$33,000</div>
                                        <div className="text-sm text-deep-kelp/50">annual recurring (Year 3+)</div>
                                    </div>
                                    <div className="col-span-2 pt-8 border-t border-deep-kelp/10">
                                        <div className="flex items-center gap-4 text-sm text-deep-kelp/70 font-medium">
                                            <div className="p-2 rounded-full bg-seafoam-teal/10">
                                                <Clock className="w-5 h-5 text-seafoam-teal" />
                                            </div>
                                            <span>Break-even period: <strong className="text-deep-kelp">2.5 Years</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
