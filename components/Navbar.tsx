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
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-[72px] items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image
                                src="/logo-icon.png"
                                alt="Aqua Grid"
                                width={40}
                                height={40}
                                className="group-hover:scale-105 transition-transform"
                            />
                            <span className="text-xl font-extrabold tracking-tight text-deep-forest">
                                AQUA GRID
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="px-4 py-2 text-sm font-semibold text-midnight/70 hover:text-sky-blue rounded-lg hover:bg-light-blue/50 transition-all duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-3">
                            <Link
                                href="/contact"
                                className="btn-primary py-2.5 px-6 text-sm"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-light-blue/50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? (
                                <X className="w-6 h-6 text-midnight" />
                            ) : (
                                <Menu className="w-6 h-6 text-midnight" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden bg-white border-t border-border">
                        <div className="px-4 py-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-3 text-base font-semibold text-midnight/80 hover:text-sky-blue hover:bg-light-blue/30 rounded-xl transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="btn-primary w-full text-center py-3"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Spacer for fixed navbar */}
            <div className="h-[72px]" />
        </>
    );
}
