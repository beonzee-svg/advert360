import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Brand colors
export const BRAND = {
  navy: '#1B2A4A',
  blue: '#0066CC',
  orange: '#E87722',
}

// Plan config — single source of truth, editable from admin
export const PLANS = {
  growth: { name: 'GROWTH', price: 179, annualPrice: 1590, setup: 199, budget: '$2K–$15K/mo', agents: 5 },
  scale:  { name: 'SCALE',  price: 349, annualPrice: 3290, setup: 299, budget: '$15K–$75K/mo', agents: 9 },
  agency: { name: 'AGENCY', price: 499, annualPrice: 4990, setup: 0,   budget: 'Unlimited',    agents: 9 },
}

export const AGENTS = [
  { id: 'nova',   name: 'NOVA',   channel: 'SEO',           desc: 'Researches, writes, and publishes. Rankings compound every month.' },
  { id: 'pulse',  name: 'PULSE',  channel: 'Google Ads',    desc: 'Search, Shopping, PMax, YouTube. Strategy to execution.' },
  { id: 'spark',  name: 'SPARK',  channel: 'Meta Ads',      desc: 'Facebook + Instagram. Cold, warm, retargeting — all automated.' },
  { id: 'flux',   name: 'FLUX',   channel: 'TikTok Ads',    desc: 'Short-form video ads, UGC-style scripts, trend-aware bidding.' },
  { id: 'link',   name: 'LINK',   channel: 'LinkedIn Ads',  desc: 'B2B lead gen, sponsored content, InMail. Phase 3 (Month 12+).' },
  { id: 'echo',   name: 'ECHO',   channel: 'Email',         desc: 'Segments, writes, and sends. Connects to your existing ESP.' },
  { id: 'halo',   name: 'HALO',   channel: 'SMS / Push',    desc: 'Abandon cart recovery, retention sequences, behavioral triggers.' },
  { id: 'prism',  name: 'PRISM',  channel: 'GEO / AEO',     desc: 'Optimized for ChatGPT, Perplexity, and AI search citations.' },
  { id: 'canvas', name: 'CANVAS', channel: 'Creative AI',   desc: 'Ad images, copy, landing pages. Fresh creative every 7 days.' },
]
