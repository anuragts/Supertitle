import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from 'next/head'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
// import Navbar from '@/app/components/[header]/Header'
import Navbar from '@/app/components/[header]/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SuperTitle',
  description: 'Add subtitle and audio using AI to any video',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <Header>
          <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap" rel="stylesheet" />
        </Header>
        <SpeedInsights/>
        <Analytics />
        <body className={inter.className}>
          <Navbar />
          {children}
          </body>
      </html>
    </>
  )
}
