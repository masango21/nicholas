import ProjectCard from '../../components/ProjectCard'

const deployedProjects = [
  {
    title: 'Ai Study Assistant',
    description: 'A study support app designed to help users work through learning tasks with AI-assisted guidance and streamlined interactions.',
    liveUrl: 'https://ai-study-assistant-eosin-ten.vercel.app/',
    githubUrl: 'https://github.com/masango21/Ai-Study-Assistant-'
  },
  {
    title: 'Auth Monorepoo',
    description: 'An authentication-focused monorepo built to centralize and simplify secure login and related services across multiple app modules.',
    liveUrl: 'https://auth-monorepoo-dxqp-ecru.vercel.app/',
    githubUrl: 'https://github.com/masango21/auth_monorepoo'
  },
  {
    title: 'Mzansi Palette',
    description: 'A modern visual palette and design inspiration app focused on creative color exploration and accessible styling references.',
    liveUrl: 'https://mzansi-pallete.vercel.app/'
  },
  {
    title: 'Lost Child Report Screens',
    description: 'A reporting interface designed to assist with locating and reporting missing children through structured, user-friendly flows.',
    liveUrl: 'https://lost-child-report-screens.vercel.app/'
  },
  {
    title: 'Mzansi Rent',
    description: 'A rental platform created for discovering and managing property listings with a user-friendly experience tailored to local housing needs.',
    liveUrl: 'https://mzansi-rent.vercel.app',
    githubUrl: 'https://github.com/masango21/Mzansi-rent'
  },
  {
    title: 'Ubuntu Care',
    description: 'A care-focused digital service experience designed to provide accessible support and organization for users needing responsive assistance.',
    liveUrl: 'https://ubuntu-care-eight.vercel.app',
    githubUrl: 'https://github.com/masango21/Ubuntu-care-'
  }
]

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

<<<<<<< HEAD
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-amber-100">Deployed GitHub Repositories</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {deployedProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
          <h2 className="text-2xl font-semibold text-amber-100">Student Task Manager</h2>
          <p className="mt-3 text-amber-200">
            A task and project management web app designed to help students organise assignments, deadlines, and personal workflows.
          </p>
          <a
            href="https://student-task-manager-phs6.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-amber-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            View project
          </a>
        </section>
      </div>
    </main>
  )
}
