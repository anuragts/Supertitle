import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from 'next/head'
import { Analytics } from '@vercel/analytics/react';

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
    <Analytics />
    <html lang="en">
      <Header>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap" rel="stylesheet"/>
      </Header>
      <body className={inter.className}>{children}</body>
    </html>
    </>
  )
}
