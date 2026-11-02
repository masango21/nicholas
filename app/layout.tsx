import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'NKOSINATHI NICHOLAS MASANGO | Portfolio',
  description: 'Portfolio of Nkosinathi Nicholas Masango, a Full Stack Developer completing Work-Integrated Learning at 4IR Research Lab.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="relative min-h-screen pt-[76px] bg-app text-app tech-background">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
