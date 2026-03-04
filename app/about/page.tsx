"use client";

import { Droplets, Fish, AlertCircle } from "lucide-react";

export default function About() {
    return (
        <div className="bg-sandstone min-h-screen pt-16 font-sans">
            {/* The Crisis We're Solving - Minimalist White Section */}
            <section id="crisis" className="py-32 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-seafoam-teal/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-mist-blue/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-seafoam-teal/10 text-seafoam-teal text-xs font-bold tracking-widest uppercase mb-6 border border-seafoam-teal/20 backdrop-blur-sm">The Challenge</span>
                        <h2 className="text-5xl md:text-6xl mb-8 text-deep-kelp font-serif font-bold">Our Oceans are in Crisis</h2>
                        <p className="text-xl text-driftwood/80 max-w-3xl mx-auto font-light leading-relaxed">
                            Ocean acidification has increased by <strong className="text-seafoam-teal font-bold">30%</strong> since the Industrial Revolution, silently threatening marine life and global livelihoods.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Droplets className="h-10 w-10 text-mist-blue" />,
                                title: "Ocean Acidification",
                                description: "Rising CO2 levels are lowering ocean pH, dissolving the shells and skeletons of essential marine organisms."
                            },
                            {
                                icon: <Fish className="h-10 w-10 text-seafoam-teal" />,
                                title: "Collapsing Fisheries",
                                description: "Global fish stocks have declined drastically. Habitat degradation has pushed many ecosystems to the brink."
                            },
                            {
                                icon: <AlertCircle className="h-10 w-10 text-deep-kelp" />,
                                title: "Inadequate Solutions",
                                description: "Current approaches are often too expensive or slow to scale. We need economically viable restoration now."
                            }
                        ].map((item, i) => (
                            <div key={i} className="card-paper flex flex-col items-start group hover:-translate-y-2 transition-transform duration-500">
                                <div className="mb-8 p-4 rounded-[1.5rem] bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                <h3 className="text-2xl mb-4 font-serif font-bold text-deep-kelp">{item.title}</h3>
                                <p className="text-driftwood/70 leading-relaxed text-lg font-light">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-32 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl rounded-[3rem] border border-white/40 shadow-2xl shadow-mist-blue/5"></div>
                        <div className="relative z-10 p-12 md:p-24 text-center">
                            <h3 className="text-4xl mb-8 text-deep-kelp font-serif font-bold">Why Aquagrid?</h3>
                            <p className="text-2xl text-driftwood/90 max-w-4xl mx-auto leading-relaxed font-light">
                                Aquagrid transforms the problem into an opportunity. Our modular kelp farming systems don't just capture carbon—they actively <span className="text-seafoam-teal font-medium relative inline-block">restore ocean chemistry  <span className="absolute bottom-0 left-0 w-full h-2 bg-seafoam-teal/10 -z-10"></span></span> and create thriving marine habitats.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
