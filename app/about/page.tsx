export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold text-amber-200">About</h1>
        <p className="mt-6 text-amber-200 leading-relaxed">
          I am a final-year Informatics student at Tshwane University of Technology seeking a six-month Work-Integrated Learning internship in Project Management, Business and Systems Analysis, System Testing, Database Administration, or Data Management and Analytics.
        </p>
        <p className="mt-4 text-amber-200 leading-relaxed">
          I have completed all theoretical coursework and am currently applying my skills in a professional environment at 4IR Research Lab while completing my WIL placement.
          I enjoy collaborating with teams, solving real-world problems, and learning modern technologies that improve business operations and software quality.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
            <h2 className="text-2xl font-semibold text-amber-100">Education</h2>
            <p className="mt-3 text-amber-200">Diploma in Informatics — Tshwane University of Technology (2023–Present)</p>
          </section>
          <section className="rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
            <h2 className="text-2xl font-semibold text-amber-100">Experience</h2>
            <p className="mt-3 text-amber-200">Currently working at 4IR Research Lab as part of my Work-Integrated Learning placement, supporting systems analysis, project documentation, and technical testing activities.</p>
          </section>
        </div>
        <section className="mt-12 rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
          <h2 className="text-2xl font-semibold text-amber-100">AquaFix Final Year Project</h2>
          <p className="mt-3 text-amber-200">
            AquaFix is a digital system that enables residents to report water problems and helps municipalities track and resolve issues efficiently.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-200">
            <li>Created a scope statement that defined objectives, deliverables, and stakeholder expectations.</li>
            <li>Built the project plan with schedules, tasks, resources, and milestones.</li>
            <li>Gathered and documented requirements to ensure the system met user and business needs.</li>
            <li>Designed UML diagrams in Visio to model system structure, processes, and interactions.</li>
            <li>Developed test cases for unit, integration, system, and acceptance testing.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
