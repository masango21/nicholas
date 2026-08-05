export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold text-amber-200">Experience</h1>
        <div className="mt-8 space-y-8">
          <section className="rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
            <h2 className="text-2xl font-semibold text-amber-100">4IR Research Lab</h2>
            <p className="mt-3 text-amber-200">Work-Integrated Learning placement, currently contributing as a Full Stack Developer and systems analyst.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-200">
              <li>Support requirements gathering and documentation for software solutions.</li>
              <li>Assist with system testing, quality assurance, and process validation.</li>
              <li>Work on database administration tasks and performance review for data workflows.</li>
              <li>Collaborate with stakeholders to align technical delivery with business goals.</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
            <h2 className="text-2xl font-semibold text-amber-100">AquaFix Final Year Project</h2>
            <p className="mt-3 text-amber-200">A web-based system for reporting and resolving municipal water issues.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-200">
              <li>Defined the project scope and deliverables with clear stakeholder requirements.</li>
              <li>Produced the project plan and timeline for development and delivery.</li>
              <li>Designed UML diagrams and system models to structure the application.</li>
              <li>Developed test cases for unit, integration, system, and acceptance testing.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
