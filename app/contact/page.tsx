"use client";

import { Mail, MapPin, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-deep-forest via-[#023808] to-midnight py-20 lg:py-28">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-96 h-96 bg-sky-blue rounded-full blur-[150px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 text-sm font-bold tracking-wider uppercase backdrop-blur-md">
                            Contact & Partnerships
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                            Partner with <span className="text-sky-blue">Aqua Grid</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                            From investment opportunities to deploying a system at your fishery, our team is ready to accelerate your transition to the blue economy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-cream relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-deep-forest">Get in Touch</h2>
                            <p className="text-lg text-slate mb-12 leading-relaxed">
                                Whether you're a government agency, fishery operator, or environmental organization, Aqua Grid has a solution tailored to your operational needs.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { icon: <Mail className="w-6 h-6 text-sky-blue" />, title: "Email Us", detail: "aquagrid@enactusuottawa.ca", sub: "General Inquiries & Partnerships", link: "mailto:aquagrid@enactusuottawa.ca" },
                                    { icon: <Phone className="w-6 h-6 text-kelp-green" />, title: "Call Us", detail: "343-988-5550", sub: "Direct line to our operations team", link: "tel:+13439885550" },
                                    { icon: <MapPin className="w-6 h-6 text-ocean-blue" />, title: "Location", detail: "University of Ottawa", sub: "Ottawa, ON, Canada", link: null },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 group bg-white p-6 rounded-2xl border border-border shadow-sm hover:border-sky-blue transition-colors">
                                        <div className="w-14 h-14 bg-light-blue rounded-xl flex items-center justify-center shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-deep-forest text-lg">{item.title}</h4>
                                            {item.link ? (
                                                <a href={item.link} className="text-sky-blue font-bold text-lg hover:underline transition-colors mt-1 block">
                                                    {item.detail}
                                                </a>
                                            ) : (
                                                <div className="text-deep-forest font-bold text-lg mt-1">{item.detail}</div>
                                            )}
                                            <p className="text-slate text-sm mt-1">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-deep-forest text-white p-8 rounded-2xl">
                                <h4 className="font-bold text-xl mb-4">Next Steps</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Schedule a consultation call",
                                        "Review our detailed feasibility study",
                                        "Conduct a site assessment",
                                        "Draft an implementation plan and timeline",
                                    ].map((step, i) => (
                                        <li key={i} className="flex gap-3 text-white/80 items-center">
                                            <CheckCircle2 className="w-5 h-5 text-sky-blue shrink-0" />
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="card-solid p-10 lg:p-12">
                            <h3 className="text-2xl font-bold mb-2 text-deep-forest">Inquiry Form</h3>
                            <p className="text-slate mb-8">Fill out the form below and our team will get back to you within 48 hours.</p>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-deep-forest uppercase tracking-wider">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-cream border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all" placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-deep-forest uppercase tracking-wider">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-cream border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-deep-forest uppercase tracking-wider">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-cream border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all" placeholder="jane@organization.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-deep-forest uppercase tracking-wider">Organization / Company</label>
                                    <input type="text" className="w-full px-4 py-3 bg-cream border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all" placeholder="Fisheries Co." />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-deep-forest uppercase tracking-wider">Interest Category</label>
                                    <select className="w-full px-4 py-3 bg-cream border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all appearance-none text-slate cursor-pointer">
                                        <option value="">Select your interest...</option>
                                        <option value="investing">Investment Opportunities</option>
                                        <option value="partnership">Strategic Partnership</option>
                                        <option value="deployment">System Deployment</option>
                                        <option value="research">Academic / Research</option>
                                        <option value="media">Media / Press</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-deep-forest uppercase tracking-wider">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 bg-cream border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all resize-none" placeholder="Tell us about your goals..."></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full py-4 text-lg shadow-lg shadow-sky-blue/20">
                                    Send Message
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
