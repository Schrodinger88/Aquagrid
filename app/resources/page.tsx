"use client";

import Link from "next/link";
import {
    Leaf,
    Zap,
    Fish,
    Microscope,
    FlaskConical,
    Package,
    Recycle,
    TrendingUp,
    ArrowRight,
    ChevronRight,
    BarChart3
} from "lucide-react";

export default function Resources() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-deep-forest via-[#023808] to-midnight py-20 lg:py-28">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-kelp-green rounded-full blur-[150px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 text-sm font-bold tracking-wider uppercase backdrop-blur-md">
                            Kelp Applications & Markets
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                            The <span className="text-sky-blue">Blue Economy</span> Value Chain
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                            Beyond carbon capture, kelp is the ultimate sustainable feedstock. Our systems generate recurring revenue through high-value industrial and agricultural applications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Market Data */}
            <section className="section-padding bg-cream border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="badge badge-blue mb-6">Market Deep Dive</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-forest">
                                A Multi-Billion Dollar <span className="text-sky-blue">Growth Opportunity</span>
                            </h2>
                            <p className="text-lg text-slate mb-8 leading-relaxed">
                                The commercial seaweed market is experiencing unprecedented demand, driven by sustainable agriculture, bioplastics, and bioenergy sectors.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4">
                                    <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center shrink-0">
                                        <TrendingUp className="w-6 h-6 text-sky-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-deep-forest text-lg">12.36% Global CAGR</h4>
                                        <p className="text-slate leading-relaxed">The global seaweed market was valued at $10.47B in 2024 and is projected to reach $26.61B by 2032.</p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-start gap-4">
                                    <div className="w-12 h-12 bg-light-green rounded-xl flex items-center justify-center shrink-0">
                                        <BarChart3 className="w-6 h-6 text-kelp-green" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-deep-forest text-lg">US Market Growth</h4>
                                        <p className="text-slate leading-relaxed">The US commercial seaweed market size is currently valued at $1.46B, creating massive localized demand for our installations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-deep-forest to-midnight p-10 rounded-3xl border border-kelp-green/20 shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-blue/20 rounded-full blur-3xl"></div>
                            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">High-Growth Segments</h3>
                            <div className="space-y-4 relative z-10">
                                {[
                                    { name: "Cosmetics & Pharma", value: "$3.4B by 2033", CAGR: "5.2% CAGR" },
                                    { name: "Global Ecosystem Services", value: "~$500B", CAGR: "Annually" },
                                    { name: "Bioenergy & Biofuels", value: "Emerging", CAGR: "High Potential" },
                                ].map((stat, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-white/10 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                                        <span className="font-bold text-white">{stat.name}</span>
                                        <div className="text-right">
                                            <div className="text-lg font-bold text-sky-blue">{stat.value}</div>
                                            <div className="text-xs text-white/50">{stat.CAGR}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Grid */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge badge-green mb-6">Kelp Applications</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-forest">Monetizing the Harvest</h2>
                        <p className="text-lg text-slate max-w-2xl mx-auto">
                            Kelp harvested from Aqua Grid systems serves diverse, high-value industrial and consumer markets.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Leaf className="w-8 h-8 text-kelp-green" />,
                                title: "Agricultural Fertilizer",
                                desc: "An organic, nutrient-rich soil conditioner that improves crop yields while reducing reliance on synthetic, petroleum-based fertilizers.",
                                bg: "bg-light-green"
                            },
                            {
                                icon: <Fish className="w-8 h-8 text-sky-blue" />,
                                title: "Animal & Aqua Feed",
                                desc: "Highly nutritious dietary supplement for livestock and farmed fish, notably reducing methane emissions in cattle by up to 80%.",
                                bg: "bg-light-blue"
                            },
                            {
                                icon: <Package className="w-8 h-8 text-ocean-blue" />,
                                title: "Bioplastics",
                                desc: "Alginates extracted from kelp provide the perfect sustainable feedstock for cutting-edge biodegradable packaging alternatives.",
                                bg: "bg-blue-50"
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-sky-blue" />,
                                title: "Bioenergy",
                                desc: "Processing through anaerobic digestion produces biogas and bioethanol — renewable energy sources that don't compete with food crops.",
                                bg: "bg-light-blue"
                            },
                            {
                                icon: <FlaskConical className="w-8 h-8 text-ocean-blue" />,
                                title: "Cosmetics & Pharma",
                                desc: "Rich in bioactive compounds, bioactive peptides, and antioxidants used in high-end anti-aging skincare and hydration products.",
                                bg: "bg-blue-50"
                            },
                            {
                                icon: <Recycle className="w-8 h-8 text-kelp-green" />,
                                title: "Heavy Metal Recovery",
                                desc: "Biosorption properties allow kelp to bind with heavy metals, offering an innovative solution for organic wastewater treatment.",
                                bg: "bg-light-green"
                            },
                        ].map((item, i) => (
                            <div key={i} className="card-solid p-8 group hover:-translate-y-2 transition-transform duration-300">
                                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-deep-forest mb-3">{item.title}</h3>
                                <p className="text-slate leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-cream border-t border-border">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-deep-forest mb-6">Explore the Feasibility Study</h2>
                    <p className="text-lg text-slate mb-8 max-w-2xl mx-auto">
                        Ready to dive deeper into the economics and science behind our modular kelp farming systems?
                    </p>
                    <Link href="/contact" className="btn-primary px-8 py-4 shadow-lg shadow-sky-blue/20">
                        Request Full Documentation
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
