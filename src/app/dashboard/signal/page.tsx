'use client'
import { useState } from 'react'
import { Send, Bot } from 'lucide-react'

const SUGGESTIONS = ['Why did my ROAS drop?','How is my SEO performing?','What did APEX do this week?','Increase my Meta budget']
const INITIAL = [
  { role:'ai',   text:'Welcome to SIGNAL. Ask me anything about your campaigns, ROAS, SEO, or agent activity.' },
  { role:'user', text:'Why did ROAS drop on Thursday?' },
  { role:'ai',   text:'PULSE detected a broad match keyword triggering irrelevant searches. 14 negatives added, term paused. ROAS recovered to 3.9x by Friday PM. No action needed.' },
]

export default function SignalPage() {
  const [messages, setMessages] = useState(INITIAL)
  const [input, setInput] = useState('')
  function send(text: string) {
    if (!text.trim()) return
    setMessages(m => [...m, { role:'user', text }, { role:'ai', text:'APEX is analysing your account data. This will use live data once accounts are connected.' }])
    setInput('')
  }
  return (
    <div className="max-w-2xl mx-auto h-[calc(100vh-160px)] flex flex-col">
      <div className="mb-4"><h1 className="text-xl font-semibold text-[#1B2A4A]">SIGNAL</h1><p className="text-sm text-[#6B7280]">24/7 AI chat — powered by real account data</p></div>
      <div className="flex-1 bg-white border border-[#E5E7EB] rounded-xl overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m,i) => (
            <div key={i} className={`flex gap-3 ${m.role==='user'?'justify-end':''}`}>
              {m.role==='ai' && <div className="w-7 h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0"><Bot size={14} className="text-[#0066CC]"/></div>}
              <div className={`max-w-[80%] text-sm px-4 py-2.5 rounded-xl ${m.role==='ai'?'bg-[#F9FAFB] border border-[#E5E7EB] text-[#374151]':'bg-[#1B2A4A] text-white'}`}>{m.text}</div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-[#E5E7EB]">
          <div className="flex flex-wrap gap-2 mb-3">
            {SUGGESTIONS.map(s => <button key={s} onClick={()=>send(s)} className="text-xs bg-[#F3F4F6] text-[#374151] px-3 py-1.5 rounded-full hover:bg-[#EFF6FF] hover:text-[#0066CC] transition-colors">{s}</button>)}
          </div>
          <div className="flex gap-2">
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send(input)} placeholder="Ask about your campaigns..." className="flex-1 border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0066CC]"/>
            <button onClick={()=>send(input)} className="bg-[#1B2A4A] text-white px-4 py-2 rounded-lg hover:bg-[#0066CC] transition-colors"><Send size={14}/></button>
          </div>
        </div>
      </div>
    </div>
  )
}
