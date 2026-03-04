"use client";

import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen">
            <section className="section-padding bg-gradient-to-br from-deep-forest via-[#023808] to-midnight text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-sky-blue rounded-full blur-[150px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 text-sm text-white/80 font-medium">Get in Touch</span>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-[1.05]">
                            Let&apos;s Build a <span className="text-sky-blue">Blue Future</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            Whether you&apos;re an investor, government partner, fishery operator, or environmental organization — we&apos;d love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-extrabold text-deep-forest mb-8">Contact Information</h2>
                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-sky-blue" /></div>
                                    <div>
                                        <h4 className="font-bold text-deep-forest mb-1">Email</h4>
                                        <a href="mailto:aquagrid@enactusuottawa.ca" className="text-sky-blue hover:underline">aquagrid@enactusuottawa.ca</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-light-green rounded-xl flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-kelp-green" /></div>
                                    <div>
                                        <h4 className="font-bold text-deep-forest mb-1">Phone</h4>
                                        <a href="tel:3439885550" className="text-slate hover:text-sky-blue transition-colors">343-988-5550</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-ocean-blue" /></div>
                                    <div>
                                        <h4 className="font-bold text-deep-forest mb-1">Location</h4>
                                        <p className="text-slate">University of Ottawa, Ontario, Canada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-10">
                                <h4 className="font-bold text-deep-forest mb-4">Connect With Us</h4>
                                <div className="flex gap-3">
                                    {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                        <button key={i} className="w-12 h-12 rounded-xl bg-cream border border-border flex items-center justify-center text-slate hover:text-sky-blue hover:border-sky-blue/30 transition-all">
                                            <Icon className="w-5 h-5" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6 bg-cream rounded-2xl border border-border">
                                <h4 className="font-bold text-deep-forest mb-4">Next Steps</h4>
                                <ol className="space-y-3">
                                    {["Schedule a consultation call", "Review our feasibility study", "Site assessment & proposal", "Implementation plan", "Deployment launch"].map((step, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-slate">
                                            <span className="w-6 h-6 rounded-full bg-sky-blue/10 flex items-center justify-center shrink-0 text-xs font-bold text-sky-blue">{i + 1}</span>
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="bg-cream rounded-3xl border border-border p-8 md:p-10">
                                <h3 className="text-2xl font-extrabold text-deep-forest mb-2">Send Us a Message</h3>
                                <p className="text-slate mb-8">We&apos;ll get back to you within 24 hours.</p>
                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-bold text-deep-forest mb-2">First Name</label>
                                            <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-all text-midnight" placeholder="John" />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-bold text-deep-forest mb-2">Last Name</label>
                                            <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-all text-midnight" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-deep-forest mb-2">Email</label>
                                        <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-all text-midnight" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="organization" className="block text-sm font-bold text-deep-forest mb-2">Organization</label>
                                        <input type="text" id="organization" className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-all text-midnight" placeholder="Your organization" />
                                    </div>
                                    <div>
                                        <label htmlFor="interest" className="block text-sm font-bold text-deep-forest mb-2">I&apos;m interested in...</label>
                                        <select id="interest" className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-all text-midnight">
                                            <option value="">Select an option</option>
                                            <option value="investing">Investing / Sponsorship</option>
                                            <option value="partnership">Partnership Opportunity</option>
                                            <option value="deployment">System Deployment</option>
                                            <option value="research">Research Collaboration</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-deep-forest mb-2">Message</label>
                                        <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-sky-blue/30 focus:border-sky-blue transition-all text-midnight resize-none" placeholder="Tell us about your interest..." />
                                    </div>
                                    <button type="submit" className="btn-primary w-full py-4 text-base shadow-lg shadow-sky-blue/20">
                                        Send Message <ArrowRight className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
