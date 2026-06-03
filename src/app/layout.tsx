import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADVERT360 — AI-Native Digital Marketing Platform",
  description: "Replace your $562K marketing team with 9 AI agents — from $179/month.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased`}>{children}</body>
    </html>
  )
}
