"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/solutions" },
    { name: "Impact", path: "/impact" },
    { name: "Resources", path: "/resources" },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-[80px] items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image
                                src="/logo-icon.png"
                                alt="Aqua Grid"
                                width={40}
                                height={40}
                                className="group-hover:scale-105 transition-transform"
                            />
                            <span className="text-2xl font-bold tracking-tight text-deep-forest uppercase">
                                AQUA GRID
                            </span>
                        </Link>

                        <div className="hidden lg:flex items-center gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="px-4 py-2 text-sm font-semibold text-slate hover:text-ocean-blue rounded-full hover:bg-light-blue transition-all duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:flex items-center gap-3">
                            <Link href="/contact" className="btn-primary py-2.5 px-6 text-sm">
                                Contact Us
                            </Link>
                        </div>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-light-blue text-slate transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {mobileOpen && (
                    <div className="lg:hidden bg-white border-t border-border">
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-3 text-base font-semibold text-deep-forest hover:text-ocean-blue hover:bg-light-blue rounded-xl transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-border">
                                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full text-center py-3">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <div className="h-[80px]" />
        </>
    );
}
