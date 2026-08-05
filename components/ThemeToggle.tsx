'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const saved = window.localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = saved ?? (prefersDark ? 'dark' : 'light')
    setTheme(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
