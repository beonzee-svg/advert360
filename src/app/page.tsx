import Link from "next/link"
import { AGENTS, PLANS } from "@/lib/utils"

const COMPETITORS = [
  { name: "ADVERT360",         price: "From $179/mo",   channels: "9 channels + GEO/AEO",     highlight: true  },
  { name: "GoMega MEGA",       price: "$699–$2,099/mo", channels: "SEO + Ads only (2 agents)", highlight: false },
  { name: "HubSpot Breeze AI", price: "$800+/mo",       channels: "Email + CRM only",          highlight: false },
  { name: "Optmyzr / Adalysis",price: "$99–$208/mo",    channels: "1 paid channel",            highlight: false },
  { name: "Traditional Agency",price: "$8K–$15K/mo",    channels: "All channels, human-run",   highlight: false },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-[#1B2A4A] font-bold text-xl tracking-tight">
            ADVERT<span className="text-[#0066CC]">360</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#6B7280]">
            <a href="#features" className="hover:text-[#1B2A4A] transition-colors">Features</a>
            <a href="#pricing" className="hover:text-[#1B2A4A] transition-colors">Pricing</a>
            <a href="#compare" className="hover:text-[#1B2A4A] transition-colors">Compare</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-[#374151] hover:text-[#1B2A4A] transition-colors">Log in</Link>
            <Link href="/register" className="text-sm bg-[#1B2A4A] text-white px-4 py-2 rounded-lg hover:bg-[#0066CC] transition-colors">
              Start free trial
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 bg-[#F9FAFB] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block text-xs font-semibold bg-[#EFF6FF] text-[#0066CC] px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
            Launch pricing — grandfathered for life
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold text-[#1B2A4A] leading-tight tracking-tight mb-6">
            Replace your $562K marketing team with 9 AI agents
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto mb-10 leading-relaxed">
            SEO · Google Ads · Meta · TikTok · Email · SMS · Creative · GEO/AEO — fully autonomous, from{" "}
            <strong className="text-[#1B2A4A]">$179/month</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link href="/register" className="bg-[#0066CC] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#0052a3] transition-colors text-sm">
              Start 14-day free trial — no card needed
            </Link>
            <button className="border border-[#E5E7EB] text-[#374151] px-8 py-3.5 rounded-lg font-medium hover:border-[#1B2A4A] transition-colors text-sm">
              Watch 3-min demo
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#9CA3AF]">
            <span>✓ Onboard in 30 minutes</span>
            <span>✓ 9 AI agents live in 24 hours</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <div className="border-y border-[#E5E7EB] py-5 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-10 items-center">
          <span className="text-xs text-[#9CA3AF] uppercase tracking-widest font-medium">Trusted by 500+ growing businesses</span>
          {["Momentum", "RushFit", "Bloom", "NovaBrew", "Maple Legal", "Frontier"].map(b => (
            <span key={b} className="text-sm font-semibold text-[#D1D5DB]">{b}</span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold text-[#0066CC] tracking-widest uppercase mb-3">How it works</p>
          <h2 className="text-3xl font-semibold text-[#1B2A4A]">From zero to fully autonomous marketing in under an hour</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { step:"01", title:"Connect your accounts", desc:"Link Google Ads, Meta, Search Console, and your email platform. Secure OAuth — we never store passwords." },
            { step:"02", title:"Set your budget",       desc:"Tell us your monthly ad spend. APEX distributes it intelligently across the highest-performing channels." },
            { step:"03", title:"AI does everything",    desc:"9 agents launch, optimize, and scale your campaigns 24/7. Weekly reports and real-time alerts." },
          ].map(s => (
            <div key={s.step} className="text-center">
              <div className="text-xs font-bold text-[#0066CC] tracking-widest mb-4">{s.step}</div>
              <h3 className="text-lg font-semibold text-[#1B2A4A] mb-3">{s.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 AGENTS */}
      <section id="features" className="py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-[#0066CC] tracking-widest uppercase mb-3">The platform</p>
            <h2 className="text-3xl font-semibold text-[#1B2A4A]">9 agents. Every channel.</h2>
            <p className="text-[#6B7280] mt-3 max-w-lg mx-auto text-sm">Each agent owns a channel end-to-end. APEX coordinates everything.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {AGENTS.map(a => (
              <div key={a.id} className="bg-white border border-[#E5E7EB] rounded-xl p-5 hover:border-[#0066CC] hover:shadow-md transition-all">
                <div className="font-bold text-[#1B2A4A] text-sm mb-0.5">{a.name}</div>
                <div className="text-[10px] text-[#0066CC] font-semibold uppercase tracking-wide mb-2">{a.channel}</div>
                <p className="text-[#6B7280] text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="compare" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#0066CC] tracking-widest uppercase mb-3">Compare</p>
            <h2 className="text-3xl font-semibold text-[#1B2A4A]">ADVERT360 vs. the alternatives</h2>
          </div>
          <div className="border border-[#E5E7EB] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="text-left px-6 py-4 text-[#374151] font-semibold">Platform</th>
                  <th className="text-left px-6 py-4 text-[#374151] font-semibold">Price</th>
                  <th className="text-left px-6 py-4 text-[#374151] font-semibold">Coverage</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((c, i) => (
                  <tr key={c.name} className={`border-b border-[#E5E7EB] last:border-0 ${c.highlight ? "bg-[#EFF6FF]" : i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}`}>
                    <td className={`px-6 py-4 ${c.highlight ? "font-bold text-[#1B2A4A]" : "text-[#374151]"}`}>{c.name}</td>
                    <td className={`px-6 py-4 ${c.highlight ? "font-bold text-[#059669]" : "text-[#6B7280]"}`}>{c.price}</td>
                    <td className={`px-6 py-4 ${c.highlight ? "text-[#1B2A4A]" : "text-[#6B7280]"}`}>{c.channels}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROAS GUARANTEE */}
      <div className="bg-[#E87722] py-5 px-6">
        <p className="text-white text-center text-sm font-medium">
          GROWTH and SCALE plans include a 20% ROAS improvement guarantee in 90 days — or your next month is free.
        </p>
      </div>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[#0066CC] tracking-widest uppercase mb-3">Pricing</p>
            <h2 className="text-3xl font-semibold text-[#1B2A4A]">Simple, flat pricing</h2>
            <p className="text-[#6B7280] mt-2 text-sm">No usage caps. No overages. Launch pricing locked in for life.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(PLANS).map(([key, plan]) => {
              const isScale = key === "scale"
              return (
                <div key={key} className={`bg-white rounded-xl p-7 border-2 relative ${isScale ? "border-[#1B2A4A] shadow-lg" : "border-[#E5E7EB]"}`}>
                  {isScale && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E87722] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className="text-xs font-bold text-[#6B7280] tracking-widest uppercase mb-2">{plan.name}</div>
                  <div className="text-4xl font-semibold text-[#1B2A4A] mb-1">
                    ${plan.price}<span className="text-base text-[#6B7280] font-normal">/mo</span>
                  </div>
                  <div className="text-xs text-[#6B7280] mb-5">Annual: ${plan.annualPrice}/yr · Setup ${plan.setup}</div>
                  <div className="text-xs text-[#374151] mb-5 space-y-2">
                    <div>📊 Ad budget: {plan.budget}</div>
                    <div>🤖 {plan.agents} AI agents active</div>
                  </div>
                  <Link href="/register" className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-colors ${isScale ? "bg-[#1B2A4A] text-white hover:bg-[#0066CC]" : "border border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white"}`}>
                    Start 14-day free trial
                  </Link>
                </div>
              )
            })}
          </div>
          <p className="text-center text-xs text-[#9CA3AF] mt-6">
            AGENCY plan at $499/mo — white-label, unlimited clients. <a href="#" className="text-[#0066CC] hover:underline">Contact us</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E5E7EB] py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[#1B2A4A] font-bold text-lg">ADVERT<span className="text-[#0066CC]">360</span></span>
          <div className="flex gap-6 text-xs text-[#9CA3AF]">
            <a href="#" className="hover:text-[#374151]">Privacy Policy</a>
            <a href="#" className="hover:text-[#374151]">Terms of Service</a>
            <a href="#" className="hover:text-[#374151]">Contact</a>
            <Link href="/login" className="hover:text-[#374151]">Log in</Link>
          </div>
          <p className="text-xs text-[#9CA3AF]">© 2026 ADVERT360. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
