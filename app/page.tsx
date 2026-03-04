"use client";

import HeroScroll from "@/components/HeroScroll";
import { ArrowRight, Sprout, Sun, Droplets, Fish, Anchor, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-sandstone text-driftwood font-sans selection:bg-seafoam-teal/30 selection:text-deep-kelp">
      <main className="flex-grow">

        {/* 1. HERO SECTION (Maintains Scroll Animation) */}
        <HeroScroll />

        {/* 2. IMPACT NUMBERS - "Growing Impact" */}
        <section id="impact" className="relative py-32 overflow-hidden bg-white">
          {/* Organic Background Decoration */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-seafoam-teal/10 rounded-full blur-[100px] -translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-mist-blue/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-24">
              <span className="inline-block px-4 py-1.5 rounded-full bg-seafoam-teal/10 text-seafoam-teal font-serif italic text-lg mb-6 border border-seafoam-teal/20 backdrop-blur-sm">Restoration in Progress</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-deep-kelp mb-8 tracking-tight">Our Growing Impact</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-seafoam-teal to-transparent mx-auto rounded-full opacity-60"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

              {/* Stat 1 */}
              <div className="card-paper flex flex-col items-center group">
                <div className="w-20 h-20 bg-glacial-green/20 rounded-[2rem] flex items-center justify-center mb-8 text-deep-kelp group-hover:scale-110 transition-transform duration-500">
                  <Droplets className="w-10 h-10 text-glacial-green" />
                </div>
                <div className="text-6xl font-serif font-bold text-deep-kelp mb-3">
                  -40<span className="text-3xl text-seafoam-teal align-top">%</span>
                </div>
                <p className="text-mist-blue font-bold uppercase tracking-widest text-xs mb-4">Acidity Levels</p>
                <p className="text-driftwood/70 text-base leading-relaxed">
                  Local waters become healthier for shellfish within <br /> 3 months of kelp forest establishment.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="card-paper flex flex-col items-center transform md:-translate-y-12">
                <div className="w-20 h-20 bg-sunlight-cream rounded-[2rem] flex items-center justify-center mb-8 text-deep-kelp group-hover:scale-110 transition-transform duration-500 border border-white/50 shadow-inner">
                  <Fish className="w-10 h-10 text-mist-blue" />
                </div>
                <div className="text-6xl font-serif font-bold text-deep-kelp mb-3">
                  10<span className="text-3xl text-seafoam-teal align-top">x</span>
                </div>
                <p className="text-mist-blue font-bold uppercase tracking-widest text-xs mb-4">Biodiversity</p>
                <p className="text-driftwood/70 text-base leading-relaxed">
                  Marine species return to the shelter of our kelp forests, creating vibrant underwater communities.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="card-paper flex flex-col items-center">
                <div className="w-20 h-20 bg-mist-blue/10 rounded-[2rem] flex items-center justify-center mb-8 text-deep-kelp group-hover:scale-110 transition-transform duration-500">
                  <Anchor className="w-10 h-10 text-mist-blue" />
                </div>
                <div className="text-6xl font-serif font-bold text-deep-kelp mb-3">
                  24<span className="text-3xl text-seafoam-teal align-top">/7</span>
                </div>
                <p className="text-mist-blue font-bold uppercase tracking-widest text-xs mb-4">Stewardship</p>
                <p className="text-driftwood/70 text-base leading-relaxed">
                  Continuous care and monitoring by local coastal farmers ensuring sustainable growth.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. MISSION SECTION - "Rooted in Nature" */}
        <section id="mission" className="py-32 relative bg-sandstone">
          {/* Wave Divider Top */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 opacity-50">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              <div className="relative group">
                <div className="absolute top-8 left-8 w-full h-full border-2 border-seafoam-teal/30 rounded-[3rem] -z-10 transform rotate-3 transition-transform duration-700 group-hover:rotate-6"></div>
                <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-mist-blue/20 transform transition-transform duration-700 group-hover:-translate-y-2">
                  <img
                    src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2940&auto=format&fit=crop"
                    alt="Underwater Kelp Forest"
                    className="w-full h-auto object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sunlight-cream/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg animate-float-slow border border-white/50">
                  <Sun className="w-16 h-16 text-seafoam-teal" />
                </div>
              </div>

              <div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-deep-kelp mb-8 leading-[1.1]">
                  Working <span className="text-seafoam-teal italic relative inline-block">
                    With Nature
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-seafoam-teal/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span>, <br /> Not Against It.
                </h2>
                <p className="text-xl text-driftwood/80 mb-10 leading-relaxed font-light">
                  Traditional aquaculture often disrupts ecosystems. We do things differently. By mimicking natural kelp forests, we create habitats that regenerate the ocean while providing a sustainable harvest.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-6 group p-4 rounded-2xl hover:bg-white/50 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-full bg-glacial-green/20 flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Sprout className="w-6 h-6 text-deep-kelp" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-deep-kelp text-2xl mb-2">Regenerative Farming</h4>
                      <p className="text-driftwood/70 leading-relaxed">Our crops capture carbon and de-acidify the water as they grow, actively healing the local ecosystem.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group p-4 rounded-2xl hover:bg-white/50 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-full bg-mist-blue/10 flex items-center justify-center mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Heart className="w-6 h-6 text-deep-kelp" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-deep-kelp text-2xl mb-2">Community Rooted</h4>
                      <p className="text-driftwood/70 leading-relaxed">Empowering coastal families with sustainable livelihoods that honor their maritime heritage.</p>
                    </div>
                  </div>
                </div>

                <a href="#about" className="btn-nature-primary text-xl px-10 py-5">
                  Read Our Story
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 4. CTA SECTION - "Join the Harvest" */}
        <section id="contact" className="py-32 relative flex items-center justify-center overflow-hidden bg-mist-blue/20">
          {/* Wave Divider Top */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-sandstone"></path>
            </svg>
          </div>

          <div className="relative z-10 text-center max-w-3xl px-4 mt-12">
            <div className="inline-block p-4 rounded-full bg-white/50 backdrop-blur-sm mb-6">
              <Sprout className="w-8 h-8 text-seafoam-teal animate-bounce" />
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-deep-kelp">
              Ready to <span className="italic text-seafoam-teal">Grow</span> with Us?
            </h2>
            <p className="text-xl text-driftwood mb-10 font-light leading-relaxed">
              Whether you're a coastal community member, an investor, or an ocean lover, there's a place for you in our ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="btn-nature-primary text-xl px-12 py-4 shadow-xl shadow-seafoam-teal/20">
                Get Involved
              </a>
              <a href="#newsletter" className="btn-nature-secondary text-xl px-12 py-4">
                Join Newsletter
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
