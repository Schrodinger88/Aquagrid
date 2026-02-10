"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Droplets,
  Fish,
  Leaf,
  BarChart3,
  ShieldCheck,
  Globe,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle2,
  AlertCircle,
  Zap,
  Clock,
  Waves,
  Microscope,
  HardHat,
  ChevronDown
} from "lucide-react";
import HeroScroll from "@/components/HeroScroll";

import CountUpNumber from "@/components/CountUpNumber";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-ocean-green/20 selection:text-ocean-green">
      <main className="flex-grow">

        {/* Scroll Hero Section */}
        <HeroScroll />

        {/* The Crisis We're Solving - Minimalist White Section */}
        <section id="crisis" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <span className="inline-block py-1 px-3 rounded-full bg-ocean-green/10 text-ocean-green text-xs font-bold tracking-widest uppercase mb-4">The Challenge</span>
              <h2 className="text-4xl md:text-5xl mb-6 text-dark-forest-green text-heading">Our Oceans are in Crisis</h2>
              <p className="text-xl text-warm-gray max-w-2xl mx-auto font-light leading-relaxed">
                Ocean acidification has increased by <strong className="text-foreground">30%</strong> since the Industrial Revolution, silently threatening marine life and global livelihoods.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Droplets className="h-12 w-12 text-coastal-blue" />,
                  title: "Ocean Acidification",
                  description: "Rising CO2 levels are lowering ocean pH, dissolving the shells and skeletons of essential marine organisms."
                },
                {
                  icon: <Fish className="h-12 w-12 text-ocean-green" />,
                  title: "Collapsing Fisheries",
                  description: "Global fish stocks have declined drastically. Habitat degradation has pushed many ecosystems to the brink."
                },
                {
                  icon: <AlertCircle className="h-12 w-12 text-alert-orange" />,
                  title: "Inadequate Solutions",
                  description: "Current approaches are often too expensive or slow to scale. We need economically viable restoration now."
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-transparent">
                  <div className="mb-8 p-4 inline-block rounded-2xl bg-slate-50 group-hover:bg-white group-hover:shadow-md transition-all">{item.icon}</div>
                  <h3 className="text-2xl mb-4 text-heading text-dark-forest-green">{item.title}</h3>
                  <p className="text-warm-gray leading-relaxed text-lg">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-24 bg-slate-50 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-white/50">
              <div className="relative z-10">
                <h3 className="text-3xl mb-6 text-dark-forest-green text-heading">Why Aquagrid?</h3>
                <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                  Aquagrid transforms the problem into an opportunity. Our modular kelp farming systems don't just capture carbon—they actively <span className="text-ocean-green font-medium">restore ocean chemistry</span> and create thriving marine habitats.
                </p>
              </div>
              {/* Subtle decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-coastal-blue/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Our Solution - Split Layout */}
        <section id="solution" className="py-32 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-coastal-blue/10 text-coastal-blue text-xs font-bold tracking-widest uppercase mb-4">Technology</span>
                <h2 className="text-4xl md:text-5xl mb-8 text-dark-forest-green text-heading leading-tight">Modular Kelp Farming <br /> <span className="text-gradient">Reimagined</span></h2>
                <p className="text-xl text-warm-gray mb-12 leading-relaxed">
                  Aquagrid's patent-pending system combines cutting-edge marine engineering with nature's most powerful carbon capture organism: kelp.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      title: "Smart & Scalable",
                      points: "Modular units adapt to any coastal environment with rapid deployment."
                    },
                    {
                      title: "Self-Sustaining",
                      points: "Low-maintenance operation creates a permanent habitat for marine life."
                    },
                    {
                      title: "Proven Resilience",
                      points: "Engineered for extreme durability based on decades of marine research."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-ocean-green/20 flex items-center justify-center shadow-sm">
                          <CheckCircle2 className="h-5 w-5 text-ocean-green" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2 text-dark-forest-green">{item.title}</h4>
                        <p className="text-warm-gray">{item.points}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-slate-200/50 rotate-3 transition-transform hover:rotate-0 duration-700">
                  <div className="h-full w-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2rem] overflow-hidden relative flex items-center justify-center border border-slate-100 shadow-inner">
                    <Leaf className="h-64 w-64 text-ocean-green opacity-20" />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-white/60 backdrop-blur-md border-t border-white/20">
                      <p className="font-serif italic text-dark-forest-green text-lg text-center">"Nature's most powerful carbon capture technology."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* By The Numbers - Dark Elegant Section */}
        <section id="impact" className="py-32 bg-frosted-mint text-dark-forest-green relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl mb-6 text-heading text-shadow-lg text-dark-forest-green">Tangible Impact</h2>
              <p className="text-dark-forest-green/60 font-medium tracking-widest uppercase text-sm">Per Hectare Annually</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32 border-b border-dark-forest-green/10 pb-20">
              {[
                { val: 15, suffix: "t", label: "CO2 Absorbed" },
                { val: 50, suffix: "%", label: "Acidity Reduction" },
                { val: 3, suffix: "x", label: "Fish Population" },
                { val: 45, prefix: "$", suffix: "k", label: "Annual Revenue" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl md:text-7xl font-bold mb-4 text-dark-forest-green font-heading drop-shadow-sm">
                    <CountUpNumber
                      end={item.val}
                      suffix={item.suffix}
                      prefix={item.prefix}
                      duration={2500}
                    />
                  </div>
                  <div className="text-ocean-green font-bold uppercase text-xs tracking-widest">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-12 lg:p-16 border border-white/50 shadow-xl hover:shadow-ocean-green/10 transition-shadow duration-500">
              <div className="grid lg:grid-cols-3 gap-16">
                <div>
                  <h3 className="text-3xl mb-6 font-heading text-dark-forest-green">Economic <br /> Viability</h3>
                  <p className="text-warm-gray leading-relaxed">
                    Our model ensures sustainability is profitable. By reducing operational costs and maximizing yield, we create a system that pays for itself.
                  </p>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-12">
                  <div>
                    <div className="text-sm text-dark-forest-green/70 uppercase tracking-widest mb-2 font-bold">Investment</div>
                    <div className="text-4xl font-bold mb-2 text-shadow-sm text-dark-forest-green">$85,000</div>
                    <div className="text-sm text-dark-forest-green/50">per hectare setup</div>
                  </div>
                  <div>
                    <div className="text-sm text-ocean-green uppercase tracking-widest mb-2 font-bold">Projected Profit</div>
                    <div className="text-4xl font-bold mb-2 text-ocean-green text-shadow-sm">$33,000</div>
                    <div className="text-sm text-dark-forest-green/50">annual recurring (Year 3+)</div>
                  </div>
                  <div className="col-span-2 pt-8 border-t border-dark-forest-green/10">
                    <div className="flex items-center gap-4 text-sm text-dark-forest-green/70">
                      <Clock className="w-5 h-5 text-ocean-green" />
                      <span>Break-even period: <strong>2.5 Years</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications - Clean Grid */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-heading mb-16 text-center text-dark-forest-green">Applications & Markets</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { title: "Organic Fertilizer", icon: <Leaf className="h-5 w-5" /> },
                { title: "Sustainable Animal Feed", icon: <CheckCircle2 className="h-5 w-5" /> },
                { title: "Bioplastics", icon: <Zap className="h-5 w-5" /> },
                { title: "Nutritious Food", icon: <Fish className="h-5 w-5" /> },
                { title: "Pharmaceuticals", icon: <Microscope className="h-5 w-5" /> }
              ].map((item, i) => (
                <div key={i} className="px-8 py-4 rounded-full border border-slate-200 text-slate-600 flex items-center gap-3 hover:border-ocean-green hover:text-ocean-green hover:bg-ocean-green/5 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-default">
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Vertical Roadmap */}
        <section id="how-it-works" className="py-32 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-heading mb-4 text-dark-forest-green">From Design to Harvest</h2>
              <p className="text-warm-gray">A streamlined process for rapid deployment</p>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>

              <div className="space-y-20">
                {[
                  {
                    title: "Design & Planning",
                    time: "Months 1-2",
                    desc: "Site assessment and environmental analysis to identify optimal locations.",
                  },
                  {
                    title: "Installation",
                    time: "Months 3-4",
                    desc: "Rapid deployment of modular units with minimal environmental disruption.",
                  },
                  {
                    title: "Growth & Monitoring",
                    time: "Months 5-8",
                    desc: "Smart monitoring tracks rapid kelp growth and water quality in real-time.",
                  },
                  {
                    title: "Harvest & Impact",
                    time: "Month 9+",
                    desc: "First harvest yields returns. Continuous cycles provide year-round restoration.",
                  }
                ].map((step, i) => (
                  <div key={i} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-ocean-green z-10 mt-1.5"></div>

                    {/* Content */}
                    <div className={`pl-20 md:pl-0 flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h4 className="text-2xl font-bold text-dark-forest-green mb-2">{step.title}</h4>
                      <span className="inline-block py-1 px-2 rounded bg-slate-200 text-slate-600 text-xs font-bold uppercase mb-4">{step.time}</span>
                      <p className={`text-warm-gray leading-relaxed ${i % 2 === 0 ? 'md:ml-auto' : ''} max-w-md`}>{step.desc}</p>
                    </div>

                    <div className="hidden md:block flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-ocean-gradient opacity-[0.03]"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-dark-forest-green mb-8 tracking-tight">Ready to make waves?</h2>
            <p className="text-xl text-warm-gray mb-12 leading-relaxed">
              Join us in our mission to restore ocean health and build a sustainable future for coastal communities worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-cta text-lg shadow-xl shadow-ocean-green/20">Get Involved Now</a>
              <a href="#newsletter" className="btn-secondary text-lg">Join Newsletter</a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer - Minimalist Dark */}
      <footer className="bg-midnight-navy text-slate-400 py-16 border-t border-white/5 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6 text-white">
                <Waves className="h-6 w-6" />
                <span className="text-xl font-bold tracking-tight">AQUA GRID</span>
              </div>
              <p className="mb-6 opacity-60">Green Solutions for Blue Oceans.</p>
              <div className="flex gap-4">
                <Twitter className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
                <Linkedin className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
                <Instagram className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between opacity-50">
            <p>&copy; 2025 Aquagrid. All rights reserved.</p>
            <p>Designed with purpose.</p>
          </div>
        </div>
      </footer>
    </div >
  );
}
