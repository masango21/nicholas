'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-app bg-app/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <Link href="/" className="text-lg sm:text-xl font-semibold tracking-wide text-app">
          NKOSINATHI NICHOLAS MASANGO
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6 text-app">
          <Link href="/" className="transition hover:text-amber-100">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-amber-100">
            About
          </Link>
          <Link href="/projects" className="transition hover:text-amber-100">
            Projects
          </Link>
          <Link href="/contact" className="transition hover:text-amber-100">
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
