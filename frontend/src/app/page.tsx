'use client'

import { useSession } from 'next-auth/react'
import { LoginButton, LogoutButton } from '@/components/buttons'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'
import { NextAuthProvider } from '@/app/providers'

export default function Home() {
  return (
    <NextAuthProvider>
      <ClientHome />
      <Main />
      <Footer />
    </NextAuthProvider>
  )
}

function ClientHome() {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <header className="text-2xl md:text-4xl flex shrink-0 h-16 px-4 pt-2  justify-between items-center">
      <div className="not-italic font-serif leading-normal text-white">ADvertEX</div>
      <div className="not-italic form-normal leading-normal text-white font-serif">
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  )
}
