import { Waves } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-background/60 backdrop-blur-xl rounded-full shadow-lg border border-white/20 transition-all duration-300 hover:bg-background/80">
            <div className="px-6 sm:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="p-1.5 bg-seafoam-teal/10 rounded-full group-hover:bg-seafoam-teal/20 transition-colors">
                            <Waves className="h-6 w-6 text-seafoam-teal" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-bold tracking-tight text-dark-forest-green dark:text-white">AQUA GRID</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-1 bg-secondary/5 p-1.5 rounded-full border border-white/10">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Solutions', path: '/solutions' },
                            { name: 'Impact', path: '/impact' },
                            { name: 'Resources', path: '/resources' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="px-4 py-2 text-sm font-bold text-dark-forest-green hover:text-seafoam-teal rounded-full hover:bg-white/50 transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center">
                        <Link href="/contact" className="btn-primary py-2.5 px-6 text-xs rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
