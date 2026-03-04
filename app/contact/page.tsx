"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div className="bg-sandstone min-h-screen pt-16 font-sans">
            <section className="py-32 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-seafoam-teal/5 rounded-full blur-[100px] -translate-x-1/4 -translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-deep-kelp mb-8">Get in Touch</h1>
                    <p className="text-xl text-driftwood/80 mb-20 max-w-2xl mx-auto font-light leading-relaxed">
                        Interested in partnering with Aquagrid? We'd love to hear from you.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <div className="card-paper flex flex-col items-center">
                            <div className="w-16 h-16 bg-seafoam-teal/10 rounded-full flex items-center justify-center mb-6 text-seafoam-teal">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-deep-kelp text-xl mb-2 font-serif">Email Us</h3>
                            <p className="text-driftwood/60">hello@aquagrid.com</p>
                        </div>
                        <div className="card-paper flex flex-col items-center transform md:-translate-y-4">
                            <div className="w-16 h-16 bg-mist-blue/10 rounded-full flex items-center justify-center mb-6 text-mist-blue">
                                <Phone className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-deep-kelp text-xl mb-2 font-serif">Call Us</h3>
                            <p className="text-driftwood/60">+1 (555) 123-4567</p>
                        </div>
                        <div className="card-paper flex flex-col items-center">
                            <div className="w-16 h-16 bg-glacial-green/10 rounded-full flex items-center justify-center mb-6 text-glacial-green">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h3 className="font-bold text-deep-kelp text-xl mb-2 font-serif">Visit Us</h3>
                            <p className="text-driftwood/60">San Francisco, CA</p>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <form className="card-paper text-left space-y-8">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-deep-kelp mb-3 uppercase tracking-widest">Name</label>
                                <input type="text" id="name" className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-seafoam-teal/50 focus:bg-white transition-all text-driftwood shadow-inner" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-deep-kelp mb-3 uppercase tracking-widest">Email</label>
                                <input type="email" id="email" className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-seafoam-teal/50 focus:bg-white transition-all text-driftwood shadow-inner" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-deep-kelp mb-3 uppercase tracking-widest">Message</label>
                                <textarea id="message" rows={5} className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-seafoam-teal/50 focus:bg-white transition-all text-driftwood shadow-inner resize-none" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="w-full btn-nature-primary py-4 text-xl shadow-xl shadow-seafoam-teal/20">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
