"use client";

import CountUpNumber from "@/components/CountUpNumber";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, DollarSign, Leaf, Waves, BarChart3, Globe, CheckCircle2 } from "lucide-react";

export default function Impact() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-deep-forest via-[#023808] to-midnight py-20 lg:py-28">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-sky-blue rounded-full blur-[150px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 text-sm font-bold tracking-wider uppercase backdrop-blur-md">
                            Real Results
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                            Tangible <span className="text-sky-blue">Impact</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                            Measurable environmental and economic outcomes per Aqua Grid system, backed by marine research and field data.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Stats */}
            <section className="section-padding bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="badge badge-blue mb-6">Environmental Impact</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-forest">Per Unit, Annually</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                        {[
                            { val: 1130, suffix: "kg", label: "CO₂ Absorbed", icon: <Leaf className="w-7 h-7 text-kelp-green" />, bg: "bg-light-green" },
                            { val: 1100, suffix: "kg", label: "O₂ Produced", icon: <Waves className="w-7 h-7 text-sky-blue" />, bg: "bg-light-blue" },
                            { val: 100, suffix: "x", label: "More O₂ than Forests", icon: <Globe className="w-7 h-7 text-ocean-blue" />, bg: "bg-blue-50" },
                            { val: 150, suffix: "%", label: "Acidity Rise by 2100", icon: <BarChart3 className="w-7 h-7 text-deep-forest" />, bg: "bg-sage-green/20" },
                        ].map((item, i) => (
                            <div key={i} className="text-center group p-8 rounded-3xl border border-border bg-cream hover:border-sky-blue hover:shadow-xl transition-all duration-300">
                                <div className={`w-16 h-16 rounded-[1.2rem] ${item.bg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                                    {item.icon}
                                </div>
                                <div className="stat-number mb-2 text-deep-forest group-hover:text-ocean-blue transition-colors">
                                    <CountUpNumber end={item.val} suffix={item.suffix} />
                                </div>
                                <div className="text-xs font-bold text-slate uppercase tracking-wider">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Ecosystem Services */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="badge badge-green mb-6">Ecosystem Services</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-forest">
                                Kelp Forests Generate <span className="text-kelp-green">$500B</span> Annually
                            </h2>
                            <p className="text-lg text-slate mb-8 leading-relaxed">
                                Global kelp ecosystem services provide immense economic and environmental value through fisheries production, nutrient cycling, and carbon sequestration.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: "Fisheries Production", value: "$29,900/ha/year", desc: "Essential resource for food security" },
                                    { label: "Nutrient Cycling", value: "$73,800/ha/year", desc: "Nitrogen removal, water quality improvement" },
                                    { label: "Carbon Sequestration", value: "4.91 Mt/year", desc: "Global carbon capture by kelp forests" },
                                ].map((item, i) => (
                                    <div key={i} className="p-6 bg-cream rounded-2xl border border-border hover:border-kelp-green/50 transition-colors">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-deep-forest text-lg">{item.label}</span>
                                            <span className="text-xl font-bold text-kelp-green">{item.value}</span>
                                        </div>
                                        <p className="text-sm text-slate">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fisheries Data */}
                        <div className="bg-gradient-to-br from-light-blue to-cream rounded-3xl border border-border p-10 shadow-inner">
                            <h3 className="text-2xl font-bold text-deep-forest mb-6">Northwest Atlantic Kelp Performance</h3>
                            <p className="text-slate mb-8 leading-relaxed text-lg">
                                Laminaria/Saccharina in the Northwest Atlantic — the highest performing kelp genus globally for fisheries production.
                            </p>
                            <div className="space-y-6">
                                <div className="p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-md">
                                    <div className="text-sm text-ocean-blue font-bold uppercase tracking-wider mb-2">Fisheries Production</div>
                                    <div className="text-4xl font-bold text-deep-forest">3,187 <span className="text-base font-semibold text-slate uppercase tracking-wider">kg/ha/year</span></div>
                                </div>
                                <div className="p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-md">
                                    <div className="text-sm text-kelp-green font-bold uppercase tracking-wider mb-2">Economic Value</div>
                                    <div className="text-4xl font-bold text-deep-forest">$28,068 <span className="text-base font-semibold text-slate uppercase tracking-wider">/ha/year</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Financial Model */}
            <section className="section-padding bg-cream border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge badge-blue mb-6">Financial Model</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-forest">Economic Viability</h2>
                        <p className="text-lg text-slate max-w-2xl mx-auto">
                            A transparent cost structure designed for sustainable returns
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-deep-forest to-midnight rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl">
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center hover:bg-white/15 transition-all">
                                <DollarSign className="w-10 h-10 text-sky-blue mx-auto mb-5" />
                                <div className="text-xs text-white/50 uppercase tracking-widest mb-3 font-bold">Setup Cost</div>
                                <div className="text-4xl font-bold text-white">$<CountUpNumber end={6500} /></div>
                                <div className="text-sm text-white/40 mt-3 font-medium">per unit</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center hover:bg-white/15 transition-all">
                                <TrendingUp className="w-10 h-10 text-kelp-green mx-auto mb-5" />
                                <div className="text-xs text-white/50 uppercase tracking-widest mb-3 font-bold">Annual Revenue</div>
                                <div className="text-4xl font-bold text-white">$<CountUpNumber end={3000} /><span className="text-2xl text-kelp-green ml-1">+</span></div>
                                <div className="text-sm text-white/40 mt-3 font-medium">kelp sales + yield increase</div>
                            </div>
                            <div className="bg-sky-blue/20 backdrop-blur-md rounded-2xl p-8 border border-sky-blue/30 text-center hover:bg-sky-blue/30 transition-all">
                                <Clock className="w-10 h-10 text-sky-blue mx-auto mb-5" />
                                <div className="text-xs text-sky-blue uppercase tracking-widest mb-3 font-bold">Payback Period</div>
                                <div className="text-4xl font-bold text-white"><CountUpNumber end={3} /> Years</div>
                                <div className="text-sm text-sky-blue/60 mt-3 font-medium">to break-even</div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
                                <h4 className="text-xl font-bold text-white mb-6">Recurring Revenue Streams</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Kelp sales (fertilizer, bioplastics, food)",
                                        "Increased shellfish farm yield",
                                        "Carbon credit potential",
                                        "Government subsidies for restoration",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-white/80">
                                            <div className="w-2 h-2 rounded-full bg-sky-blue shrink-0 shadow-[0_0_8px_rgba(90,171,217,0.8)]" />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
                                <h4 className="text-xl font-bold text-white mb-6">Cost Advantages</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Only $600 annual maintenance fee",
                                        "20% gross margin on system sales",
                                        "Minimal labor — seasonal only",
                                        "Simple harvest with pulley system",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-white/80">
                                            <div className="w-2 h-2 rounded-full bg-kelp-green shrink-0 shadow-[0_0_8px_rgba(18,90,26,0.8)]" />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
