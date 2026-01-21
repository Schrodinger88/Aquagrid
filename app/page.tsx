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

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Navigation */}
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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-ocean-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl mb-6">
                Turning the Tide on Ocean Acidification
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed">
                Scalable kelp farming solutions that restore marine ecosystems while creating sustainable revenue for coastal communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#solution" className="btn-cta flex items-center justify-center gap-2 transform hover:scale-105">
                  Get Started <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#impact" className="btn-secondary flex items-center justify-center !border-white !text-white hover:!bg-white hover:!text-deep-ocean-blue">
                  View Demo
                </a>
                <a href="#contact" className="btn-secondary flex items-center justify-center !border-white/50 !text-white/80 hover:!border-white hover:!text-white">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </section>

        {/* The Crisis We're Solving */}
        <section id="crisis" className="py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4 text-dark-forest-green dark:text-white">Our Oceans are in Crisis</h2>
              <p className="text-lg text-warm-gray dark:text-slate-400 max-w-2xl mx-auto">
                Ocean acidification has increased by 30% since the Industrial Revolution, threatening marine life and livelihoods.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Droplets className="h-10 w-10 text-coastal-blue" />,
                  title: "Ocean Acidification",
                  description: "Rising CO2 levels are making our oceans more acidic, dissolving the shells and skeletons of marine organisms."
                },
                {
                  icon: <Fish className="h-10 w-10 text-ocean-green" />,
                  title: "Collapsing Fisheries",
                  description: "Global fish stocks have declined by 90% since 1950. Habitat degradation has pushed ecosystems to the brink."
                },
                {
                  icon: <AlertCircle className="h-10 w-10 text-alert-orange" />,
                  title: "Inadequate Solutions",
                  description: "Current approaches are too expensive or slow. We need scalable, economically viable solutions."
                }
              ].map((item, i) => (
                <div key={i} className="card dark:bg-midnight-navy/50 border border-slate-200 dark:border-slate-800">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl mb-3 text-dark-forest-green dark:text-white">{item.title}</h3>
                  <p className="text-warm-gray dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 bg-ocean-green/5 border border-ocean-green/10 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl mb-4 text-dark-forest-green dark:text-white">Why Aquagrid?</h3>
              <p className="text-lg text-warm-gray dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Aquagrid transforms the problem into an opportunity. Our modular kelp farming systems don't just capture carbon—they actively restore ocean chemistry and create thriving marine habitats.
              </p>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section id="solution" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6 text-dark-forest-green dark:text-white">Modular Kelp Farming Technology</h2>
                <p className="text-lg text-warm-gray dark:text-slate-400 mb-8 leading-relaxed">
                  Aquagrid's patent-pending system combines cutting-edge marine engineering with nature's most powerful carbon capture organism: kelp.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Smart & Scalable Design",
                      points: ["Modular units adapt to any environment", "Minimal footprint, maximum impact", "Rapid deployment in weeks"]
                    },
                    {
                      title: "Self-Sustaining Ecosystem",
                      points: ["Low-maintenance operation", "Continuous carbon capture", "Creates habitat for marine life"]
                    },
                    {
                      title: "Proven Technology",
                      points: ["Based on decades of research", "Field-tested in real conditions", "Designed for extreme durability"]
                    }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2 text-dark-forest-green dark:text-white">
                        <CheckCircle2 className="h-5 w-5 text-success-green" /> {item.title}
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                        {item.points.map((point, j) => (
                          <li key={j} className="text-sm text-warm-gray dark:text-slate-400">{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-ocean-green/20 to-coastal-blue/20 rounded-3xl overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-ocean-green group-hover:scale-110 transition-transform duration-500">
                    <Leaf className="h-48 w-48 opacity-20" />
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 bg-white/80 dark:bg-midnight-navy/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl">
                    <p className="text-sm font-medium italic text-dark-forest-green dark:text-white">"Nature's most powerful carbon capture organism: kelp."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* By The Numbers */}
        <section id="impact" className="py-24 bg-dark-forest-green text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">By The Numbers</h2>
              <p className="text-coastal-blue font-bold all-caps tracking-widest">Environmental Impact (Per Hectare Annually)</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {[
                { val: "15 tons", label: "CO2 absorbed" },
                { val: "50%", label: "Acidity reduction" },
                { val: "300%", label: "Fish population increase" },
                { val: "$45,000", label: "Annual kelp revenue" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-coastal-blue">{item.val}</div>
                  <div className="text-white/80 font-bold all-caps text-xs tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-2xl mb-8 text-center">Economic Returns</h3>
              <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                <div>
                  <h4 className="text-coastal-blue font-bold mb-4 uppercase tracking-wider text-sm">Initial Investment</h4>
                  <div className="text-3xl font-bold mb-4">$85,000 <span className="text-sm font-normal text-white/60">per ha</span></div>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>Equipment & Materials: $60,000</li>
                    <li>Installation & Labor: $15,000</li>
                    <li>Permits & Compliance: $10,000</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-coastal-blue font-bold mb-4 uppercase tracking-wider text-sm">Annual Operating Costs</h4>
                  <div className="text-3xl font-bold mb-4">$12,000 <span className="text-sm font-normal text-white/60">per ha</span></div>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>Maintenance & Monitoring: $7,000</li>
                    <li>Labor (seasonal): $4,000</li>
                    <li>Insurance & Misc: $1,000</li>
                  </ul>
                </div>
                <div className="bg-ocean-green/20 p-6 rounded-2xl border border-ocean-green/30">
                  <h4 className="text-success-green font-bold mb-2 uppercase tracking-wider text-sm">ROI & Profit</h4>
                  <div className="text-xl font-bold mb-1">2.5 Years to break even</div>
                  <div className="text-3xl font-bold text-success-green">$33,000</div>
                  <div className="text-sm text-white/60">Projected Annual Profit (Year 3+)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kelp Applications */}
        <section className="py-24 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-dark-forest-green">Kelp Applications & Markets</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: "Fertilizer", icon: <Leaf className="h-6 w-6" /> },
                { title: "Animal Feed", icon: <CheckCircle2 className="h-6 w-6" /> },
                { title: "Bioplastics", icon: <Zap className="h-6 w-6" /> },
                { title: "Food Products", icon: <Fish className="h-6 w-6" /> },
                { title: "Pharma", icon: <Microscope className="h-6 w-6" /> }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-midnight-navy p-6 rounded-xl border border-slate-100 dark:border-slate-800 text-center hover:shadow-md transition-shadow">
                  <div className="inline-flex p-3 bg-ocean-green/10 rounded-full text-ocean-green mb-4">{item.icon}</div>
                  <div className="font-bold text-sm text-dark-forest-green dark:text-white all-caps">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-forest-green dark:text-white">How It Works</h2>
              <p className="text-warm-gray dark:text-slate-400">From initial design to first harvest</p>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
              <div className="space-y-12">
                {[
                  {
                    phase: "Phase 1: Design & Planning",
                    time: "Months 1-2",
                    desc: "Site assessment and environmental analysis. We identify optimal locations and obtain necessary permits.",
                    icon: <BarChart3 className="h-6 w-6" />
                  },
                  {
                    phase: "Phase 2: Installation",
                    time: "Months 3-4",
                    desc: "Rapid deployment of modular units. Our team handles all installation with minimal disruption to marine activities.",
                    icon: <HardHat className="h-6 w-6" />
                  },
                  {
                    phase: "Phase 3: Growth & Monitoring",
                    time: "Months 5-8",
                    desc: "Kelp grows rapidly—up to 2 feet per day. Our smart monitoring system tracks growth and health in real-time.",
                    icon: <Zap className="h-6 w-6" />
                  },
                  {
                    phase: "Phase 4: Harvest & Impact",
                    time: "Month 9+",
                    desc: "First harvest yields immediate returns. Continuous growth cycles provide multiple harvests per year.",
                    icon: <Clock className="h-6 w-6" />
                  }
                ].map((step, i) => (
                  <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 md:text-right">
                      <div className={`md:flex items-center gap-4 justify-end ${i % 2 === 1 ? 'flex-row-reverse text-left' : ''}`}>
                        <div>
                          <h4 className="font-bold text-xl text-dark-forest-green dark:text-white">{step.phase}</h4>
                          <span className="text-ocean-green font-bold text-sm all-caps">{step.time}</span>
                        </div>
                      </div>
                      <p className={`mt-2 text-warm-gray dark:text-slate-400 max-w-md ${i % 2 === 0 ? 'ml-auto' : ''}`}>{step.desc}</p>
                    </div>
                    <div className="relative z-10 w-12 h-12 bg-dark-forest-green text-white rounded-full flex items-center justify-center shadow-lg">
                      {step.icon}
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-24 bg-midnight-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-16 text-center">Who We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Government Agencies", desc: "Seeking cost-effective carbon capture and ecosystem restoration solutions." },
                { title: "Fisheries & Aquaculture", desc: "Commercial operations looking to restore fish stocks and diversify revenue." },
                { title: "Coastal Communities", desc: "Interested in climate resilience, job creation, and habitat restoration." },
                { title: "Environmental Orgs", desc: "NGOs and foundations funding innovative ocean health projects." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-lg mb-4 text-coastal-blue all-caps tracking-wide">{item.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-white dark:bg-midnight-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-16 text-center text-dark-forest-green dark:text-white">Implementation Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { q: "Q1 2025", title: "Pilot Program Launch", desc: "3 demonstration sites across diverse coastal environments." },
                { q: "Q2-Q3 2025", title: "Scaling Phase", desc: "Expand to 15 operational sites. Establish distribution partnerships." },
                { q: "Q4 2025", title: "Full Deployment", desc: "Open to all partners. Target: 50 hectares under cultivation." },
                { q: "2026 & Beyond", title: "Global Impact", desc: "Scale to 500+ hectares. Industry standard for ocean restoration." }
              ].map((item, i) => (
                <div key={i} className="relative p-6 border-l-2 border-ocean-green/30 pl-8">
                  <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-ocean-green"></div>
                  <div className="text-sm font-bold text-ocean-green mb-1 all-caps">{item.q}</div>
                  <h4 className="font-bold mb-2 text-dark-forest-green dark:text-white">{item.title}</h4>
                  <p className="text-sm text-warm-gray dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-24 bg-ocean-green/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-dark-forest-green dark:text-white">Our Commitment</h2>
              <p className="text-lg text-warm-gray dark:text-slate-300 mb-12 text-center">
                Aquagrid is more than a business—it's a movement to heal our oceans while creating economic opportunity.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Measurable carbon capture & deacidification",
                  "Restored marine habitats & biodiversity",
                  "Sustainable income for coastal communities",
                  "Open-source data for ocean research",
                  "Ethical & transparent operations",
                  "Continuous innovation in marine tech"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white dark:bg-midnight-navy/50 p-4 rounded-xl border border-ocean-green/10">
                    <div className="w-6 h-6 rounded-full bg-ocean-green/10 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-ocean-green" />
                    </div>
                    <span className="text-sm font-medium text-dark-forest-green dark:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white dark:bg-midnight-navy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-dark-forest-green dark:text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "How does kelp reduce ocean acidity?",
                  a: "Kelp absorbs dissolved CO2 during photosynthesis, which naturally raises the pH level of the surrounding water, making it less acidic."
                },
                {
                  q: "Is the modular system easy to scale?",
                  a: "Yes, our units are designed for rapid deployment. We can scale from a single pilot site to a full-scale farm in just a few months."
                },
                {
                  q: "What happens to the kelp after harvest?",
                  a: "Harvested kelp is processed into sustainable products like organic fertilizer, animal feed, and even bioplastics, creating multiple revenue streams."
                },
                {
                  q: "Does this affect local fishing activities?",
                  a: "We work closely with local communities to ensure our farms are placed in areas that don't interfere with traditional fishing grounds. In fact, our farms often act as nurseries, increasing fish populations in the surrounding area."
                }
              ].map((item, i) => (
                <div key={i} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-light-gray dark:hover:bg-white/5 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-bold text-dark-forest-green dark:text-white">{item.q}</span>
                    <ChevronDown className={`h-5 w-5 text-ocean-green transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 py-4 bg-light-gray/50 dark:bg-white/5 border-t border-slate-200 dark:border-slate-800">
                      <p className="text-warm-gray dark:text-slate-400 leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Newsletter Section */}
        <section className="py-24 bg-ocean-gradient text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to make waves?</h2>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
              Join us in our mission to restore ocean health and build a sustainable future for coastal communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="btn-cta text-lg px-10">Get Involved Now</a>
              <div className="flex bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-none focus:ring-0 px-4 py-2 w-64 placeholder:text-white/50 text-white"
                />
                <button className="bg-white text-dark-forest-green px-6 py-2 rounded-md font-bold hover:bg-ocean-green hover:text-white transition-all">
                  Join Newsletter
                </button>
              </div>
            </div>
          </div>
          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-background opacity-10"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-midnight-navy text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Waves className="h-8 w-8 text-coastal-blue" />
                <div className="flex flex-col leading-none">
                  <span className="text-2xl font-bold tracking-tight">AQUA GRID</span>
                  <span className="text-[10px] font-bold text-coastal-blue all-caps">Green Solutions for Blue Oceans</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Restoring ocean health through innovative, scalable kelp farming technology. 
                Creating ripples of change for a sustainable future.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-coastal-blue transition-colors group">
                  <Twitter className="h-5 w-5 text-slate-400 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-coastal-blue transition-colors group">
                  <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-coastal-blue transition-colors group">
                  <Instagram className="h-5 w-5 text-slate-400 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6 all-caps tracking-wider text-coastal-blue">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#solution" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#impact" className="hover:text-white transition-colors">Impact</a></li>
                <li><a href="#resources" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 all-caps tracking-wider text-coastal-blue">Company</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div id="contact">
              <h4 className="font-bold text-lg mb-6 all-caps tracking-wider text-coastal-blue">Contact Us</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-coastal-blue" />
                  <span>info@aquagrid.org</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-coastal-blue" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-coastal-blue" />
                  <span>San Diego, CA</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-bold all-caps tracking-widest">
            <div>© 2025 Aquagrid. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
