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
            <li>Seeking a six-month Work-Integrated Learning internship in project management, business and systems analysis, system testing, database administration, or data management and analytics</li>
            <li>Completed all theoretical modules and currently working at 4IR Research Lab</li>
            <li>Final year project: AquaFix digital municipal water reporting system</li>
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-amber-600 px-6 py-3 font-semibold text-black transition hover:bg-amber-500"
          >
            Download Full CV
          </a>
        </div>
      </div>
    </main>
  )
}
