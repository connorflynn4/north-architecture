'use client'

import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface BaseLayoutProps {
  children: ReactNode
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
