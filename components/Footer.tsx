import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container site-footer-inner">
        <p>© {new Date().getFullYear()} Nkosinathi Nicholas Masango</p>
        <Link href="/#top">Back to top ↑</Link>
      </div>
    </footer>
  )
}
