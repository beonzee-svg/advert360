'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { LayoutDashboard, Users, DollarSign, Activity, Wifi, AlertTriangle, Code, CreditCard, LogOut } from 'lucide-react'

const NAV = [
  { href:'/admin',          label:'Overview',     icon:LayoutDashboard },
  { href:'/admin/clients',  label:'All Clients',  icon:Users },
  { href:'/admin/revenue',  label:'Revenue & MRR',icon:DollarSign },
  { href:'/admin/agents',   label:'Agent Health', icon:Activity },
  { href:'/admin/api',      label:'API Status',   icon:Wifi },
  { href:'/admin/churn',    label:'Churn Risk',   icon:AlertTriangle },
  { href:'/admin/devlog',   label:'Dev Log',      icon:Code },
  { href:'/admin/billing',  label:'Billing',      icon:CreditCard },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) { router.push('/login'); return }
      if (data.user.user_metadata?.role !== 'admin') { router.push('/dashboard') }
    })
  }, [router])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <div className="min-h-screen flex">
      <aside className="w-56 bg-[#1B2A4A] flex flex-col">
        <div className="px-5 py-5 border-b border-white/10">
          <div className="text-white font-bold text-lg">ADVERT<span className="text-[#0066CC]">360</span></div>
          <div className="text-[10px] text-[#E87722] font-bold tracking-widest uppercase mt-0.5">Admin Panel</div>
        </div>
        <nav className="flex-1 py-3">
          {NAV.map(item => {
            const Icon = item.icon
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href}
                className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${active ? 'bg-[#0066CC] text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
                <Icon size={14} />{item.label}
              </Link>
            )
          })}
        </nav>
        <button onClick={handleLogout} className="flex items-center gap-2 px-5 py-4 text-white/40 hover:text-white text-sm border-t border-white/10 transition-colors">
          <LogOut size={14} /> Logout
        </button>
      </aside>
      <main className="flex-1 bg-[#F9FAFB] p-6 overflow-auto">{children}</main>
    </div>
  )
}
