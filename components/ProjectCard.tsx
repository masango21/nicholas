type ProjectCardProps = {
  title: string
  description: string
  liveUrl?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <article className={`project-card${featured ? ' project-card-featured' : ''}`}>
      <div className="project-card-art" aria-hidden="true">
        <span className="project-art-orb" />
        <span className="project-art-initial">{title.charAt(0)}</span>
        <span className="project-art-label">Selected work</span>
      </div>
      <div className="project-card-body">
        <div className="project-title-row">
          <h3>{title}</h3>
          {featured && <span className="project-featured-label">Featured</span>}
        </div>
        <p>{description}</p>
        {liveUrl && (
          <div className="project-links">
            <a href={liveUrl} target="_blank" rel="noreferrer">
              Live demo <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>
    </article>
  )
}
