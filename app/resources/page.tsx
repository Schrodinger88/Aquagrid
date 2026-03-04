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
} from "lucide-react";

export default function Resources() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-deep-forest via-[#023808] to-midnight text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-kelp-green rounded-full blur-[150px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 text-sm text-white/80 font-medium">
                            Resources
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-[1.05]">
                            Kelp Applications & <span className="text-sky-blue">Markets</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            Harvested kelp serves multiple high-value markets, from agriculture to bioplastics, creating sustainable revenue streams.
                        </p>
                    </div>
                </div>
            </section>

            {/* Primary Applications */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="badge badge-green mb-6">End Uses</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">What Happens After Harvest</h2>
                        <p className="text-lg text-slate max-w-2xl mx-auto">
                            Although kelp that has absorbed contaminants cannot be consumed directly, it has numerous high-value industrial and agricultural applications.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Leaf className="w-7 h-7 text-kelp-green" />,
                                title: "Organic Fertilizer",
                                desc: "After treatment to remove toxins, kelp becomes a nutrient-rich soil conditioner packed with nitrogen and potassium. High demand in organic agriculture.",
                                color: "bg-light-green",
                            },
                            {
                                icon: <Zap className="w-7 h-7 text-sky-blue" />,
                                title: "Bioenergy Production",
                                desc: "Kelp can be converted into biogas, bioethanol, or biodiesel through fermentation or anaerobic digestion — renewable energy from ocean biomass.",
                                color: "bg-light-blue",
                            },
                            {
                                icon: <Package className="w-7 h-7 text-ocean-blue" />,
                                title: "Bioplastics & Packaging",
                                desc: "Alginates extracted from kelp create biodegradable plastics and packaging materials, reducing our dependence on petroleum-based products.",
                                color: "bg-blue-50",
                            },
                            {
                                icon: <FlaskConical className="w-7 h-7 text-deep-forest" />,
                                title: "Biochar Production",
                                desc: "Pyrolysis locks absorbed pollutants in stable carbon form. The resulting biochar enhances water retention and reduces soil erosion.",
                                color: "bg-green-50",
                            },
                            {
                                icon: <Recycle className="w-7 h-7 text-kelp-green" />,
                                title: "Heavy Metal Recovery",
                                desc: "Pollutants including heavy metals can be extracted and recovered through chemical treatments — potential for recycling rare or valuable metals.",
                                color: "bg-light-green",
                            },
                            {
                                icon: <Microscope className="w-7 h-7 text-ocean-blue" />,
                                title: "Pharmaceutical & Cosmetics",
                                desc: "Anti-inflammatory, antiviral, and anti-aging properties make kelp extracts valuable in the growing $3.4B seaweed cosmetics market.",
                                color: "bg-light-blue",
                            },
                        ].map((item, i) => (
                            <div key={i} className="card-solid group">
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-deep-forest mb-3">{item.title}</h3>
                                <p className="text-slate leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Market Data */}
            <section className="section-padding bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="badge badge-blue mb-6">Market Data</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                                The Seaweed Market is <span className="text-sky-blue">Booming</span>
                            </h2>
                            <p className="text-lg text-slate mb-8 leading-relaxed">
                                Global demand for seaweed products is accelerating across food, cosmetics, bioplastics, and biofuel sectors, driven by the shift toward sustainable alternatives.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { label: "Global Seaweed Market (2024)", value: "$10.47B" },
                                    { label: "Projected Market (2032)", value: "$26.61B" },
                                    { label: "CAGR (2025–2032)", value: "12.36%" },
                                    { label: "N. American By-Product Market", value: "$1.05B by 2032" },
                                    { label: "US Seaweed Market", value: "$1.46B" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-border">
                                        <span className="text-slate font-medium">{item.label}</span>
                                        <span className="font-extrabold text-deep-forest text-lg">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Seaweed Cosmetics */}
                        <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-deep-forest mb-6">
                                Emerging: Seaweed Cosmetics
                            </h3>
                            <p className="text-slate mb-6 leading-relaxed">
                                The seaweed cosmetics market is growing rapidly as consumers shift toward natural, sustainable beauty products with bioactive ingredients.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="p-5 bg-light-blue rounded-2xl">
                                    <div className="text-sm text-ocean-blue font-bold uppercase tracking-wider mb-1">Market Size (2024)</div>
                                    <div className="text-3xl font-extrabold text-deep-forest">$2.1B</div>
                                </div>
                                <div className="p-5 bg-light-green rounded-2xl">
                                    <div className="text-sm text-kelp-green font-bold uppercase tracking-wider mb-1">Projected (2033)</div>
                                    <div className="text-3xl font-extrabold text-deep-forest">$3.4B</div>
                                </div>
                            </div>

                            <h4 className="font-bold text-deep-forest mb-3">Key Drivers</h4>
                            <div className="space-y-2">
                                {[
                                    "Rising demand for natural beauty products",
                                    "Anti-aging and hydration properties",
                                    "Eco-friendly sourcing and packaging",
                                    "Marine biotechnology innovations",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate">
                                        <ChevronRight className="w-4 h-4 text-sky-blue shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Value */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="badge badge-green mb-6">Community Impact</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                        Building Local Kelp Economies
                    </h2>
                    <p className="text-lg text-slate mb-10 leading-relaxed max-w-2xl mx-auto">
                        Our vision extends beyond individual farms. We're building a network of local kelp farmers who can ship, sell, and create a sustainable fertilizer industry — connecting farmers with processing facilities and end-market buyers.
                    </p>
                    <Link href="/contact" className="btn-primary text-base px-10 py-4">
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
