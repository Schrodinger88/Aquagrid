"use client";

import Image from "next/image";
import Link from "next/link";
import { Droplets, Fish, AlertTriangle, Target, Eye, Heart, Users, Award, BookOpen } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-deep-forest via-[#023808] to-midnight text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-sky-blue rounded-full blur-[150px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 text-sm text-white/80 font-medium">
                            About Us
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-[1.05]">
                            Green Solutions for <span className="text-sky-blue">Blue Oceans</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            Aqua Grid was founded by students at the University of Ottawa through Enactus uOttawa, who saw an opportunity to combine marine science, engineering, and entrepreneurship to address one of our planet's most urgent challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="card-solid p-10">
                            <div className="w-14 h-14 bg-light-blue rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-sky-blue" />
                            </div>
                            <h3 className="text-2xl font-bold text-deep-forest mb-4">Our Mission</h3>
                            <p className="text-slate leading-relaxed text-lg">
                                To remove greenhouse gases from waters, produce oxygen, and generate revenue for coastal communities through modular kelp farming systems. Kelp produces up to <strong className="text-deep-forest">100x more oxygen</strong> than land forests of the same size.
                            </p>
                        </div>
                        <div className="card-solid p-10">
                            <div className="w-14 h-14 bg-light-green rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-kelp-green" />
                            </div>
                            <h3 className="text-2xl font-bold text-deep-forest mb-4">Our Vision</h3>
                            <p className="text-slate leading-relaxed text-lg">
                                A thriving blue planet where kelp farming is the standard for ocean restoration — restoring marine chemistry, supporting shellfish farmers, and creating a sustainable blue economy for coastal communities worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Crisis */}
            <section className="section-padding bg-cream relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-blue/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="badge badge-blue mb-6">The Challenge</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">The Crisis We're Solving</h2>
                        <p className="text-lg text-slate max-w-3xl mx-auto">
                            Ocean acidification has increased by <strong className="text-deep-forest">30%</strong> since the Industrial Revolution, with projections suggesting a <strong className="text-deep-forest">150% rise</strong> by the end of the century.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Droplets className="h-7 w-7 text-sky-blue" />,
                                title: "Ocean Acidification",
                                description: "CO₂ absorption increases water pH, preventing marine life like shellfish from building shells and skeletons. This directly threatens Canada's shellfish industry.",
                                color: "bg-light-blue",
                            },
                            {
                                icon: <Fish className="h-7 w-7 text-ocean-blue" />,
                                title: "Declining Fisheries",
                                description: "Catch size and volume declines are already impacting Canada's multi-million dollar shellfish market, threatening food security and coastal livelihoods.",
                                color: "bg-blue-50",
                            },
                            {
                                icon: <AlertTriangle className="h-7 w-7 text-kelp-green" />,
                                title: "Inadequate Solutions",
                                description: "Existing approaches are too expensive or too slow to scale. We need economically viable solutions that restore ocean chemistry while generating returns.",
                                color: "bg-light-green",
                            },
                        ].map((item, i) => (
                            <div key={i} className="card-solid group">
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-deep-forest">{item.title}</h3>
                                <p className="text-slate leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Aqua Grid */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="badge badge-green mb-6">Why Us</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Why Aqua Grid?</h2>
                    <p className="text-xl text-slate leading-relaxed mb-12">
                        Aqua Grid transforms the problem into an opportunity. Our modular kelp farming systems don't just capture carbon — they actively <span className="text-sky-blue font-bold">restore ocean chemistry</span>, create thriving marine habitats, and generate sustainable income.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { icon: <Droplets className="w-6 h-6 text-sky-blue" />, title: "Siphon Pump System", desc: "Unique innovation to increase nutrient availability year-round" },
                            { icon: <Users className="w-6 h-6 text-kelp-green" />, title: "Easy to Use", desc: "Designed for any fish farmer — simple setup and minimal maintenance" },
                            { icon: <Award className="w-6 h-6 text-ocean-blue" />, title: "Award Winning", desc: "Youth Impact Challenge placement, Enactus Canada grant recipient" },
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-cream border border-border text-center">
                                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-deep-forest mb-2">{item.title}</h4>
                                <p className="text-sm text-slate">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge badge-blue mb-6">Our Team</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Student-Driven. Science-Backed.</h2>
                        <p className="text-lg text-slate max-w-2xl mx-auto">
                            Founded through Enactus uOttawa, our multidisciplinary team combines expertise across marine science, engineering, and sustainable business.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <BookOpen className="w-6 h-6" />, title: "Marine Biology", desc: "Oceanography & ecosystem research" },
                            { icon: <Target className="w-6 h-6" />, title: "Engineering", desc: "Aquaculture system design" },
                            { icon: <Heart className="w-6 h-6" />, title: "Environmental Policy", desc: "Sustainability & regulation" },
                            { icon: <Users className="w-6 h-6" />, title: "Business Dev", desc: "Go-to-market strategy" },
                        ].map((item, i) => (
                            <div key={i} className="card-solid text-center p-8">
                                <div className="w-14 h-14 rounded-2xl bg-light-blue flex items-center justify-center mx-auto mb-4 text-sky-blue">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-deep-forest mb-2">{item.title}</h4>
                                <p className="text-sm text-slate">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/contact" className="btn-primary px-8 py-4">
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
