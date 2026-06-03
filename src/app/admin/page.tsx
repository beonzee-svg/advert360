'use client'
import { TrendingUp, Users, AlertTriangle, Activity } from 'lucide-react'

const METRICS = [
  { label:'Total MRR',       value:'$4,253',  change:'+34% this month', up:true  },
  { label:'Active Clients',  value:'40',      change:'5 free · 35 paid', up:null },
  { label:'Monthly Churn',   value:'2.1%',    change:'↓ from 3.4%',     up:true  },
  { label:'Avg Blended ROAS',value:'3.7x',    change:'Across all accounts', up:null},
]

const ALERTS = [
  { severity:'warning', client:'Momentum Store',  msg:'ECHO ESP disconnected — client action needed' },
  { severity:'warning', client:'TikTok API',      msg:'Rate limited on 3 accounts — FLUX queued' },
  { severity:'info',    client:'Maple Legal Group',msg:'8 days no login — churn risk flagged' },
]

const CLIENTS = [
  { name:'Momentum Store',    plan:'GROWTH', mrr:'$179', roas:'3.4x', risk:'medium',  status:'Active' },
  { name:'RushFit Apparel',   plan:'SCALE',  mrr:'$349', roas:'4.8x', risk:'low',     status:'Active' },
  { name:'Maple Legal Group', plan:'STARTER',mrr:'$79',  roas:'2.1x', risk:'high',    status:'Active' },
  { name:'Bloom Skincare',    plan:'GROWTH', mrr:'$179', roas:'3.9x', risk:'low',     status:'Active' },
  { name:'NovaBrew Coffee',   plan:'AGENCY', mrr:'$499', roas:'5.1x', risk:'low',     status:'Active' },
]

const riskColor: Record<string,string> = { low:'bg-green-100 text-green-700', medium:'bg-yellow-100 text-yellow-700', high:'bg-red-100 text-red-700' }

export default function AdminOverview() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#1B2A4A]">Platform Overview</h1>
        <span className="text-xs text-[#6B7280]">June 3, 2026</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {METRICS.map(m => (
          <div key={m.label} className="bg-white border border-[#E5E7EB] rounded-xl p-5">
            <div className="text-xs text-[#6B7280] mb-2">{m.label}</div>
            <div className="text-2xl font-semibold text-[#1B2A4A]">{m.value}</div>
            <div className={`text-xs mt-1 ${m.up===true?'text-[#059669]':m.up===false?'text-red-500':'text-[#6B7280]'}`}>{m.change}</div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
        <h2 className="text-sm font-semibold text-[#1B2A4A] mb-4 flex items-center gap-2"><AlertTriangle size={14} className="text-[#E87722]"/>Active Alerts</h2>
        <div className="space-y-2">
          {ALERTS.map((a,i) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm ${a.severity==='warning'?'bg-yellow-50 text-yellow-800':'bg-blue-50 text-blue-800'}`}>
              <span className="font-medium">{a.client}:</span>{a.msg}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[#E5E7EB]">
          <h2 className="text-sm font-semibold text-[#1B2A4A]">All Clients</h2>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
            <tr>{['Business','Plan','MRR','ROAS','Risk','Status'].map(h=><th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#6B7280]">{h}</th>)}</tr>
          </thead>
          <tbody>
            {CLIENTS.map((c,i) => (
              <tr key={c.name} className={`border-b border-[#E5E7EB] last:border-0 ${i%2===0?'bg-white':'bg-[#F9FAFB]'}`}>
                <td className="px-5 py-3 font-medium text-[#1B2A4A]">{c.name}</td>
                <td className="px-5 py-3 text-[#6B7280]">{c.plan}</td>
                <td className="px-5 py-3 text-[#374151]">{c.mrr}</td>
                <td className="px-5 py-3 text-[#374151]">{c.roas}</td>
                <td className="px-5 py-3"><span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${riskColor[c.risk]}`}>{c.risk}</span></td>
                <td className="px-5 py-3"><span className="text-[#059669] text-xs font-medium">{c.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
