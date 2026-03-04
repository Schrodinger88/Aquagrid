import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-midnight text-white/60 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <Image src="/logo-icon.png" alt="Aqua Grid" width={36} height={36} />
                            <span className="text-xl font-extrabold text-white tracking-tight">AQUA GRID</span>
                        </div>
                        <p className="mb-6 leading-relaxed text-sm">
                            Green Solutions for Blue Oceans.<br />
                            Restoring marine ecosystems through modular kelp farming.
                        </p>
                        <div className="flex gap-3">
                            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                <button key={i} className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-sky-blue/20 hover:text-sky-blue transition-all border border-white/5">
                                    <Icon className="h-4 w-4" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: "About", href: "/about" },
                                { name: "Solutions", href: "/solutions" },
                                { name: "Impact", href: "/impact" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-sky-blue transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: "Kelp Applications", href: "/resources" },
                                { name: "Market Data", href: "/resources" },
                                { name: "Feasibility Study", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-sky-blue transition-colors">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="mailto:aquagrid@enactusuottawa.ca" className="hover:text-sky-blue transition-colors">aquagrid@enactusuottawa.ca</a></li>
                            <li><a href="tel:3439885550" className="hover:text-sky-blue transition-colors">343-988-5550</a></li>
                            <li className="text-white/40">University of Ottawa, ON</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
                    <p>&copy; {new Date().getFullYear()} Aqua Grid. All rights reserved.</p>
                    <p>Green Solutions for Blue Oceans</p>
                </div>
            </div>
        </footer>
    );
}
