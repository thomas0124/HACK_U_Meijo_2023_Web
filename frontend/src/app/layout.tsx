import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteName = 'ADvertEX'
const description = 'hack u Meijo 2023 repository Web ver'
const url = 'https://hack-u-meijo-2023-web.vercel.app/'

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'en_EN',
    type: 'website'
  },
  twitter: {
    card: `summary_large_image`,
    title: siteName,
    description,
    creator: `@Tomas_engineer`
  },
  verification: {
    google: 'https://www.google.com'
  },
  alternates: {
    canonical: url
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
