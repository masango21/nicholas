import Link from 'next/link'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="About" href="/about" description="Read my summary, education, and project experience." />
          <Card title="Experience" href="/experience" description="Explore my learning and practical experience." />
          <Card title="Skills" href="/skills" description="See the technical tools and languages I work with." />
          <Card title="Projects" href="/projects" description="Review my final year project and other work." />
          <Card title="Education" href="/education" description="View my academic background and current studies." />
          <Card title="Contact" href="/contact" description="Connect with me and download my CV." />
        </div>
      </section>
    </main>
  )
}

function Card({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link
      href={href}
      className="rounded-3xl border border-amber-800 bg-neutral-900/80 p-6 transition hover:-translate-y-1 hover:border-amber-600 hover:bg-neutral-900"
    >
      <h2 className="text-xl font-semibold text-amber-100">{title}</h2>
      <p className="mt-3 text-amber-200">{description}</p>
    </Link>
  )
}
