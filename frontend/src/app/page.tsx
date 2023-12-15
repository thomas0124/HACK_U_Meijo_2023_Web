'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { LoginButton, LogoutButton } from '@/components/buttons'
import { Main } from '@/components/Main'
import { NextAuthProvider } from '@/app/providers'

export default function Home() {
  return (
    <NextAuthProvider>
      <ClientHome />
      <Main />
    </NextAuthProvider>
  )
}

function ClientHome() {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <header className="text-2xl md:text-4xl flex shrink-0 h-16 justify-between items-center">
      <Image src="/images/image_ad.png" width={240} height={60} alt="ADvertEX Logo" className="pt-9" />
      <div className="not-italic form-normal leading-normal px-4 pt-2 text-white font-serif">
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </header>
  )
}
