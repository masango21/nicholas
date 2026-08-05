import Hero from '../components/Hero'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="top" />
      <Hero />

      <div className="mx-auto max-w-6xl space-y-28 px-6 py-16 scroll-smooth snap-y snap-mandatory">
        <Section title="About" id="about">
          <p className="text-amber-200 leading-relaxed">
            I am a final-year Informatics student at Tshwane University of Technology seeking a six-month Work-Integrated Learning internship in Project Management, Business and Systems Analysis, System Testing, Database Administration, or Data Management and Analytics.
          </p>
          <p className="mt-4 text-amber-200 leading-relaxed">
            I have completed all theoretical coursework and am currently applying my skills in a professional environment at 4IR Research Lab while completing my WIL placement.
            I enjoy collaborating with teams, solving real-world problems, and learning modern technologies that improve business operations and software quality.
          </p>
        </Section>

        <Section title="Experience" id="experience">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-100">4IR Research Lab</h3>
              <p className="mt-3 text-amber-200">Work-Integrated Learning placement, contributing to systems analysis, process documentation, and technical testing.</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-amber-200">
                <li>Support requirements gathering and documentation for software solutions.</li>
                <li>Assist with system testing, quality assurance, and process validation.</li>
                <li>Work on database administration tasks and performance review for data workflows.</li>
                <li>Collaborate with stakeholders to align technical delivery with business goals.</li>
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
              <p className="text-amber-200"><span className="font-semibold">Email:</span> <a href="mailto:nicholas790309@outlook.com" className="text-amber-100 underline">nicholas790309@outlook.com</a></p>
              <p className="text-amber-200"><span className="font-semibold">Address:</span> 07 Aubrey Matlala Road, Soshanguve, 0152, Gauteng</p>
              <p className="text-amber-200"><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/nkosinathi-masango-b0a771393/" className="text-amber-100 underline">linkedin.com/in/nkosinathi-masango-b0a771393</a></p>
            </div>
            <div className="space-y-6 rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
              <div>
                <h3 className="text-xl font-semibold text-amber-100">Download CV</h3>
                <p className="mt-3 text-amber-200">View the full version of my CV, including academic history, project experience, and technical skills.</p>
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Download CV
              </a>
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
