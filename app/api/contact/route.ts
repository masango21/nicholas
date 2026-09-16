import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

type RequestBody = {
  name: string
  email: string
  phone?: string
  message: string
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[character] || character)

export async function POST(req: Request) {
  try {
    const body: RequestBody = await req.json()
    const name = body.name?.trim()
    const email = body.email?.trim()
    const phone = body.phone?.trim() || ''
    const message = body.message?.trim()

    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid name, email, and message' }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const toEmail = process.env.CONTACT_TO_EMAIL || 'masangonicholas20@gmail.com'

    if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
      return NextResponse.json({ error: 'SMTP configuration is missing' }, { status: 500 })
    }

    const secure = smtpPort === 465
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const info = await transporter.sendMail({
      from: smtpUser,
      replyTo: `${name} <${email}>`,
      to: toEmail,
      subject: `Portfolio contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Phone:</strong> ${escapeHtml(phone)}</p><hr/><p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>`,
    })

    return NextResponse.json({ ok: true, messageId: info.messageId })
  } catch (err) {
    console.error(err)
    if (err && typeof err === 'object' && 'code' in err && err.code === 'EAUTH') {
      return NextResponse.json(
        { error: 'Gmail rejected the SMTP login. Set SMTP_PASS to a Google App Password in .env.local.' },
        { status: 502 },
      )
    }
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
