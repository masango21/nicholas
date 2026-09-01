type ProjectCardProps = {
  title: string
  description: string
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({ title, description, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-slate-200">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-300">{description}</p>

      {(liveUrl || githubUrl) && (
        <div className="mt-5 flex flex-wrap gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-amber-500 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-500/20"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-700"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  )
}
