import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-midnight to-[#050812] relative overflow-hidden border-t border-sky-blue/20">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-blue rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 text-white">
                <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <Image src="/logo-icon.png" alt="Aqua Grid" width={36} height={36} className="bg-white/10 p-1 rounded-lg backdrop-blur-md" />
                            <span className="text-xl font-bold tracking-tight uppercase">AQUA GRID</span>
                        </div>
                        <p className="mb-6 leading-relaxed text-sm text-white/70">
                            Green Solutions for Blue Oceans. Deploying modular kelp farming systems to restore marine ecosystems while generating sustainable revenue.
                        </p>
                        <p className="text-sm font-bold text-sky-blue uppercase tracking-widest hidden md:block">
                            &ldquo;Where kelp meets clean waters&rdquo;
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">Company</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Technology", href: "/solutions" },
                                { name: "Our Impact", href: "/impact" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/60 hover:text-sky-blue transition-colors flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-sky-blue/0 hover:bg-sky-blue/100 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">Resources</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            {[
                                { name: "Kelp Applications", href: "/resources" },
                                { name: "Market Data", href: "/resources" },
                                { name: "Feasibility Study", href: "/contact" },
                                { name: "Pitch Deck", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/60 hover:text-sky-blue transition-colors flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-kelp-green/0 hover:bg-kelp-green/100 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">Connect</h4>
                        <ul className="space-y-4 text-sm text-white/60 font-medium">
                            <li><a href="mailto:aquagrid@enactusuottawa.ca" className="hover:text-white transition-colors">aquagrid@enactusuottawa.ca</a></li>
                            <li><a href="tel:3439885550" className="hover:text-white transition-colors">343-988-5550</a></li>
                            <li className="text-white/40">University of Ottawa, ON</li>
                        </ul>
                        <div className="flex gap-4 mt-8">
                            <a href="https://www.linkedin.com/company/aqua-grid" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://twitter.com/aquagrid" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-sky-blue hover:border-sky-blue transition-all">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/aquagrid.ca" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-medium">
                    <p>&copy; {new Date().getFullYear()} Aqua Grid. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
