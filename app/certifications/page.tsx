export default function CertificationsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold text-amber-200">Certifications</h1>
        <p className="mt-6 text-amber-200 leading-relaxed">
          Verified certifications that demonstrate my foundational web development knowledge and skills.
        </p>

        <div className="mt-10 rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
          <h2 className="text-2xl font-semibold text-amber-100">Web Development Fundamentals</h2>
          <p className="mt-4 text-amber-200"><strong>Issued by:</strong> IBM SkillsBuild</p>
          <p className="mt-2 text-amber-200"><strong>Date:</strong> Aug 03, 2026</p>
          <p className="mt-2 text-amber-200"><strong>Recipient:</strong> Nkosinathi Nicholas Masango</p>
          <a
            href="https://www.credly.com/badges/3d0f4c71-996c-462c-99af-3b04821bbc92"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-amber-600 px-6 py-3 font-semibold text-black transition hover:bg-amber-500"
          >
            Verify Certificate
          </a>
        </div>
      </div>
    </main>
  )
}
