import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

type RequestBody = {
  name: string
  email: string
  phone?: string
  message: string
}

export async function POST(req: Request) {
  try {
    const body: RequestBody = await req.json()
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const toEmail = process.env.CONTACT_TO_EMAIL

    if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
      return NextResponse.json({ error: 'SMTP configuration is missing' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const info = await transporter.sendMail({
      from: `${body.name} <${body.email}>`,
      to: toEmail,
      subject: `Portfolio contact form: ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || ''}\n\nMessage:\n${body.message}`,
      html: `<p><strong>Name:</strong> ${body.name}</p><p><strong>Email:</strong> ${body.email}</p><p><strong>Phone:</strong> ${body.phone || ''}</p><hr/><p>${body.message}</p>`,
    })

    return NextResponse.json({ ok: true, messageId: info.messageId })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
