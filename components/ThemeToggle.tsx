'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const saved = window.localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = saved ?? (prefersDark ? 'dark' : 'light')
    setTheme(nextTheme)
    document.documentElement.classList.toggle('light', nextTheme === 'light')
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
    document.documentElement.classList.toggle('light', nextTheme === 'light')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  )
}
