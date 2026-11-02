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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json().catch(() => ({}))

      if (response.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', message: '' })
        return
      }

      const message = result.error || 'Failed to send message'
      console.error(message)
      setErrorMessage(message)
      setStatus('error')
    } catch {
      setErrorMessage('Could not connect to the email service. Try again later.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form space-y-4">
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-phone">Phone <span>(optional)</span></label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Your phone number"
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me a little about what you have in mind"
          required
        />
      </div>
      <div className="form-submit-row">
        <button disabled={status === 'sending'} className="button button-primary" type="submit">
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'success' && (
          <p className="form-status" role="status">Message sent — thank you!</p>
        )}
        {status === 'error' && (
          <p className="form-status form-status-error" role="alert">
            {errorMessage || 'Error sending message. Try again later.'}
          </p>
        )}
      </div>
    </form>
  )
}
