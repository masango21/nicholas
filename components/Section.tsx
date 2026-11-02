import { ReactNode } from 'react'

export default function Section({
  title,
  id,
  children,
  className,
}: {
  title: string
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`content-section ${className ?? ''}`}>
      <div className="section-heading">
        <p className="eyebrow">A little more about me</p>
        <h2>{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  )
}
