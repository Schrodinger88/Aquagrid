"use client";

import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Droplets, Fish, AlertTriangle, Users, Award, BookOpen } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-deep-forest via-[#023808] to-midnight py-20 lg:py-28">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-sky-blue rounded-full blur-[150px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 text-sm text-white font-bold tracking-wider uppercase backdrop-blur-md">
                            About Us
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-[1.1]">
                            Green Solutions for <span className="text-sky-blue">Blue Oceans</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                            Aqua Grid was founded by university students through Enactus, combining marine science, engineering, and entrepreneurship to address one of our planet's most urgent challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="card-solid p-10">
                            <div className="w-16 h-16 bg-light-blue rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <Target className="w-8 h-8 text-sky-blue" />
                            </div>
                            <h3 className="text-2xl font-bold text-deep-forest mb-4">Our Mission</h3>
                            <p className="text-slate leading-relaxed text-lg">
                                To remove greenhouse gases from waters, produce oxygen, and generate revenue for coastal communities through modular kelp farming systems. Kelp produces up to <strong className="text-deep-forest">100x more oxygen</strong> than land forests of the same size.
                            </p>
                        </div>
                        <div className="card-solid p-10">
                            <div className="w-16 h-16 bg-light-green rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                                <Eye className="w-8 h-8 text-kelp-green" />
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
            <section className="section-padding bg-cream relative overflow-hidden border-t border-border">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-blue/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="badge badge-blue mb-6">The Challenge</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-forest">The Crisis We're Solving</h2>
                        <p className="text-lg text-slate max-w-3xl mx-auto leading-relaxed">
                            Ocean acidification has increased by <strong className="text-ocean-blue">30%</strong> since the Industrial Revolution, with projections suggesting a <strong className="text-ocean-blue">150% rise</strong> by the end of the century.
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
                            <div key={i} className="card-solid p-8 group">
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-deep-forest">{item.title}</h3>
                                <p className="text-slate leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-white border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge badge-green mb-6">Our Team</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-forest">Student-Driven. Science-Backed.</h2>
                        <p className="text-lg text-slate max-w-2xl mx-auto leading-relaxed">
                            Founded through Enactus uOttawa, our multidisciplinary team combines expertise across marine science, engineering, and sustainable business.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <BookOpen className="w-6 h-6" />, title: "Marine Biology", desc: "Oceanography & ecosystem research", color: "text-sky-blue", bg: "bg-light-blue" },
                            { icon: <Target className="w-6 h-6" />, title: "Engineering", desc: "Aquaculture system design", color: "text-kelp-green", bg: "bg-light-green" },
                            { icon: <Award className="w-6 h-6" />, title: "Innovation", desc: "Youth Impact Challenge innovators", color: "text-ocean-blue", bg: "bg-blue-50" },
                            { icon: <Users className="w-6 h-6" />, title: "Business Dev", desc: "Sustainable Go-to-market strategy", color: "text-sky-blue", bg: "bg-light-blue" },
                        ].map((item, i) => (
                            <div key={i} className="card-solid text-center p-8">
                                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-6 ${item.color} shadow-sm`}>
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-deep-forest mb-2 text-lg">{item.title}</h4>
                                <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/contact" className="btn-primary px-10 py-4 shadow-lg shadow-sky-blue/20">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
