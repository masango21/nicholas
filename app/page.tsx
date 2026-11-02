import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section'

const projects = [
  {
    title: 'AquaFix',
    description: 'A digital system that allows residents to report water problems and enables municipalities to track and resolve issues efficiently.',
    featured: true,
  },
  {
    title: 'AI Study Assistant',
    description: 'A study support app designed to help users work through learning tasks with AI-assisted guidance and streamlined interactions.',
    liveUrl: 'https://ai-study-assistant-eosin-ten.vercel.app/',
    featured: true,
  },
  {
    title: 'Auth Monorepoo',
    description: 'An authentication-focused monorepo built to centralize and simplify secure login and related services across multiple app modules.',
    liveUrl: 'https://auth-monorepoo-dxqp-ecru.vercel.app/',
  },
  {
    title: 'Mzansi Palette',
    description: 'A modern visual palette and design inspiration app focused on creative color exploration and accessible styling references.',
    liveUrl: 'https://mzansi-pallete.vercel.app/',
  },
  {
    title: 'Lost Child Report Screens',
    description: 'A reporting interface designed to assist with locating and reporting missing children through structured, user-friendly flows.',
    liveUrl: 'https://lost-child-report-screens.vercel.app/',
  },
  {
    title: 'Mzansi Rent',
    description: 'A rental platform created for discovering and managing property listings with a user-friendly experience tailored to local housing needs.',
    liveUrl: 'https://mzansi-rent.vercel.app',
  },
  {
    title: 'Ubuntu Care',
    description: 'A care-focused digital service experience designed to provide accessible support and organization for users needing responsive assistance.',
    liveUrl: 'https://ubuntu-care-eight.vercel.app',
  },
  {
    title: 'Student Task Manager',
    description: 'A task and project management web app designed to help students organise assignments, deadlines, and personal workflows.',
    liveUrl: 'https://student-task-manager-phs6.vercel.app/',
  },
]

const skillGroups = [
  { title: 'Languages', items: ['Java', 'T-SQL'] },
  { title: 'Technical tools', items: ['Visio', 'Power BI', 'SQL Server Management Studio', 'VS Code', 'Copilot'] },
  { title: 'Productivity', items: ['Word', 'PowerPoint', 'Excel', 'Teams', 'Outlook', 'OneDrive'] },
]

export default function Home() {
  return (
    <main>
      <div id="top" className="anchor-target" />
      <div className="page-container">
        <Hero />

        <Section title="Building useful things, with purpose" id="about">
          <div className="about-grid">
            <p className="about-lead">
              I&apos;m a final-year Informatics student at Tshwane University of Technology,
              completing a Work-Integrated Learning placement at 4IR Research Lab as a Full
              Stack Developer.
            </p>
            <div className="about-detail">
              <p>
                My work spans front-end interfaces, server-side logic, database management,
                and connecting systems into cohesive experiences. I&apos;m motivated by
                practical problem-solving, thoughtful collaboration, and continuous learning.
              </p>
              <Link href="/about" className="text-link">More about me <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </Section>

        <Section title="Experience that connects ideas to delivery" id="experience">
          <article className="experience-card">
            <div className="experience-marker" aria-hidden="true"><span /></div>
            <div className="experience-copy">
              <div className="experience-meta">
                <h3>4IR Research Lab</h3>
                <span>Work-Integrated Learning</span>
              </div>
              <p className="experience-role">Full Stack Developer · Software development team</p>
              <p>
                Contributing to software solutions through user-facing development,
                server-side logic, database work, and collaboration with developers and
                stakeholders.
              </p>
              <ul className="detail-list">
                <li>Develop front-end interfaces and components for internal applications.</li>
                <li>Build server-side logic and APIs for data-driven workflows.</li>
                <li>Manage database schemas, queries, and application integrations.</li>
              </ul>
            </div>
          </article>
          <div className="experience-project">
            <span className="eyebrow">Academic project</span>
            <h3>AquaFix</h3>
            <p>
              A web-based system for reporting and resolving municipal water issues. My work
              included project scope and planning, requirements documentation, UML system
              models, and test cases across unit, integration, system, and acceptance testing.
            </p>
          </div>
        </Section>

        <Section title="Tools I work with" id="skills">
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <Link href="/skills" className="text-link section-more-link">
            Explore all skills <span aria-hidden="true">↗</span>
          </Link>
        </Section>

        <Section title="A selection of my work" id="projects">
          <p className="section-intro">
            Projects and concepts shaped by real-world needs, from a municipal reporting
            system to tools for study and everyday organisation.
          </p>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="aquafix-notes">
            <h3>AquaFix · Project planning and analysis</h3>
            <p>
              Defined project objectives and deliverables, gathered stakeholder requirements,
              built a project plan, modelled system interactions in Visio, and created test
              cases for unit, integration, system, and acceptance testing.
            </p>
          </div>
          <Link href="/projects" className="text-link section-more-link">
            View project details <span aria-hidden="true">↗</span>
          </Link>
        </Section>

        <Section title="Learning with intention" id="education">
          <article className="education-card">
            <span className="education-icon" aria-hidden="true">TUT</span>
            <div>
              <span className="eyebrow">2023 – Present</span>
              <h3>Tshwane University of Technology</h3>
              <p className="education-qualification">Diploma in Informatics</p>
              <p>
                Completed all theoretical modules and currently applying my coursework in
                practical workplace settings through Work-Integrated Learning.
              </p>
            </div>
          </article>
        </Section>

        <Section title="Have a project or opportunity in mind?" id="contact" className="contact-section">
          <div className="contact-grid">
            <div className="contact-copy">
              <p>
                I&apos;m open to connecting about software development, collaboration, and
                opportunities to build useful technology.
              </p>
              <a className="contact-email" href="mailto:masangonicholas20@gmail.com">
                masangonicholas20@gmail.com
              </a>
              <div className="contact-details">
                <a href="tel:0713379855">071 337 9855</a>
                <a href="https://www.linkedin.com/in/nkosinathi-masango-b0a771393/" target="_blank" rel="noreferrer">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="contact-address">
                07 Aubrey Matlala Road, Soshanguve, 0152, Gauteng
              </p>
            </div>
            <ContactForm />
          </div>
        </Section>
      </div>
    </main>
  )
}
