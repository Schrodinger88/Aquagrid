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
  Waves,
  Leaf,
  Building2,
  Users,
  Globe,
  TrendingUp,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ═══════════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-forest via-[#023808] to-midnight min-h-[90vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-sky-blue rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-kelp-green rounded-full blur-[180px]" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8">
                <Waves className="w-4 h-4 text-sky-blue" />
                <span className="text-white/80 text-sm font-medium">Green Solutions for Blue Oceans</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.05]">
                Turning the Tide on{" "}
                <span className="text-sky-blue">Ocean Acidification</span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
                Scalable kelp farming solutions that restore marine ecosystems
                while creating sustainable revenue for coastal communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-base px-8 py-4">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/solutions" className="btn-secondary border-white/30 text-white hover:border-sky-blue hover:text-sky-blue text-base px-8 py-4">
                  View Demo
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-10 mt-14 pt-10 border-t border-white/10">
                <div>
                  <div className="text-3xl font-extrabold text-white">1,130<span className="text-sky-blue text-lg">kg</span></div>
                  <div className="text-sm text-white/50 mt-1">CO₂ Removed / Year</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">1,100<span className="text-sky-blue text-lg">kg</span></div>
                  <div className="text-sm text-white/50 mt-1">O₂ Produced / Year</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">150<span className="text-sky-blue text-lg">%</span></div>
                  <div className="text-sm text-white/50 mt-1">Acidity Rise by 2100</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-[420px] h-[420px] rounded-[3rem] bg-gradient-to-br from-sky-blue/20 to-kelp-green/20 backdrop-blur-xl border border-white/10 p-8 flex items-center justify-center">
                  <Image
                    src="/logo-stacked.png"
                    alt="Aqua Grid Logo"
                    width={300}
                    height={300}
                    className="drop-shadow-2xl"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 animate-float">
                  <Leaf className="w-8 h-8 text-kelp-green" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 animate-float" style={{ animationDelay: '2s' }}>
                  <Droplets className="w-8 h-8 text-sky-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. THE CRISIS — Problem Statement
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-blue/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="badge badge-blue mb-6">The Challenge</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Our Oceans Are in Crisis
            </h2>
            <p className="text-lg text-slate max-w-3xl mx-auto leading-relaxed">
              Ocean acidification has increased by{" "}
              <strong className="text-deep-forest">30%</strong> since the
              Industrial Revolution, threatening marine life and the livelihoods
              of millions who depend on healthy fisheries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="h-7 w-7 text-sky-blue" />,
                title: "Ocean Acidification",
                description:
                  "Rising CO₂ levels are making oceans more acidic, dissolving the shells and skeletons of marine organisms. Projections suggest acidity could rise by 150% by the end of the century.",
                color: "bg-light-blue",
              },
              {
                icon: <Fish className="h-7 w-7 text-ocean-blue" />,
                title: "Collapsing Fisheries",
                description:
                  "Canada's multi-million dollar shellfish market is already experiencing declines in catch size and volume due to acidification's devastating effects on shell formation.",
                color: "bg-blue-50",
              },
              {
                icon: <AlertTriangle className="h-7 w-7 text-kelp-green" />,
                title: "Inadequate Solutions",
                description:
                  "Current approaches are too expensive, too slow, or too localized. We need scalable, economically viable solutions that work with nature, not against it.",
                color: "bg-light-green",
              },
            ].map((item, i) => (
              <div key={i} className="card-solid group text-left">
                <div
                  className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-deep-forest">
                  {item.title}
                </h3>
                <p className="text-slate leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. OUR SOLUTION
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-kelp-green/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div>
              <span className="badge badge-green mb-6">Our Solution</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Modular Kelp Farming{" "}
                <span className="text-sky-blue">Reimagined</span>
              </h2>
              <p className="text-lg text-slate mb-10 leading-relaxed">
                Aqua Grid's system combines marine engineering with nature's most
                powerful carbon capture organism — kelp. Our modular design
                integrates directly into existing fisheries without interrupting
                current operations.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Smart & Scalable Design",
                    desc: "Standard 200ft × 10ft setup with modular customization. Adapts to any coastal environment.",
                  },
                  {
                    title: "Self-Sustaining Ecosystem",
                    desc: "Low-maintenance operation with annual kelp cycle. Only requires cutting and reinstalling growth lines.",
                  },
                  {
                    title: "Proven & Resilient",
                    desc: "Built on decades of aquaculture research. Engineered with a siphon pump to increase nutrient availability year-round.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-sky-blue/15 flex items-center justify-center group-hover:bg-sky-blue/25 transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-sky-blue" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-deep-forest text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate leading-relaxed text-[15px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-ocean-blue/5 border border-border">
                <div className="bg-gradient-to-br from-light-blue to-light-green rounded-2xl p-10 flex flex-col items-center justify-center min-h-[400px]">
                  <Image
                    src="/logo-stacked.png"
                    alt="Aqua Grid System"
                    width={200}
                    height={200}
                    className="mb-8"
                  />
                  <p className="text-deep-forest/80 text-center text-lg font-medium italic">
                    "Nature's most powerful carbon capture technology — deployed at scale."
                  </p>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-3 mt-6 justify-center">
                  {["Carbon Capture", "pH Restoration", "Habitat Creation", "Revenue Generation"].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-cream text-sm font-medium text-ocean-blue border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. IMPACT NUMBERS
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="badge badge-blue mb-6">Real Results</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Environmental & Economic Impact
            </h2>
            <p className="text-slate text-lg">Per Aqua Grid unit, annually</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { val: 1130, suffix: "kg", label: "CO₂ Removed", prefix: "" },
              { val: 1100, suffix: "kg", label: "O₂ Produced", prefix: "" },
              { val: 20, suffix: "%", label: "Gross Margin", prefix: "" },
              { val: 3000, suffix: "+", label: "Annual Revenue", prefix: "$" },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="stat-number mb-2 group-hover:text-sky-blue transition-colors duration-500">
                  <CountUpNumber
                    end={item.val}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    duration={2500}
                  />
                </div>
                <div className="text-sm font-bold text-slate uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Financial Summary Card */}
          <div className="bg-gradient-to-br from-deep-forest to-midnight rounded-3xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Investment Overview
                </h3>
                <p className="text-white/60 leading-relaxed">
                  A transparent financial model designed for sustainable returns
                  and measurable environmental impact.
                </p>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-sm text-white/50 uppercase tracking-wider mb-2 font-semibold">
                    Setup Cost
                  </div>
                  <div className="text-3xl font-extrabold text-white">$6,500</div>
                  <div className="text-sm text-white/40 mt-1">per unit</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="text-sm text-white/50 uppercase tracking-wider mb-2 font-semibold">
                    Annual Maintenance
                  </div>
                  <div className="text-3xl font-extrabold text-white">$600</div>
                  <div className="text-sm text-white/40 mt-1">low upkeep</div>
                </div>
                <div className="bg-sky-blue/20 backdrop-blur-md rounded-2xl p-6 border border-sky-blue/30">
                  <div className="text-sm text-sky-blue uppercase tracking-wider mb-2 font-semibold">
                    Payback Period
                  </div>
                  <div className="text-3xl font-extrabold text-white flex items-center gap-2">
                    3 <span className="text-lg font-normal text-white/60">years</span>
                  </div>
                  <div className="text-sm text-sky-blue/60 mt-1">to break-even</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. HOW IT WORKS — Timeline
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="badge badge-green mb-6">Process</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              From Design to Harvest
            </h2>
            <p className="text-slate text-lg">A streamlined deployment process</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-16">
              {[
                {
                  title: "Site Assessment",
                  time: "Phase 1",
                  desc: "Environmental analysis to identify optimal locations and obtain necessary permits. System customized to your coastal conditions.",
                  icon: <Globe className="w-5 h-5 text-sky-blue" />,
                },
                {
                  title: "System Installation",
                  time: "Phase 2",
                  desc: "Rapid deployment of modular units. Metal plate frame with buoys and vertical kelp growth lines. Standard 200ft × 10ft setup.",
                  icon: <Building2 className="w-5 h-5 text-kelp-green" />,
                },
                {
                  title: "Growth & Monitoring",
                  time: "Phase 3",
                  desc: "Kelp grows and absorbs greenhouse gases while producing oxygen. The siphon pump system increases nutrient availability year-round.",
                  icon: <TrendingUp className="w-5 h-5 text-ocean-blue" />,
                },
                {
                  title: "Harvest & Revenue",
                  time: "Phase 4",
                  desc: "Annual harvest with minimal maintenance — simply cut kelp and install new growth lines. Revenue from kelp sales plus increased shellfish yield.",
                  icon: <Clock className="w-5 h-5 text-deep-forest" />,
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                    } group`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-sky-blue z-10 flex items-center justify-center shadow-lg shadow-sky-blue/10 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-20 md:pl-0 flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                  >
                    <span className="inline-block py-1 px-3 rounded-lg bg-white text-ocean-blue text-xs font-bold uppercase tracking-wider border border-border mb-3">
                      {step.time}
                    </span>
                    <h4 className="text-2xl font-bold text-deep-forest mb-3">
                      {step.title}
                    </h4>
                    <p
                      className={`text-slate leading-relaxed ${i % 2 === 0 ? "md:ml-auto" : ""
                        } max-w-md`}
                    >
                      {step.desc}
                    </p>
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. WHO WE SERVE
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="badge badge-blue mb-6">Partnerships</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Who We Serve
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Aqua Grid creates value for diverse stakeholders in the blue economy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Building2 className="w-7 h-7 text-ocean-blue" />,
                title: "Government Agencies",
                desc: "Cost-effective carbon capture and ecosystem restoration with measurable results.",
                color: "bg-blue-50",
              },
              {
                icon: <Fish className="w-7 h-7 text-sky-blue" />,
                title: "Fisheries & Aquaculture",
                desc: "Restore shellfish stocks, improve water quality, and diversify revenue through kelp farming.",
                color: "bg-light-blue",
              },
              {
                icon: <Users className="w-7 h-7 text-kelp-green" />,
                title: "Coastal Communities",
                desc: "Climate resilience, job creation, and marine habitat restoration for a sustainable future.",
                color: "bg-light-green",
              },
              {
                icon: <Globe className="w-7 h-7 text-deep-forest" />,
                title: "Environmental Orgs",
                desc: "High-impact ocean health projects with long-term sustainability and proven outcomes.",
                color: "bg-green-50",
              },
            ].map((item, i) => (
              <div key={i} className="card-solid group text-center p-8">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-deep-forest mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. MARKET OPPORTUNITY
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge badge-green mb-6">Market Opportunity</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                A <span className="text-sky-blue">$26.6B</span> Market by 2032
              </h2>
              <p className="text-lg text-slate mb-8 leading-relaxed">
                The global seaweed market is projected to grow at{" "}
                <strong className="text-deep-forest">12.36% CAGR</strong> from
                $10.47B in 2024 to $26.61B by 2032. The North American seaweed
                by-product market alone is expected to reach $1.05B.
              </p>
              <div className="space-y-4">
                {[
                  "Growing demand for sustainable food & bioplastics",
                  "Seaweed cosmetics market growing 5.2% CAGR to $3.4B by 2033",
                  "Kelp-based biofuel production gaining traction globally",
                  "Ecosystem services globally valued at ~$500B annually",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-sky-blue shrink-0 mt-0.5" />
                    <span className="text-slate">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kelp Applications */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold text-deep-forest mb-8">
                Kelp Applications & Markets
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Agricultural Fertilizer", desc: "Organic, nutrient-rich soil conditioner" },
                  { name: "Animal Feed", desc: "Livestock & aquaculture feed supplements" },
                  { name: "Bioplastics & Biofuel", desc: "Sustainable industrial feedstock" },
                  { name: "Food Products", desc: "Growing market for human consumption" },
                  { name: "Cosmetics & Pharma", desc: "Anti-aging, hydrating, bioactive compounds" },
                ].map((app, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-cream transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-light-green flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Leaf className="w-5 h-5 text-kelp-green" />
                    </div>
                    <div>
                      <div className="font-bold text-deep-forest text-[15px]">{app.name}</div>
                      <div className="text-sm text-slate">{app.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. CTA — Contact / Investor
      ═══════════════════════════════════════════ */}
      <section className="section-padding bg-gradient-to-br from-deep-forest via-[#023808] to-midnight text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-sky-blue rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
            <Waves className="w-4 h-4 text-sky-blue" />
            <span className="text-white/70 text-sm font-medium">Join the Movement</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
            Ready to Make <span className="text-sky-blue">Waves</span>?
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're an investor, government partner, or fishery operator
            — there's a place for you in the Aqua Grid ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-10 py-4 shadow-xl shadow-sky-blue/20">
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/impact" className="btn-secondary text-white border-white/30 hover:text-sky-blue hover:border-sky-blue text-base px-10 py-4">
              View Our Impact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
