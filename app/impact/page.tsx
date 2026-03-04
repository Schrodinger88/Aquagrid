"use client";

import CountUpNumber from "@/components/CountUpNumber";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, DollarSign, Leaf, Waves, BarChart3, Globe } from "lucide-react";

export default function Impact() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-deep-forest via-[#023808] to-midnight text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-sky-blue rounded-full blur-[150px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 text-sm text-white/80 font-medium">
                            Real Results
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-[1.05]">
                            Tangible <span className="text-sky-blue">Impact</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            Measurable environmental and economic outcomes per Aqua Grid system, backed by marine research and field data.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Stats */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="badge badge-blue mb-6">Environmental Impact</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Per Unit, Annually</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                        {[
                            { val: 1130, suffix: "kg", label: "CO₂ Absorbed", icon: <Leaf className="w-6 h-6 text-kelp-green" /> },
                            { val: 1100, suffix: "kg", label: "O₂ Produced", icon: <Waves className="w-6 h-6 text-sky-blue" /> },
                            { val: 100, suffix: "x", label: "More O₂ than Forests", icon: <Globe className="w-6 h-6 text-ocean-blue" /> },
                            { val: 150, suffix: "%", label: "Acidity Rise by 2100", icon: <BarChart3 className="w-6 h-6 text-deep-forest" /> },
                        ].map((item, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-14 h-14 rounded-2xl bg-light-blue flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <div className="stat-number mb-2 group-hover:text-sky-blue transition-colors duration-500">
                                    <CountUpNumber end={item.val} suffix={item.suffix} duration={2500} />
                                </div>
                                <div className="text-sm font-bold text-slate uppercase tracking-wider">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="divider mb-20" />

                    {/* Ecosystem Services */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="badge badge-green mb-6">Ecosystem Services</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                                Kelp Forests Generate <span className="text-sky-blue">$500B</span> Annually
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
                                    <div key={i} className="p-5 bg-cream rounded-2xl border border-border">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-deep-forest">{item.label}</span>
                                            <span className="text-lg font-extrabold text-sky-blue">{item.value}</span>
                                        </div>
                                        <p className="text-sm text-slate">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Fisheries Data */}
                        <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-deep-forest mb-6">Northwest Atlantic Kelp Performance</h3>
                            <p className="text-slate mb-8 leading-relaxed">
                                Laminaria/Saccharina in the Northwest Atlantic — the highest performing kelp genus globally for fisheries production.
                            </p>
                            <div className="space-y-6">
                                <div className="p-6 bg-light-blue rounded-2xl">
                                    <div className="text-sm text-ocean-blue font-bold uppercase tracking-wider mb-2">Fisheries Production</div>
                                    <div className="text-4xl font-extrabold text-deep-forest">3,187 <span className="text-lg text-slate font-normal">kg/ha/year</span></div>
                                </div>
                                <div className="p-6 bg-light-green rounded-2xl">
                                    <div className="text-sm text-kelp-green font-bold uppercase tracking-wider mb-2">Economic Value</div>
                                    <div className="text-4xl font-extrabold text-deep-forest">$28,068 <span className="text-lg text-slate font-normal">/ha/year</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Financial Model */}
            <section className="section-padding bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge badge-blue mb-6">Financial Model</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Economic Viability</h2>
                        <p className="text-lg text-slate max-w-2xl mx-auto">
                            A transparent cost structure designed for sustainable returns
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-deep-forest to-midnight rounded-3xl p-8 md:p-12 text-white">
                        <div className="grid md:grid-cols-3 gap-8 mb-10">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
                                <DollarSign className="w-8 h-8 text-sky-blue mx-auto mb-4" />
                                <div className="text-sm text-white/50 uppercase tracking-wider mb-2 font-semibold">Setup Cost</div>
                                <div className="text-4xl font-extrabold text-white">$6,500</div>
                                <div className="text-sm text-white/40 mt-2">per unit</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center">
                                <TrendingUp className="w-8 h-8 text-kelp-green mx-auto mb-4" />
                                <div className="text-sm text-white/50 uppercase tracking-wider mb-2 font-semibold">Annual Revenue</div>
                                <div className="text-4xl font-extrabold text-white">$3,000<span className="text-lg">+</span></div>
                                <div className="text-sm text-white/40 mt-2">kelp sales + yield increase</div>
                            </div>
                            <div className="bg-sky-blue/20 backdrop-blur-md rounded-2xl p-8 border border-sky-blue/30 text-center">
                                <Clock className="w-8 h-8 text-sky-blue mx-auto mb-4" />
                                <div className="text-sm text-sky-blue uppercase tracking-wider mb-2 font-semibold">Payback Period</div>
                                <div className="text-4xl font-extrabold text-white">3 Years</div>
                                <div className="text-sm text-sky-blue/60 mt-2">to break-even</div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                <h4 className="text-lg font-bold text-white mb-4">Recurring Revenue Streams</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Kelp sales (fertilizer, bioplastics, food)",
                                        "Increased shellfish farm yield",
                                        "Carbon credit potential",
                                        "Government subsidies for restoration",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-sky-blue shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                <h4 className="text-lg font-bold text-white mb-4">Cost Advantages</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Only $600 annual maintenance fee",
                                        "20% gross margin on system sales",
                                        "Minimal labor — seasonal only",
                                        "Simple harvest with pulley system",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-kelp-green shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Invest in Ocean <span className="text-sky-blue">Restoration</span>
                    </h2>
                    <p className="text-xl text-slate mb-10 max-w-2xl mx-auto">
                        Join us in building a sustainable blue economy. Request our detailed feasibility study and financial projections.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary text-base px-10 py-4">
                            Request Feasibility Study
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/solutions" className="btn-secondary text-base px-10 py-4">
                            View Technology
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
