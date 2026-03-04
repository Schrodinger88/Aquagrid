"use client";

import Image from "next/image";
import Link from "next/link";
import CountUpNumber from "@/components/CountUpNumber";
import {
  ArrowRight,
  Droplets,
  Fish,
  AlertTriangle,
  CheckCircle2,
  Leaf,
  Building2,
  Users,
  Globe,
  TrendingUp,
  Clock,
  ChevronRight,
  Waves
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ═══════ 1. HERO ═══════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-forest via-[#023808] to-midnight py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-sky-blue rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-kelp-green rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8 backdrop-blur-sm">
                <Waves className="w-4 h-4 text-sky-blue" />
                <span className="text-white/90 text-sm font-semibold tracking-wider uppercase">Green Solutions for Blue Oceans</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tight text-white">
                Turning the Tide on <span className="text-sky-blue">Ocean Acidification</span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
                Scalable kelp farming solutions that actively restore marine ecosystems while creating sustainable revenue for coastal communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-base px-8 py-4">
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/solutions" className="btn-secondary text-base px-8 py-4 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                  View Technology
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white"><CountUpNumber end={1130} /><span className="text-sky-blue text-base ml-1">kg</span></div>
                  <div className="text-sm text-white/50 mt-1 uppercase tracking-wider font-semibold">CO₂ Removed / Yr</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white"><CountUpNumber end={1100} /><span className="text-sky-blue text-base ml-1">kg</span></div>
                  <div className="text-sm text-white/50 mt-1 uppercase tracking-wider font-semibold">O₂ Produced / Yr</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white"><CountUpNumber end={3} /><span className="text-sky-blue text-base ml-1">yr</span></div>
                  <div className="text-sm text-white/50 mt-1 uppercase tracking-wider font-semibold">Payback Period</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:flex justify-end">
              <div className="relative">
                <div className="w-[440px] h-[440px] rounded-[3rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-10 flex items-center justify-center backdrop-blur-md shadow-2xl">
                  <Image
                    src="/logo-stacked-white.png"
                    alt="Aqua Grid System"
                    width={280}
                    height={280}
                    className="drop-shadow-2xl"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-white/10 rounded-2xl p-4 border border-white/20 backdrop-blur-md shadow-xl animate-float">
                  <Leaf className="w-8 h-8 text-kelp-green" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white/10 rounded-2xl p-4 border border-white/20 backdrop-blur-md shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                  <Droplets className="w-8 h-8 text-sky-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 2. THE CRISIS ═══════ */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="badge badge-blue mb-6">The Challenge</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-forest">
              Our Oceans Are in Crisis
            </h2>
            <p className="text-lg text-slate max-w-3xl mx-auto leading-relaxed">
              Ocean acidification has increased by <strong className="text-ocean-blue">30%</strong> since the Industrial Revolution, threatening marine life and the livelihoods of millions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="h-7 w-7 text-sky-blue" />,
                title: "Ocean Acidification",
                description: "Rising CO₂ levels dissolve the shells of marine organisms. Acidity is projected to rise by 150% by the end of the century.",
                color: "bg-light-blue",
              },
              {
                icon: <Fish className="h-7 w-7 text-ocean-blue" />,
                title: "Collapsing Fisheries",
                description: "Canada's multi-million dollar shellfish market faces severe threats from declining catch size and volume.",
                color: "bg-blue-50",
              },
              {
                icon: <AlertTriangle className="h-7 w-7 text-kelp-green" />,
                title: "Inadequate Solutions",
                description: "Current approaches are too expensive or too localized. We need scalable solutions that actively restore ocean chemistry.",
                color: "bg-light-green",
              },
            ].map((item, i) => (
              <div key={i} className="card-solid p-8 group">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-deep-forest">{item.title}</h3>
                <p className="text-slate leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 3. OUR SOLUTION ═══════ */}
      <section className="section-padding bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="badge badge-green mb-6">Our Solution</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-deep-forest">
                Modular Kelp Farming <span className="text-kelp-green">Reimagined</span>
              </h2>
              <p className="text-lg text-slate mb-10 leading-relaxed">
                By combining advanced marine engineering with kelp — nature's most powerful carbon capture organism — we deploy systems that integrate seamlessly into existing fisheries.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Standard 200ft × 10ft Units", desc: "Modular plate frame held by buoys with vertical kelp growth lines." },
                  { title: "Siphon Pump Innovation", desc: "Increases nutrient availability for kelp year-round, boosting growth and CO₂ capture." },
                  { title: "Farmer-First Design", desc: "No specialized training required; easy annual harvest." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-light-green flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="h-4 w-4 text-kelp-green" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-deep-forest text-lg mb-1">{item.title}</h4>
                      <p className="text-slate leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/solutions" className="btn-secondary">Explore the Technology</Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-light-blue to-light-green rounded-[2.5rem] p-12 flex flex-col items-center justify-center min-h-[500px] border border-border shadow-inner">
                <Image src="/logo-stacked.png" alt="Aqua Grid System" width={200} height={200} className="mb-8" />
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl w-full max-w-sm text-center border border-white">
                  <div className="text-sm font-bold text-ocean-blue uppercase tracking-wider mb-2">Designed for Scale</div>
                  <div className="text-3xl font-bold text-deep-forest">200ft × 10ft</div>
                  <div className="text-slate mt-1">Standard System Dimensions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 4. IMPACT NUMBERS ═══════ */}
      <section className="section-padding bg-cream border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-blue mb-6">Financial Model</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-deep-forest">
              Built for Sustainable Returns
            </h2>
            <p className="text-slate text-lg">Transparent economics. Real impact. Per unit annually.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { val: 6500, suffix: "", label: "Setup Cost", prefix: "$" },
              { val: 600, suffix: "", label: "Annual Maintenance", prefix: "$" },
              { val: 3000, suffix: "+", label: "Annual Revenue", prefix: "$" },
              { val: 20, suffix: "%", label: "System Gross Margin", prefix: "" },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-white border border-border shadow-sm group hover:border-sky-blue hover:shadow-xl transition-all duration-300">
                <div className="stat-number mb-2 text-ocean-blue">
                  <CountUpNumber end={item.val} prefix={item.prefix} suffix={item.suffix} />
                </div>
                <div className="text-xs font-bold text-slate uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-deep-forest to-midnight rounded-3xl p-10 md:p-14 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Market Opportunity</h3>
                <p className="text-white/70 leading-relaxed mb-6 text-lg">
                  The global seaweed market is accelerating rapidly, projected to grow at a <span className="text-white font-bold">12.36% CAGR</span> to reach <span className="text-sky-blue font-bold">$26.6B by 2032</span>.
                </p>
                <ul className="space-y-4">
                  {[
                    "Kelp sales for fertilizer, bioplastics, and cosmetics",
                    "Increased shellfish farm yields",
                    "Global ecosystem services valued at $500B annually"
                  ].map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-sky-blue/20 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-blue" />
                      </div>
                      <span className="text-white/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl font-bold text-white mb-2"><CountUpNumber end={10.47} decimals={2} prefix="$" suffix="B" /></div>
                  <div className="text-sm text-sky-blue font-bold tracking-wider uppercase">Market 2024</div>
                </div>
                <div className="bg-sky-blue/20 backdrop-blur-md rounded-2xl p-6 border border-sky-blue/30">
                  <div className="text-4xl font-bold text-white mb-2"><CountUpNumber end={26.61} decimals={2} prefix="$" suffix="B" /></div>
                  <div className="text-sm text-white font-bold tracking-wider uppercase">Market 2032</div>
                </div>
                <div className="col-span-2 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/5 flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1"><CountUpNumber end={3.4} decimals={1} prefix="$" suffix="B" /></div>
                    <div className="text-sm text-white/50 uppercase tracking-wider font-semibold">Seaweed Cosmetics by 2033</div>
                  </div>
                  <TrendingUp className="w-10 h-10 text-kelp-green opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 5. HOW IT WORKS ═══════ */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="badge badge-green mb-6">Process</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-deep-forest">How It Works</h2>
            <p className="text-slate text-lg">From design to recurring harvest</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { num: "01", title: "Site Assessment", desc: "We identify optimal locations, secure permits, and customize the system specifically for your coastal conditions.", icon: <Globe className="w-6 h-6 text-ocean-blue" /> },
              { num: "02", title: "System Installation", desc: "Rapid deployment of modular units with minimal disruption to existing marine activities or fisheries.", icon: <Building2 className="w-6 h-6 text-kelp-green" /> },
              { num: "03", title: "Growth & Monitoring", desc: "Vertical kelp lines grow continuously, absorbing CO₂ and producing O₂. Our siphon pump ensures year-round nutrients.", icon: <TrendingUp className="w-6 h-6 text-sky-blue" /> },
              { num: "04", title: "Harvest & Revenue", desc: "Annual harvest requires minimal manpower. Revenue flows from kelp sales while improving local shellfish yields.", icon: <Clock className="w-6 h-6 text-deep-forest" /> },
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-cream border border-border flex items-center justify-center shadow-sm">
                    {step.icon}
                  </div>
                  <div className="h-full w-px bg-border my-4 hidden md:block"></div>
                </div>
                <div>
                  <div className="text-sm font-bold text-sky-blue mb-1 uppercase tracking-wider">Phase {step.num}</div>
                  <h4 className="text-2xl font-bold text-deep-forest mb-3">{step.title}</h4>
                  <p className="text-slate leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 6. WHO WE SERVE ═══════ */}
      <section className="section-padding bg-cream border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-teal mb-6">Ecosystem</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-deep-forest">Our Partners</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Building2 className="w-6 h-6" />, title: "Government Agencies", desc: "Cost-effective carbon capture with measurable results." },
              { icon: <Fish className="w-6 h-6" />, title: "Fisheries", desc: "Restore shell growth and diversify revenue with kelp farming." },
              { icon: <Users className="w-6 h-6" />, title: "Coastal Communities", desc: "Build climate resilience and create sustainable jobs." },
              { icon: <Leaf className="w-6 h-6" />, title: "Environmental Orgs", desc: "High-impact projects with proven, long-term sustainability." },
            ].map((item, i) => (
              <div key={i} className="card-solid text-center p-8 group">
                <div className="w-16 h-16 rounded-2xl bg-light-blue text-ocean-blue flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-teal group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-deep-forest mb-3">{item.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 7. CTA ═══════ */}
      <section className="section-padding bg-deep-forest text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[50%] -right-[10%] w-[1000px] h-[1000px] rounded-full border-[100px] border-kelp-green/20" />
          <div className="absolute -bottom-[50%] -left-[10%] w-[800px] h-[800px] rounded-full border-[80px] border-ocean-blue/20" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to <span className="text-sky-blue">Make Waves</span>?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the movement. We empower coastal communities through environmental restoration and economic opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-10 py-4 shadow-xl shadow-sky-blue/20">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/impact" className="btn-secondary border-white/20 text-white hover:bg-white/10 hover:border-white/40 text-base px-10 py-4">
              Review Feasibility Study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
