'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [business, setBusiness] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (password !== confirm) { setError('Passwords do not match.'); return }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return }
    setLoading(true)
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email, password,
        options: { data: { business_name: business, role: 'client', plan: 'growth', onboarded: false } }
      })
      if (signUpError) { setError(signUpError.message); return }
      router.push('/onboarding')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-4">
      <Link href="/" className="text-[#1B2A4A] font-bold text-2xl tracking-tight mb-10">
        ADVERT<span className="text-[#0066CC]">360</span>
      </Link>
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 w-full max-w-sm shadow-sm">
        <h1 className="text-xl font-semibold text-[#1B2A4A] mb-1">Create your account</h1>
        <p className="text-sm text-[#6B7280] mb-6">14-day free trial — no credit card needed</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-3 py-2 rounded-lg">{error}</div>}
          <div>
            <label className="block text-xs font-medium text-[#374151] mb-1">Business name</label>
            <input type="text" value={business} onChange={e => setBusiness(e.target.value)} placeholder="Acme Store" required
              className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#374151] mb-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required
              className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#374151] mb-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Min 8 characters" required
              className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]" />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#374151] mb-1">Confirm password</label>
            <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="••••••••" required
              className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]" />
          </div>
          <button type="submit" disabled={loading}
            className="w-full bg-[#1B2A4A] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#0066CC] transition-colors disabled:opacity-60">
            {loading ? 'Creating account...' : 'Start free trial'}
          </button>
        </form>
        <p className="text-xs text-center text-[#6B7280] mt-5">
          Already have an account?{' '}
          <Link href="/login" className="text-[#0066CC] hover:underline">Log in</Link>
        </p>
        <p className="text-[10px] text-center text-[#9CA3AF] mt-3">
          By signing up you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}
