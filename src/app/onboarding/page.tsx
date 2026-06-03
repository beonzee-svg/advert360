'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle } from 'lucide-react'

const STEPS = ['Business Profile','Connect Accounts','Set Budget','Operating Mode','Go Live']

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [data, setData] = useState({ industry:'', goal:'', budget:'', mode:'autopilot' })

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-4 py-12">
      <div className="text-[#1B2A4A] font-bold text-2xl tracking-tight mb-8">ADVERT<span className="text-[#0066CC]">360</span></div>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-10">
        {STEPS.map((s,i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i<step?'bg-[#059669] text-white':i===step?'bg-[#1B2A4A] text-white':'bg-[#E5E7EB] text-[#9CA3AF]'}`}>
              {i<step?<CheckCircle size={14}/>:i+1}
            </div>
            {i<STEPS.length-1&&<div className={`w-8 h-0.5 ${i<step?'bg-[#059669]':'bg-[#E5E7EB]'}`}/>}
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 w-full max-w-lg shadow-sm">
        {step===0&&(
          <div>
            <h2 className="text-lg font-semibold text-[#1B2A4A] mb-1">Business Profile</h2>
            <p className="text-sm text-[#6B7280] mb-6">Tell us about your business so APEX can build the right strategy.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Industry</label>
                <select value={data.industry} onChange={e=>setData({...data,industry:e.target.value})} className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0066CC]">
                  <option value="">Select industry</option>
                  {['E-commerce','Local Services','SaaS / Software','Healthcare','Legal','Real Estate','Restaurant / Food','Other'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Primary goal</label>
                <select value={data.goal} onChange={e=>setData({...data,goal:e.target.value})} className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0066CC]">
                  <option value="">Select goal</option>
                  {['Increase online sales','Generate leads','Drive foot traffic','Grow brand awareness'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Monthly ad budget</label>
                <select value={data.budget} onChange={e=>setData({...data,budget:e.target.value})} className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0066CC]">
                  <option value="">Select budget</option>
                  {['Under $1K','$1K–$5K','$5K–$15K','$15K–$50K','$50K+'].map(o=><option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
          </div>
        )}

        {step===1&&(
          <div>
            <h2 className="text-lg font-semibold text-[#1B2A4A] mb-1">Connect Your Accounts</h2>
            <p className="text-sm text-[#6B7280] mb-6">Connect via OAuth — we never store your passwords.</p>
            <div className="space-y-3">
              {[['Google Ads','Connect'],['Google Search Console','Connect'],['Meta Business Manager','Connect'],['Google Analytics 4','Connect'],['Email Platform','Connect']].map(([name,_])=>(
                <div key={name} className="flex items-center justify-between border border-[#E5E7EB] rounded-lg px-4 py-3">
                  <span className="text-sm text-[#374151]">{name}</span>
                  <button className="text-xs text-[#0066CC] font-medium border border-[#0066CC] px-3 py-1 rounded-md hover:bg-[#EFF6FF] transition-colors">Connect</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {step===2&&(
          <div>
            <h2 className="text-lg font-semibold text-[#1B2A4A] mb-1">Set Your Budget</h2>
            <p className="text-sm text-[#6B7280] mb-6">APEX will auto-allocate across channels. You can adjust anytime.</p>
            <div className="space-y-3">
              {[['Google Ads (PULSE)','30%'],['Meta Ads (SPARK)','25%'],['Google Shopping (PULSE)','20%'],['Email & SMS (ECHO+HALO)','10%'],['TikTok (FLUX)','10%'],['SEO Content (NOVA)','5%']].map(([ch,pct])=>(
                <div key={ch} className="flex items-center justify-between">
                  <span className="text-sm text-[#374151]">{ch}</span>
                  <div className="flex items-center gap-3 w-40">
                    <div className="flex-1 h-1.5 bg-[#E5E7EB] rounded-full"><div className="h-full bg-[#0066CC] rounded-full" style={{width:pct}}/></div>
                    <span className="text-xs text-[#6B7280] w-8 text-right">{pct}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step===3&&(
          <div>
            <h2 className="text-lg font-semibold text-[#1B2A4A] mb-1">Operating Mode</h2>
            <p className="text-sm text-[#6B7280] mb-6">How should APEX operate your campaigns?</p>
            <div className="space-y-3">
              {[
                { val:'autopilot', title:'Full Autopilot (Recommended)', desc:'AI executes everything. You get weekly reports and alerts. No approvals needed.' },
                { val:'review',    title:'Review Mode',                  desc:'AI drafts campaigns and content. You approve before anything goes live.' },
              ].map(opt=>(
                <div key={opt.val} onClick={()=>setData({...data,mode:opt.val})} className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${data.mode===opt.val?'border-[#0066CC] bg-[#EFF6FF]':'border-[#E5E7EB] hover:border-[#9CA3AF]'}`}>
                  <div className="font-medium text-sm text-[#1B2A4A] mb-1">{opt.title}</div>
                  <div className="text-xs text-[#6B7280]">{opt.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step===4&&(
          <div className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-lg font-semibold text-[#1B2A4A] mb-2">Your AI team is setting up</h2>
            <p className="text-sm text-[#6B7280] mb-6">APEX is building your first strategy. Agents will be live within 24 hours.</p>
            <div className="space-y-2 text-left mb-6">
              {['NOVA is auditing your website','APEX is allocating your budget','PULSE is analysing your ad history','Your first report arrives in 30 days'].map(item=>(
                <div key={item} className="flex items-center gap-2 text-sm text-[#374151]"><CheckCircle size={14} className="text-[#059669]"/>{item}</div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-8">
          {step>0&&step<4&&<button onClick={()=>setStep(s=>s-1)} className="flex-1 border border-[#E5E7EB] text-[#374151] py-2.5 rounded-lg text-sm font-medium hover:border-[#1B2A4A] transition-colors">Back</button>}
          {step<4
            ?<button onClick={()=>setStep(s=>s+1)} className="flex-1 bg-[#1B2A4A] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#0066CC] transition-colors">{step===3?'Launch AI':'Continue'}</button>
            :<button onClick={()=>router.push('/dashboard')} className="flex-1 bg-[#0066CC] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#0052a3] transition-colors">Go to my dashboard →</button>
          }
        </div>
      </div>
    </div>
  )
}
