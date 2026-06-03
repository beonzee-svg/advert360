import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type UserRole = 'client' | 'admin'

export interface AppUser {
  id: string
  email: string
  role: UserRole
  business_name: string
  plan: 'growth' | 'scale' | 'agency'
  onboarded: boolean
}
