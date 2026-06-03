'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password })
      if (authError) { setError('Invalid email or password.'); return }
      const role = data.user?.user_metadata?.role || 'client'
      router.push(role === 'admin' ? '/admin' : '/dashboard')
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
        <h1 className="text-xl font-semibold text-[#1B2A4A] mb-1">Welcome back</h1>
        <p className="text-sm text-[#6B7280] mb-6">Log in to your account</p>

        <button className="w-full flex items-center justify-center gap-2 border border-[#E5E7EB] rounded-lg py-2.5 text-sm text-[#374151] hover:border-[#1B2A4A] transition-colors mb-4">
          <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Continue with Google
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-[#E5E7EB]" />
          <span className="text-xs text-[#9CA3AF]">OR</span>
          <div className="flex-1 h-px bg-[#E5E7EB]" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-3 py-2 rounded-lg">{error}</div>}
          <div>
            <label className="block text-xs font-medium text-[#374151] mb-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required
              className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm text-[#374151] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-medium text-[#374151]">Password</label>
              <a href="#" className="text-xs text-[#0066CC] hover:underline">Forgot password?</a>
            </div>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required
              className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm text-[#374151] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]" />
          </div>
          <button type="submit" disabled={loading}
            className="w-full bg-[#1B2A4A] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#0066CC] transition-colors disabled:opacity-60">
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
        <p className="text-xs text-center text-[#6B7280] mt-5">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-[#0066CC] hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  )
}
