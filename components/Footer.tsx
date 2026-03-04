import { Waves, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-driftwood text-sunlight-cream/70 py-16 border-t border-white/5 text-sm relative overflow-hidden">
            {/* Background Gradient Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-mist-blue/5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6 text-white">
                            <Waves className="h-6 w-6 text-seafoam-teal" />
                            <span className="text-xl font-bold tracking-tight">AQUA GRID</span>
                        </div>
                        <p className="mb-6 opacity-60 leading-relaxed">Green Solutions for Blue Oceans. <br /> Restoring balance, one kelp forest at a time.</p>
                        <div className="flex gap-4">
                            <Twitter className="h-5 w-5 hover:text-seafoam-teal transition-colors cursor-pointer" />
                            <Linkedin className="h-5 w-5 hover:text-seafoam-teal transition-colors cursor-pointer" />
                            <Instagram className="h-5 w-5 hover:text-seafoam-teal transition-colors cursor-pointer" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-serif font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-seafoam-teal transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-seafoam-teal transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-seafoam-teal transition-colors">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-serif font-bold mb-6 text-lg">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-seafoam-teal transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-seafoam-teal transition-colors">Research</a></li>
                            <li><a href="#" className="hover:text-seafoam-teal transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-serif font-bold mb-6 text-lg">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-seafoam-teal transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-seafoam-teal transition-colors">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between opacity-50">
                    <p>&copy; 2025 Aquagrid. All rights reserved.</p>
                    <p className="flex items-center gap-2 justify-center md:justify-start">Designed with purpose <span className="text-seafoam-teal">●</span></p>
                </div>
            </div>
        </footer>
    );
}
