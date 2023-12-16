import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const title = 'ADvertEX'
const description =
  '探索&発見バトルゲーム。 街中や地元、学校内にある広告を撮影して、自分だけのキャラクターを創り、戦う。'
const images = './opengraph-image.png'
const url = 'https://hack-u-meijo-2023-web.vercel.app'
const type = 'website'
const locale = 'ja_JP'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type,
    url,
    title,
    description,
    images,
    siteName: title,
    locale
  },
  twitter: {
    site: '@Tomas_engineer',
    card: 'summary'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
