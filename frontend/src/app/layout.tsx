import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ADvertEX',
  description: 'hack u Meijo 2023 repository Web ver'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ADvertEX" />
      <meta property="og:description" content="hack u Meijo 2023 repository Web ver" />

      <meta property="og:url" content="https://hack-u-meijo-2023-web.vercel.app/" />
      <meta property="og:image" content="favicon.ico" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Tomas_engineer" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
