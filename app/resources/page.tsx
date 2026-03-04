"use client";

import { Leaf, CheckCircle2, Zap, Fish, Microscope } from "lucide-react";

export default function Resources() {
    return (
        <div className="bg-sandstone min-h-screen pt-16 font-sans">
            {/* Applications - Clean Grid */}
            <section className="py-32 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-mist-blue/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-mist-blue/10 text-mist-blue text-xs font-bold tracking-widest uppercase mb-6 border border-mist-blue/20 backdrop-blur-sm">Versatility</span>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-deep-kelp">Applications & Markets</h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { title: "Organic Fertilizer", icon: <Leaf className="h-5 w-5" /> },
                            { title: "Sustainable Animal Feed", icon: <CheckCircle2 className="h-5 w-5" /> },
                            { title: "Bioplastics", icon: <Zap className="h-5 w-5" /> },
                            { title: "Nutritious Food", icon: <Fish className="h-5 w-5" /> },
                            { title: "Pharmaceuticals", icon: <Microscope className="h-5 w-5" /> }
                        ].map((item, i) => (
                            <div key={i} className="px-8 py-4 rounded-full bg-white/60 backdrop-blur-md border border-white/50 text-driftwood/80 flex items-center gap-3 hover:border-seafoam-teal hover:text-seafoam-teal hover:bg-white hover:shadow-lg hover:shadow-seafoam-teal/10 hover:-translate-y-1 transition-all cursor-default font-medium">
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
