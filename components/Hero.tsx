import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Full Stack Developer · South Africa</p>
        <h1 id="hero-title">
          I build thoughtful digital experiences <span>that solve real problems.</span>
        </h1>
        <p className="hero-intro">
          I&apos;m Nkosinathi Nicholas Masango, a Full Stack Developer completing Work-Integrated
          Learning at the 4IR Research Lab. I enjoy turning ideas into useful, well-crafted
          software and working across the full development process.
        </p>
        <div className="hero-actions">
          <Link href="/#projects" className="button button-primary">
            Explore my work <span aria-hidden="true">↗</span>
          </Link>
          <a
            href="/Nkosinathi-Nicholas-Masango-CV.pdf"
            download="Nkosinathi-Nicholas-Masango-CV.pdf"
            className="button button-secondary"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="download-icon">
              <path d="M10 2.5v9m0 0 3.5-3.5M10 11.5 6.5 8M3.5 13.5v3h13v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download CV
          </a>
          <Link href="/#contact" className="button button-secondary">Get in touch</Link>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          <a href="https://www.linkedin.com/in/nkosinathi-masango-b0a771393/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-frame">
          <Image
            src="/profile.jpg"
            alt="Portrait of Nkosinathi Nicholas Masango"
            width={520}
            height={620}
            priority
            className="hero-portrait"
          />
        </div>
        <div className="portrait-caption">
          <span className="caption-line" />
          <span>Curious by nature. Builder by practice.</span>
        </div>
        <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
      </div>
    </section>
  )
}
