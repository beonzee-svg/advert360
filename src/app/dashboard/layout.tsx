'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { LayoutDashboard, TrendingUp, Search, Mail, BarChart2, MessageSquare, DollarSign, Settings, LogOut, X } from 'lucide-react'

const NAV = [
  { href: '/dashboard',           label: 'Overview',     icon: LayoutDashboard },
  { href: '/dashboard/campaigns', label: 'Campaigns',    icon: TrendingUp },
  { href: '/dashboard/seo',       label: 'NOVA (SEO)',   icon: Search },
  { href: '/dashboard/email',     label: 'ECHO (Email)', icon: Mail },
  { href: '/dashboard/reports',   label: 'Reports',      icon: BarChart2 },
  { href: '/dashboard/signal',    label: 'SIGNAL',       icon: MessageSquare },
  { href: '/dashboard/budget',    label: 'Budget',       icon: DollarSign },
  { href: '/dashboard/settings',  label: 'Settings',     icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [showBanner, setShowBanner] = useState(true)
  const [user, setUser] = useState<{email: string; business?: string} | null>(null)

  useEffect(() => {
    const dismissed = localStorage.getItem('demo_banner_dismissed')
    if (dismissed) setShowBanner(false)
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) { router.push('/login'); return }
      setUser({ email: data.user.email!, business: data.user.user_metadata?.business_name })
    })
  }, [router])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  function dismissBanner() {
    localStorage.setItem('demo_banner_dismissed', '1')
    setShowBanner(false)
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      {/* DEMO BANNER */}
      {showBanner && (
        <div className="bg-[#FEF3C7] flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="text-sm">🧪</span>
            <span className="text-sm text-[#92400E]">
              <strong>Demo Mode</strong> — Data shown is for illustration only. Real metrics appear once your accounts are connected and campaigns are live.
            </span>
          </div>
          <button onClick={dismissBanner} className="text-[#92400E] hover:text-[#78350F] ml-4 flex-shrink-0">
            <X size={16} />
          </button>
        </div>
      )}

      {/* TOP NAV */}
      <header className="bg-white border-b border-[#E5E7EB] h-14 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="text-[#1B2A4A] font-bold text-lg">ADVERT<span className="text-[#0066CC]">360</span></span>
          <span className="text-[10px] font-bold text-[#E87722] tracking-widest uppercase">COMMAND</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#6B7280]">{user?.business || user?.email}</span>
          <button onClick={handleLogout} className="text-[#6B7280] hover:text-[#1B2A4A] transition-colors">
            <LogOut size={16} />
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-56 bg-white border-r border-[#E5E7EB] flex flex-col py-4">
          {NAV.map(item => {
            const Icon = item.icon
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  active
                    ? 'text-[#1B2A4A] font-medium border-l-[3px] border-[#0066CC] bg-[#EFF6FF] pl-[13px]'
                    : 'text-[#6B7280] hover:text-[#1B2A4A] hover:bg-[#F9FAFB] border-l-[3px] border-transparent'
                }`}>
                <Icon size={15} />
                {item.label}
              </Link>
            )
          })}
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
