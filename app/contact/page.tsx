"use client";

import { Mail, MapPin, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="min-h-screen text-deep-forest">

            {/* ========== HERO ========== */}
            <section className="pt-6 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
                <div className="relative w-full h-[50vh] min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl text-white flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#012604] via-[#01340A] to-[#003273]">
                    <div className="absolute inset-0 opacity-15">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-blue rounded-full blur-[120px]" />
                    </div>

                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
                            <MessageSquare className="w-4 h-4 text-sky-blue" />
                            Get in Touch
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-md">
                            Partner with <span className="text-sky-blue">Aqua Grid</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/75 font-medium leading-relaxed max-w-2xl mx-auto">
                            Whether you&apos;re an investor, researcher, or community leader, we want to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========== FORM & INFO ========== */}
            <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">

                    {/* Left: Info & Fast Track */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div className="glass-card p-10">
                            <h2 className="text-3xl font-bold text-deep-forest mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start group">
                                    <div className="w-12 h-12 rounded-xl bg-light-blue flex items-center justify-center shrink-0 border border-sky-blue/20 group-hover:bg-sky-blue transition-colors duration-300">
                                        <Mail className="w-5 h-5 text-royal-blue group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-deep-forest mb-1">Email Us</div>
                                        <a href="mailto:info@aquagrid.ca" className="text-slate hover:text-sky-blue transition-colors">info@aquagrid.ca</a>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start group">
                                    <div className="w-12 h-12 rounded-xl bg-light-green flex items-center justify-center shrink-0 border border-kelp-green/20 group-hover:bg-kelp-green transition-colors duration-300">
                                        <MapPin className="w-5 h-5 text-kelp-green group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-deep-forest mb-1">Headquarters</div>
                                        <div className="text-slate leading-relaxed">University of Ottawa<br />Ottawa, ON<br />Canada</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-deep-forest rounded-[2.5rem] p-10 text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-kelp-green blur-3xl opacity-40 transition-opacity group-hover:opacity-60" />
                            <h3 className="text-2xl font-bold mb-4 relative z-10">Fast Track: Book a Call</h3>
                            <p className="text-white/70 leading-relaxed mb-8 relative z-10">
                                Skip the inquiry form and select a time directly on our calendar to discuss investment or partnership opportunities.
                            </p>
                            <Link href="https://cal.com/aquagrid" target="_blank" className="btn-primary w-full py-4 text-lg justify-center relative z-10 shadow-lg shadow-sky-blue/20">
                                Open Cal.com <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-3">
                        <div className="glass-card p-10 md:p-14 h-full">
                            <h2 className="text-3xl font-bold text-deep-forest mb-2">Send an Inquiry</h2>
                            <p className="text-slate mb-8">Fill out the form below and our team will get back to you within 24-48 hours.</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-deep-forest ml-1">First Name <span className="text-kelp-green">*</span></label>
                                        <input type="text" className="input-field" placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-deep-forest ml-1">Last Name <span className="text-kelp-green">*</span></label>
                                        <input type="text" className="input-field" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-deep-forest ml-1">Email Address <span className="text-kelp-green">*</span></label>
                                    <input type="email" className="input-field" placeholder="jane@organization.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-deep-forest ml-1">Organization / Company</label>
                                    <input type="text" className="input-field" placeholder="Optional" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-deep-forest ml-1">How can we help? <span className="text-kelp-green">*</span></label>
                                    <textarea rows={5} className="input-field resize-none" placeholder="Tell us about your inquiry..."></textarea>
                                </div>

                                <button type="button" className="btn-primary w-full py-4 text-lg justify-center shadow-lg hover:shadow-xl mt-4">
                                    Send Message
                                </button>
                                <p className="text-center text-sm text-slate mt-4 flex items-center justify-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-kelp-green" /> SSL Encrypted &amp; Secure
                                </p>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
