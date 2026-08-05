import { ReactNode } from 'react'

export default function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  )
}
