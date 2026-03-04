"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Leaf, Waves, ArrowRight, Settings, Zap, Shield, Globe, TrendingUp, Clock } from "lucide-react";

export default function Solutions() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-deep-forest via-[#023808] to-midnight text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-0 left-20 w-96 h-96 bg-kelp-green rounded-full blur-[150px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 text-sm text-white/80 font-medium">
                            Technology
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-[1.05]">
                            Modular Kelp Farming <span className="text-sky-blue">Technology</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            Aqua Grid's patent-pending system combines cutting-edge marine engineering with nature's most powerful carbon capture organism: kelp.
                        </p>
                    </div>
                </div>
            </section>

            {/* System Design */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="badge badge-green mb-6">System Design</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                                Engineered for <span className="text-sky-blue">Impact</span>
                            </h2>
                            <p className="text-lg text-slate mb-10 leading-relaxed">
                                Our system uses a metal plate frame held in place by buoys, with kelp growth lines growing vertically. The standard setup is 200ft × 10ft, but our modular design is fully customizable.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <Settings className="w-5 h-5 text-sky-blue" />,
                                        title: "Modular Design",
                                        desc: "Scalable units adapt to any coastal environment. Customize size and configuration for your specific needs.",
                                    },
                                    {
                                        icon: <Zap className="w-5 h-5 text-kelp-green" />,
                                        title: "Siphon Pump Innovation",
                                        desc: "Unique pump system increases nutrient availability for kelp year-round, boosting growth and carbon capture efficiency.",
                                    },
                                    {
                                        icon: <Shield className="w-5 h-5 text-ocean-blue" />,
                                        title: "Non-Disruptive Integration",
                                        desc: "Designed to integrate into existing fisheries without interrupting current operations or marine activities.",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group p-4 -ml-4 rounded-2xl hover:bg-cream transition-colors">
                                        <div className="shrink-0 mt-0.5">
                                            <div className="w-10 h-10 rounded-xl bg-light-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-deep-forest text-lg mb-1">{item.title}</h4>
                                            <p className="text-slate leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-light-blue to-light-green rounded-3xl p-12 flex flex-col items-center justify-center min-h-[500px] border border-border">
                                <Image
                                    src="/logo-stacked.png"
                                    alt="Aqua Grid System Design"
                                    width={180}
                                    height={180}
                                    className="mb-8"
                                />
                                <div className="text-center">
                                    <div className="text-4xl font-extrabold text-deep-forest mb-2">200ft × 10ft</div>
                                    <p className="text-slate">Standard Unit Size</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-sm">
                                    <div className="bg-white/80 rounded-2xl p-4 text-center">
                                        <div className="text-2xl font-extrabold text-deep-forest">1,130</div>
                                        <div className="text-xs text-slate font-semibold uppercase tracking-wider">kg CO₂/year</div>
                                    </div>
                                    <div className="bg-white/80 rounded-2xl p-4 text-center">
                                        <div className="text-2xl font-extrabold text-deep-forest">1,100</div>
                                        <div className="text-xs text-slate font-semibold uppercase tracking-wider">kg O₂/year</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="section-padding bg-cream">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="badge badge-blue mb-6">Process</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">How It Works</h2>
                        <p className="text-lg text-slate">Simple deployment, continuous impact</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                step: "01",
                                icon: <Globe className="w-6 h-6 text-sky-blue" />,
                                title: "Site Assessment & Planning",
                                desc: "We identify optimal locations, obtain permits, and design a system tailored to your coastal conditions and existing operations.",
                            },
                            {
                                step: "02",
                                icon: <Settings className="w-6 h-6 text-kelp-green" />,
                                title: "System Installation",
                                desc: "Rapid deployment of modular units with minimal environmental disruption. Metal frame with buoys and vertical kelp growth lines.",
                            },
                            {
                                step: "03",
                                icon: <TrendingUp className="w-6 h-6 text-ocean-blue" />,
                                title: "Growth & Monitoring",
                                desc: "Kelp grows and absorbs greenhouse gases while producing oxygen. Our siphon pump system maintains nutrient availability year-round.",
                            },
                            {
                                step: "04",
                                icon: <Clock className="w-6 h-6 text-deep-forest" />,
                                title: "Harvest & Repeat",
                                desc: "Annual harvest requires only cutting kelp and installing new growth lines. Revenue from kelp sales plus increased shellfish farm yield.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="card-solid p-8 group">
                                <div className="flex items-start gap-5">
                                    <div className="text-4xl font-extrabold text-sky-blue/20">{item.step}</div>
                                    <div>
                                        <div className="w-10 h-10 rounded-xl bg-light-blue flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-deep-forest mb-3">{item.title}</h3>
                                        <p className="text-slate leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge badge-green mb-6">Competitive Edge</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">What Sets Us Apart</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Siphon Pump System",
                                desc: "Unique innovation increases nutrient availability year-round, unlike traditional kelp farms that depend on seasonal conditions.",
                                icon: <Zap className="w-7 h-7 text-sky-blue" />,
                            },
                            {
                                title: "Ease of Harvesting",
                                desc: "Innovative pulley system makes harvesting simple and efficient. Requires minimal manpower and saves significant time.",
                                icon: <CheckCircle2 className="w-7 h-7 text-kelp-green" />,
                            },
                            {
                                title: "Farmer-First Design",
                                desc: "Built for fish farmers — user friendly, low maintenance, and adaptable. No specialized training or equipment required.",
                                icon: <Leaf className="w-7 h-7 text-ocean-blue" />,
                            },
                        ].map((item, i) => (
                            <div key={i} className="card-solid p-8 text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-light-blue flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
            <section className="section-padding bg-gradient-to-br from-deep-forest to-midnight text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                        Ready to Deploy?
                    </h2>
                    <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                        Learn how Aqua Grid can integrate with your fishery operations and start generating returns.
                    </p>
                    <Link href="/contact" className="btn-primary text-base px-10 py-4 shadow-xl shadow-sky-blue/20">
                        Schedule a Consultation
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
