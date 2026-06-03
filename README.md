# ADVERT360

AI-native digital marketing platform. 9 agents. Every channel.

## Stack
- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- Supabase (auth + database)
- Vercel (hosting)

## Setup

1. Clone repo and install: `npm install`
2. Copy `.env.example` to `.env.local` and fill in Supabase credentials
3. Run Supabase schema: paste `supabase/schema.sql` into Supabase SQL Editor
4. `npm run dev` — runs on localhost:3000

## Deploy

Connect this repo to Vercel. Add environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## First admin user

After deploying, register normally then run in Supabase SQL Editor:
```sql
update public.profiles set role = 'admin' where email = 'puneet@thecommerceshop.com';
```
