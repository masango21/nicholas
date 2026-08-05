import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-amber-100">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold text-amber-200">Contact</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-app card p-6">
            <div className="space-y-4">
              <p><span className="font-semibold">Name:</span> Nkosinathi Nicholas Masango</p>
              <p><span className="font-semibold">Phone:</span> 0713379855</p>
              <p><span className="font-semibold">Email:</span> <a href="mailto:nicholas790309@outlook.com" className="accent hover:underline">nicholas790309@outlook.com</a></p>
              <p><span className="font-semibold">Address:</span> 07 Aubrey Matlala Road, Soshanguve, 0152, Gauteng</p>
              <p><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/nkosinathi-masango-b0a771393/" className="accent hover:underline">linkedin.com/in/nkosinathi-masango-b0a771393</a></p>
            </div>
            <div className="mt-8 rounded-2xl border border-app p-4 bg-app/60">
              <h2 className="text-2xl font-semibold">Download CV</h2>
              <p className="mt-3 muted">View the full version of my CV, including academic history, project experience, and technical skills.</p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex btn-accent rounded-full px-6 py-3 font-semibold"
              >
                Download CV
              </a>
            </div>
          </div>
          <div>
            {/* Contact form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
