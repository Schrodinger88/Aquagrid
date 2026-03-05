"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/40" : "bg-white/50 backdrop-blur-lg"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-[72px] items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image
                                src="/logo-icon.png"
                                alt="Aqua Grid"
                                width={36}
                                height={36}
                                className="group-hover:scale-105 transition-transform"
                            />
                            <span className="text-xl font-extrabold tracking-tight text-deep-forest uppercase">
                                AQUA GRID
                            </span>
                        </Link>

                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200
                                            ${isActive
                                                ? "text-kelp-green bg-light-green"
                                                : "text-slate hover:text-royal-blue hover:bg-light-blue"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="hidden lg:flex items-center gap-3">
                            <Link href="/contact" className="btn-primary py-2.5 px-6 text-sm">
                                Contact Us
                            </Link>
                        </div>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-xl hover:bg-light-blue text-slate transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay + Drawer */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${mobileOpen ? "visible" : "invisible"}`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-deep-forest/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setMobileOpen(false)}
                />
                {/* Drawer */}
                <div
                    className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex items-center justify-between p-6 border-b border-border">
                        <span className="text-lg font-bold text-deep-forest uppercase">Menu</span>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="p-2 rounded-xl hover:bg-light-blue text-slate transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="p-6 space-y-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-4 py-3.5 text-base font-semibold rounded-xl transition-all
                                        ${isActive
                                            ? "text-kelp-green bg-light-green"
                                            : "text-deep-forest hover:text-royal-blue hover:bg-light-blue"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <div className="pt-4 mt-4 border-t border-border">
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="btn-primary w-full text-center py-3.5 text-base"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer */}
            <div className="h-[72px]" />
        </>
    );
}
