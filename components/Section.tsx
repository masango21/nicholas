import { ReactNode } from 'react'

export default function Section({ title, id, children, className }: { title: string; id?: string; children: ReactNode; className?: string }) {
  return (
    <section
      id={id}
      className={`snap-center scroll-mt-28 min-h-[calc(100vh-10rem)] flex flex-col justify-center rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-lg shadow-slate-950/20 ${className ?? ''}`}
    >
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-6 text-slate-300">{children}</div>
    </section>
  )
}
