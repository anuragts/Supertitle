import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import Header from 'next/head'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
// import Navbar from '@/app/components/[header]/Header'
import Navbar from '@/app/components/[header]/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Supertitle - Subtitle maker',
  description: 'Supertitle, a versatile subtitle maker, utilizes AI to seamlessly add subtitles and audio to videos in any language, serving as both a subtitle generator and translator',
  keywords: 'subtitle ,ai subtitle generator,subtitle generator,subtitle translator,jav subtitle indo,jav subtitle,add subtitle to video,subtitle maker,video subtitle maker'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <head>
          <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap" rel="stylesheet" />
        </head>
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
