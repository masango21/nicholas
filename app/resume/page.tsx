export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold text-amber-200">Resume</h1>
        <p className="mt-6 text-amber-200 leading-relaxed">
          Explore my professional summary, education, project work, and technical competencies.
          Download the complete resume below for a full overview of my qualifications.
        </p>
        <div className="mt-10 rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
          <h2 className="text-2xl font-semibold text-amber-100">CV Details</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-200">
            <li>Final-year Informatics student at Tshwane University of Technology</li>
            <li>Currently gaining practical experience at 4IR Research Lab as a Full Stack Developer working across front-end and back-end systems</li>
            <li>Specialize in Project Management, Business and Systems Analysis, System Testing, Database Administration, and Data Management and Analytics</li>
            <li>Completed all theoretical modules and eager to apply my knowledge in real-world projects</li>
            <li>Final year project: AquaFix digital municipal water reporting system</li>
          </ul>
          <a
            href="/Nkosinathi%20Nicholas%20Masango%20CV.pdf?v=20260916"
            target="_blank"
            rel="noreferrer"
            download="Nkosinathi Nicholas Masango CV.pdf"
            className="mt-8 inline-flex rounded-full bg-amber-600 px-6 py-3 font-semibold text-black transition hover:bg-amber-500"
          >
            Download Full CV
          </a>
        </div>

        <div className="mt-10 rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
          <h2 className="text-2xl font-semibold text-amber-100">Certifications</h2>
          <div className="mt-4 rounded-2xl bg-slate-950/80 p-5">
            <h3 className="text-xl font-semibold text-amber-100">Web Development Fundamentals</h3>
            <p className="mt-3 text-amber-200"><strong>Issued by:</strong> IBM SkillsBuild</p>
            <p className="mt-1 text-amber-200"><strong>Date:</strong> Aug 03, 2026</p>
            <p className="mt-1 text-amber-200"><strong>Recipient:</strong> Nkosinathi Nicholas Masango</p>
            <a
              href="https://www.credly.com/badges/3d0f4c71-996c-462c-99af-3b04821bbc92"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full bg-amber-600 px-5 py-2 font-semibold text-black transition hover:bg-amber-500"
            >
              Verify Certificate
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
