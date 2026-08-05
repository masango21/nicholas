import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'NKOSINATHI NICHOLAS MASANGO | Portfolio',
  description: 'Final-year Informatics student and aspiring IT professional in project management and systems analysis.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-screen pt-24 bg-app text-app overflow-auto">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
