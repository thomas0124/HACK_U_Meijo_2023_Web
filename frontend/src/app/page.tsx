'use client'

import { useSession } from 'next-auth/react'
import { LoginButton, LogoutButton } from '@/components/buttons'
import { Main } from '@/components/Main'
import { NextAuthProvider } from '@/app/providers'

export default function Home() {
  return (
    <NextAuthProvider>
      <div className="bg-black">
        <ClientHome />
        <Main />
      </div>
    </NextAuthProvider>
  )
}

function ClientHome() {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <header className="text-4xl flex shrink-0 h-16 px-10 pt-2 justify-between">
      <p className="not-italic font-serif leading-normal text-white ">ADvertEX</p>
      <div className="not-italic form-normal leading-normal text-white font-serif">
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  )
}
