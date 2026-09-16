import Hero from '../components/Hero'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'
import ProjectCard from '../components/ProjectCard'

const featuredProjects = [
  {
    title: 'Mzansi Palette',
    description: 'A modern visual palette and design inspiration app focused on creative color exploration and accessible styling references.',
    liveUrl: 'https://mzansi-pallete.vercel.app/'
  },
  {
    title: 'Auth Monorepoo',
    description: 'An authentication-focused monorepo built to centralize and simplify secure login and related services across multiple app modules.',
    liveUrl: 'https://auth-monorepoo-dxqp-ecru.vercel.app/'
  },
  {
    title: 'Lost Child Report Screens',
    description: 'A reporting interface designed to assist with locating and reporting missing children through structured, user-friendly flows.',
    liveUrl: 'https://lost-child-report-screens.vercel.app/'
  },
  {
    title: 'Ubuntu Care',
    description: 'A care-focused digital service experience designed to provide accessible support and organization for users needing responsive assistance.',
    liveUrl: 'https://ubuntu-care-eight.vercel.app'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="top" />
      <Hero />

      <div className="mx-auto max-w-6xl space-y-28 px-6 py-16 scroll-smooth snap-y snap-mandatory">
        <Section title="About" id="about">
          <p className="text-amber-200 leading-relaxed">
            I am a final-year Informatics student at Tshwane University of Technology currently completing a Work-Integrated Learning placement at 4IR Research Lab as a Full Stack Developer within the software development team.
          </p>
          <p className="mt-4 text-amber-200 leading-relaxed">
            I am applying my skills in a practical development environment while collaborating with teams, solving real-world problems, and building user-centered software solutions.
          </p>
        </Section>

        <Section title="Experience" id="experience">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-100">4IR Research Lab</h3>
              <p className="mt-3 text-amber-200">Work-Integrated Learning placement as a Full Stack Developer in the software development team.</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-200">
                <li>Develop front-end interfaces and user-facing components for internal applications.</li>
                <li>Build server-side logic and APIs to support data-driven workflows.</li>
                <li>Manage database schemas, queries, and integration with application services.</li>
                <li>Collaborate with developers and stakeholders to deliver reliable software solutions.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-100">AquaFix Final Year Project</h3>
              <p className="mt-3 text-amber-200">A web-based system for reporting and resolving municipal water issues.</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-200">
                <li>Defined the project scope and deliverables with clear stakeholder requirements.</li>
                <li>Produced the project plan and timeline for development and delivery.</li>
                <li>Designed UML diagrams and system models to structure the application.</li>
                <li>Developed test cases for unit, integration, system, and acceptance testing.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Skills" id="skills">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-amber-100">Languages</h3>
              <p className="text-amber-200">Java</p>
              <p className="text-amber-200">T-SQL</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-amber-100">Technical Tools</h3>
              <p className="text-amber-200">Visio</p>
              <p className="text-amber-200">Power BI</p>
              <p className="text-amber-200">SQL Server Management Studio</p>
              <p className="text-amber-200">VS Code</p>
              <p className="text-amber-200">Copilot</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-amber-100">Office Tools</h3>
              <p className="text-amber-200">Word</p>
              <p className="text-amber-200">PowerPoint</p>
              <p className="text-amber-200">Excel</p>
              <p className="text-amber-200">Teams</p>
              <p className="text-amber-200">Outlook</p>
              <p className="text-amber-200">OneDrive</p>
            </div>
          </div>
        </Section>

        <Section title="Projects" id="projects">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-100">AquaFix</h3>
              <p className="mt-3 text-amber-200">A digital system that allows residents to report water problems and enables municipalities to track and resolve issues efficiently.</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-200">
                <li>Created a scope statement to define project objectives, deliverables, and stakeholders.</li>
                <li>Built the project plan with schedules, tasks, resources, and timelines.</li>
                <li>Gathered and documented requirements to ensure the system met stakeholder and user needs.</li>
                <li>Designed UML diagrams in Visio to model system structure, processes, and interactions.</li>
                <li>Created test cases for unit, integration, system, and acceptance testing.</li>
              </ul>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  liveUrl={project.liveUrl}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-amber-100">Student Task Manager</h3>
            <p className="mt-3 text-amber-200">A task and project management web app designed to help students organise assignments, deadlines, and personal workflows.</p>
            <a
              href="https://student-task-manager-phs6.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full bg-amber-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              View project
            </a>
          </div>
        </Section>

        <Section title="Education" id="education">
          <div>
            <h3 className="text-xl font-semibold text-amber-100">Tshwane University of Technology</h3>
            <p className="mt-3 text-amber-200">Diploma in Informatics</p>
            <p className="mt-2 text-amber-200">2023 – Present</p>
            <p className="mt-4 text-amber-200 leading-relaxed">
              Completed all theoretical modules for the Informatics diploma and currently applying my coursework in practical workplace settings through Work-Integrated Learning.
            </p>
          </div>
        </Section>

        <Section title="Contact" id="contact">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <p className="text-amber-200"><span className="font-semibold">Name:</span> Nkosinathi Nicholas Masango</p>
              <p className="text-amber-200"><span className="font-semibold">Phone:</span> 0713379855</p>
              <p className="text-amber-200"><span className="font-semibold">Email:</span> <a href="mailto:masangonicholas20@gmail.com" className="text-amber-100 underline">masangonicholas20@gmail.com</a></p>
              <p className="text-amber-200"><span className="font-semibold">Address:</span> 07 Aubrey Matlala Road, Soshanguve, 0152, Gauteng</p>
              <p className="text-amber-200"><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/nkosinathi-masango-b0a771393/" className="text-amber-100 underline">linkedin.com/in/nkosinathi-masango-b0a771393</a></p>
            </div>
          </div>
          <div className="mt-8 rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
            <ContactForm />
          </div>
        </Section>
      </div>
    </main>
  )
}
