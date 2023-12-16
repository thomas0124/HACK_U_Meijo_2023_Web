import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ADvertEX" />
      <meta
        property="og:description"
        content="探索&発見バトルゲーム。 街中や地元、学校内にある広告を撮影して、自分だけのキャラクターを創り、戦う。"
      />
      <meta property="og:url" content="https://hack-u-meijo-2023-web.vercel.app/" />
      <meta property="og:site_name" content="ADvertEX" />
      <meta
        property="og:image"
        content="https://hack-u-meijo-2023-web.vercel.app/opengraph-image.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Tomas_engineer" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
