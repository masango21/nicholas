'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        const message = result.error || 'Failed to send message'
        console.error(message)
        setErrorMessage(message)
        setStatus('error')
      }
    } catch (err) {
      setErrorMessage('Could not connect to the email service. Try again later.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl card p-6 max-w-xl mx-auto">
      <div>
        <label className="block text-sm font-medium muted">Name</label>
        <input name="name" value={form.name} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-app px-4 py-3 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium muted">Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-2xl border border-app px-4 py-3 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium muted">Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-app px-4 py-3 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium muted">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required className="mt-2 h-32 w-full rounded-2xl border border-app px-4 py-3 outline-none" />
      </div>
      <div className="flex items-center gap-4">
        <button disabled={status === 'sending'} className="btn-accent rounded-full px-6 py-2 font-semibold" type="submit">
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <p className="text-app">Message sent — thank you!</p>}
        {status === 'error' && <p className="text-rose-500">{errorMessage || 'Error sending message. Try again later.'}</p>}
      </div>
    </form>
  )
}
