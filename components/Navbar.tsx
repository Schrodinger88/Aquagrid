
import { Waves } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-light-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-2">
                        <Waves className="h-8 w-8 text-ocean-green" />
                        <div className="flex flex-col leading-none">
                            <span className="text-2xl font-bold tracking-tight text-dark-forest-green dark:text-white">AQUA GRID</span>
                            <span className="text-[10px] font-bold text-ocean-green all-caps">Green Solutions for Blue Oceans</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-bold all-caps">
                        <a href="#" className="hover:text-ocean-green transition-colors">Home</a>
                        <a href="#about" className="hover:text-ocean-green transition-colors">About</a>
                        <a href="#solution" className="hover:text-ocean-green transition-colors">Solutions</a>
                        <a href="#impact" className="hover:text-ocean-green transition-colors">Impact</a>
                        <a href="#resources" className="hover:text-ocean-green transition-colors">Resources</a>
                        <a href="#contact" className="btn-primary py-2 px-6 text-xs">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
