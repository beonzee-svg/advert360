'use client'
import { useState } from 'react'
import { TrendingUp, TrendingDown, Users, DollarSign, BarChart2, Zap, AlertTriangle, CheckCircle } from 'lucide-react'
import { AGENTS } from '@/lib/utils'

const METRICS = [
  { label: 'Blended ROAS',        value: '3.4x',   change: '+22%', up: true,  icon: TrendingUp },
  { label: 'Attributed Revenue',  value: '$27.8K',  change: '+$5.1K', up: true, icon: DollarSign },
  { label: 'Ad Spend',            value: '$8.2K',   change: 'of $10K budget', up: null, icon: BarChart2 },
  { label: 'Organic Traffic',     value: '4,210',   change: '↑ 3.1x since Month 1', up: true, icon: Users },
]

const AGENT_STATUS = [
  { id: 'nova',   status: 'active',  stat1: '12 articles published', stat2: '3 keywords in top 5' },
  { id: 'pulse',  status: 'active',  stat1: 'ROAS 4.1x (Search)',    stat2: 'CPA down 18%' },
  { id: 'spark',  status: 'active',  stat1: 'ROAS 2.8x (Meta)',      stat2: '3 creatives live' },
  { id: 'echo',   status: 'warning', stat1: 'Open rate 38%',         stat2: 'ESP reconnect needed' },
  { id: 'canvas', status: 'pending', stat1: 'Brand assets queued',   stat2: 'After niche confirmed' },
]

const ACTIVITY = [
  { agent: 'NOVA',  action: 'Site audit completed — 38/100 score, 6 critical issues identified', time: 'Today 10:24 AM' },
  { agent: 'APEX',  action: 'Budget reallocation: +$400 to PULSE Shopping — ROAS up 18%',        time: 'Today 9:15 AM' },
  { agent: 'SPARK', action: 'Creative refresh — 8 new image variants generated and deployed',    time: 'Yesterday 4:30 PM' },
  { agent: 'PULSE', action: '14 negative keywords added after search term audit',                 time: 'Yesterday 2:10 PM' },
]

export default function DashboardHome() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-[#1B2A4A]">Dashboard</h1>
          <p className="text-sm text-[#6B7280] mt-0.5">APEX last updated your strategy 2 hours ago</p>
        </div>
        <div className="flex items-center gap-2 bg-[#FEF3C7] text-[#92400E] text-xs font-medium px-3 py-1.5 rounded-full">
          <AlertTriangle size={12} />
          3 actions needed
        </div>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {METRICS.map(m => {
          const Icon = m.icon
          return (
            <div key={m.label} className="bg-white border border-[#E5E7EB] rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#6B7280] font-medium">{m.label}</span>
                <Icon size={14} className="text-[#9CA3AF]" />
              </div>
              <div className="text-2xl font-semibold text-[#1B2A4A]">{m.value}</div>
              <div className={`text-xs mt-1 ${m.up === true ? 'text-[#059669]' : m.up === false ? 'text-red-500' : 'text-[#6B7280]'}`}>
                {m.change}
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* AGENT STATUS */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[#1B2A4A] mb-4">Active Agents</h2>
          <div className="space-y-3">
            {AGENT_STATUS.map(a => {
              const agent = AGENTS.find(ag => ag.id === a.id)
              return (
                <div key={a.id} className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                      a.status === 'active' ? 'bg-[#059669]' : a.status === 'warning' ? 'bg-[#E87722]' : 'bg-[#9CA3AF]'
                    }`} />
                    <div>
                      <div className="text-sm font-medium text-[#1B2A4A]">{agent?.name}</div>
                      <div className="text-xs text-[#6B7280]">{a.stat1}</div>
                    </div>
                  </div>
                  <div className="text-xs text-[#9CA3AF]">{a.stat2}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* APEX ACTIVITY */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
          <h2 className="text-sm font-semibold text-[#1B2A4A] mb-4">APEX Activity</h2>
          <div className="space-y-4">
            {ACTIVITY.map((a, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap size={10} className="text-[#0066CC]" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#0066CC]">{a.agent} </span>
                  <span className="text-xs text-[#374151]">{a.action}</span>
                  <div className="text-[10px] text-[#9CA3AF] mt-0.5">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRIORITY ACTIONS */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
        <h2 className="text-sm font-semibold text-[#1B2A4A] mb-4">APEX Priority Actions</h2>
        <div className="space-y-2">
          {[
            { text: 'Connect a custom domain — SEO and ads are blocked until done', urgent: true },
            { text: 'Fix social media links — all currently pointing to Wix default accounts', urgent: true },
            { text: 'Define niche — fashion-only vs lifestyle affects ad targeting', urgent: true },
            { text: 'Expand catalog to 50+ products before paid ads launch', urgent: false },
            { text: 'Connect email platform (Klaviyo/Mailchimp) for ECHO to activate', urgent: false },
          ].map((a, i) => (
            <div key={i} className="flex items-start gap-3 py-2 border-b border-[#F3F4F6] last:border-0">
              <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${a.urgent ? 'bg-red-400' : 'bg-[#E87722]'}`} />
              <span className="text-sm text-[#374151]">{a.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
