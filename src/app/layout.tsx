import { title } from '@/lib/layout.shared'
import { baseUrl, createMetadata } from '@/lib/metadata'
import '@/styles/globals.css'
import type { Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Body } from './layout.client'
import { Providers } from './providers'
import 'katex/dist/katex.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { NextProvider } from 'fumadocs-core/framework/next'
import { Banner } from 'fumadocs-ui/components/banner'
import { TreeContextProvider } from 'fumadocs-ui/contexts/tree'
import { source } from '@/lib/source'
import { url } from '@/lib/url'

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata = createMetadata({
  title: {
    template: '%s | Terminal Docs',
    default: 'Terminal Docs',
  },
  description: 'The Next.js framework for building documentation sites',
  metadataBase: baseUrl,
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title,
          url: url('/rss.xml'),
        },
      ],
    },
  },
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      className={`${geist.variable} ${mono.variable}`}
      lang='en'
      suppressHydrationWarning
    >
      <Body tree={source.pageTree}>
        <Banner
          rainbowColors={[
            'rgba(255,100,0, 0.5)',
            'rgba(255,100,0, 0.5)',
            'transparent',
            'rgba(255,100,0, 0.5)',
            'transparent',
            'rgba(255,100,0, 0.5)',
            'transparent',
          ]}
          variant='rainbow'
        >
          Terminal Docs 💫
        </Banner>
        <NextProvider>
          <TreeContextProvider tree={source.pageTree}>
            <Providers>{children}</Providers>
          </TreeContextProvider>
        </NextProvider>
        <Analytics />
        <SpeedInsights />
      </Body>
    </html>
  )
}
