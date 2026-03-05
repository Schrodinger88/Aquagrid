import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Shield, HeartHandshake, Waves, Droplets } from "lucide-react";
import CountUpNumber from "@/components/CountUpNumber";

export default function Home() {
  return (
    <div className="min-h-screen text-deep-forest font-sans">

      {/* ========== HERO ========== */}
      <section className="pt-6 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="relative w-full h-[78vh] min-h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
          <Image
            src="/images/hero-kelp.png"
            alt="Vibrant Kelp Forest underwater"
            fill
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#012604]/85 via-[#012604]/30 to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-sm flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#A8E6A3]" />
              Green Solutions for Blue Oceans
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight max-w-5xl drop-shadow-lg">
              Protecting Oceans, <br className="hidden md:block" />
              <span className="text-sky-blue">Preserving Our Future</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl font-medium mb-10 drop-shadow-md leading-relaxed">
              Deploying scalable, modular kelp farming systems to restore marine ecosystems, combat acidification, and generate sustainable returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/solutions" className="bg-kelp-green text-white hover:bg-[#0E4815] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl shadow-kelp-green/25 hover:-translate-y-1 flex items-center gap-2 text-lg">
                Discover The Tech <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="https://cal.com/aquagrid" target="_blank" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 text-lg">
                Book a Call directly
              </Link>
            </div>
          </div>

          {/* Floating stat inside hero */}
          <div className="absolute bottom-6 right-6 hidden md:flex gap-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-left shadow-2xl">
              <div className="text-sm text-white/60 uppercase tracking-wider font-bold mb-1">Impact per System</div>
              <div className="text-3xl font-extrabold text-white"><CountUpNumber end={1130} /> kg</div>
              <div className="text-sky-blue text-sm font-medium">CO₂ Absorbed / Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MANIFESTO ========== */}
      <section className="py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3">
            <span className="text-kelp-green font-bold uppercase tracking-widest text-sm mb-4 block">• Guiding Our Path</span>
            <h2 className="text-3xl font-bold leading-snug">
              Conserve ecosystems through impactful environmental projects, empowering local communities with sustainable solutions.
            </h2>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-8 group">
              <div className="w-12 h-12 bg-light-green rounded-full flex items-center justify-center mb-6 border border-kelp-green/20">
                <Shield className="w-5 h-5 text-kelp-green" />
              </div>
              <h3 className="text-6xl font-black text-deep-forest mb-2 tracking-tighter">
                <CountUpNumber end={1100} suffix="+" />
              </h3>
              <p className="text-slate font-medium">Kilograms of Oxygen produced per unit annually, restoring dead zones.</p>
            </div>

            <div className="bg-deep-forest text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-kelp-green blur-3xl opacity-40 transition-opacity group-hover:opacity-60" />
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm z-10 relative">
                <Waves className="w-5 h-5 text-sky-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 z-10 relative">Building Nature&apos;s Future</h3>
              <p className="text-white/65 font-medium leading-relaxed z-10 relative">A world where humanity and oceans coexist in balance, ensuring biodiversity and resources for generations to come.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== THE CRISIS ========== */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-kelp-green font-bold uppercase tracking-widest text-sm mb-4 block">• The Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Oceans Are in Crisis</h2>
            <p className="text-lg text-slate leading-relaxed">
              Ocean acidification has increased by <strong className="text-deep-forest">30%</strong> since the Industrial Revolution. We are acting where nature needs us most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Droplets className="w-6 h-6 text-sky-blue" />, title: "Ocean Acidification", desc: "CO₂ absorption increases water acidity, preventing marine life from building shells and skeletons, threatening the shellfish industry." },
              { icon: <Waves className="w-6 h-6 text-royal-blue" />, title: "Declining Fisheries", desc: "Catch size and volume declines are already impacting our multi-million dollar shellfish market, threatening food security and coastal livelihoods." },
              { icon: <HeartHandshake className="w-6 h-6 text-kelp-green" />, title: "Inadequate Solutions", desc: "Existing approaches are too expensive or too slow to scale. We need economically viable solutions that restore ocean chemistry while generating returns." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-10 group">
                <div className="w-14 h-14 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-white/80">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOLUTION GRID ========== */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-kelp-green font-bold uppercase tracking-widest text-sm mb-4 block">• The Solution</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1]">Let&apos;s transform our world into a <span className="text-kelp-green">cleaner, greener</span> place.</h2>
          </div>
          <p className="text-slate max-w-md text-right hidden md:block leading-relaxed">
            We work with partners and communities to ensure nature thrives and climate change is reversed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Large Image */}
          <div className="md:col-span-8 relative rounded-[2.5rem] overflow-hidden group shadow-lg">
            <Image src="/images/sustainability-hands.png" alt="Ethical Harvesting" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#012604]/80 to-transparent opacity-70" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/20 backdrop-blur-md w-max px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-3 border border-white/30">
                Ethical Harvest
              </div>
              <h3 className="text-3xl font-bold text-white">Harvesting Sustainable Feedstock</h3>
            </div>
          </div>

          {/* Dark Stat Card */}
          <div className="md:col-span-4 bg-deep-forest rounded-[2.5rem] p-10 flex flex-col justify-center text-white relative overflow-hidden group hover:bg-[#011D03] transition-colors duration-300 shadow-lg">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Shield className="w-32 h-32" />
            </div>
            <div className="text-5xl font-black mb-4"><CountUpNumber end={500} prefix="$" suffix="B" /></div>
            <h4 className="text-xl font-bold mb-2 text-sky-blue">Ecosystem Services</h4>
            <p className="text-white/65">Annually provided by global kelp forests through fisheries production and carbon sequestration.</p>
          </div>

          {/* Light Text Card */}
          <div className="md:col-span-4 glass-card p-10 flex flex-col justify-center group">
            <div className="w-12 h-12 bg-light-green rounded-full flex items-center justify-center mb-6 text-kelp-green font-bold border border-kelp-green/20 group-hover:bg-kelp-green group-hover:text-white transition-colors duration-300">
              01
            </div>
            <h4 className="text-2xl font-bold mb-3">Siphon Pump Innovation</h4>
            <p className="text-slate">Our patent-pending siphon system increases nutrient availability for kelp year-round, unlike traditional setups dependent on seasonal shifts.</p>
          </div>

          {/* Second Image */}
          <div className="md:col-span-5 relative rounded-[2.5rem] overflow-hidden group shadow-lg">
            <Image src="/images/abstract-ocean.png" alt="Abstract Ocean" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[#003273]/25" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <h3 className="text-3xl font-bold text-white drop-shadow-md">Restoring Ocean Chemistry</h3>
            </div>
          </div>

          {/* Smaller Stat Card */}
          <div className="md:col-span-3 glass-card bg-light-blue/40 p-10 flex flex-col justify-center relative group hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl font-black text-royal-blue mb-2"><CountUpNumber end={12.3} suffix="%" decimals={1} /></div>
            <h4 className="font-bold text-deep-forest mb-2">Global CAGR</h4>
            <p className="text-sm text-slate">Massive growth in commercial seaweed markets worldwide.</p>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-28 bg-midnight text-white relative overflow-hidden mt-12 rounded-t-[3rem]">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-kelp-green rounded-full blur-[180px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-blue rounded-full blur-[220px] opacity-15" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Ready to <span className="text-sky-blue italic pr-2">Make Waves?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join the movement of innovators and partners accelerating the blue economy through sustainable kelp aquaculture.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-sky-blue text-white hover:bg-[#4A9BC9] px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl shadow-sky-blue/20 hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
              Get Involved Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="https://cal.com/aquagrid" target="_blank" className="bg-white/10 text-white hover:bg-white/20 border border-white/20 px-8 py-4 rounded-full font-bold transition-all duration-300 text-lg flex items-center justify-center">
              Schedule a Deep Dive
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
