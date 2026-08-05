export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold text-amber-200">Projects</h1>
        <section className="mt-10 rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
          <h2 className="text-2xl font-semibold text-amber-100">AquaFix</h2>
          <p className="mt-3 text-amber-200">
            A digital system that allows residents to report water problems and enables municipalities to track and resolve issues efficiently.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-200">
            <li>Created a scope statement to define project objectives, deliverables, and stakeholders.</li>
            <li>Built the project plan with schedules, tasks, resources, and timelines.</li>
            <li>Gathered and documented requirements to ensure the system met stakeholder and user needs.</li>
            <li>Designed UML diagrams in Visio to model system structure, processes, and interactions.</li>
            <li>Created test cases for unit, integration, system, and acceptance testing.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
