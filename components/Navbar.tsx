'use client'

import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Home', href: '/#top' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Education', href: '/#education' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/#top" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">NM</span>
          <span className="brand-name">Nkosinathi Masango</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
          <ThemeToggle />
          <Link className="button button-small button-primary" href="/#contact">Let&apos;s talk</Link>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="mobile-nav-actions">
            <ThemeToggle />
            <Link className="button button-primary" href="/#contact" onClick={() => setMenuOpen(false)}>
              Let&apos;s talk
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
