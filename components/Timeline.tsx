type TimelineItem = {
  year: string
  title: string
  subtitle: string
}

const timeline: TimelineItem[] = [
  { year: '2025', title: 'Professional milestone', subtitle: 'Short description of an achievement.' },
  { year: '2024', title: 'Previous role', subtitle: 'Summary of past experience.' },
]

export default function Timeline() {
  return (
    <div className="space-y-6">
      {timeline.map((item) => (
        <div key={item.year} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-400">{item.year}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-slate-300">{item.subtitle}</p>
        </div>
      ))}
    </div>
  )
}
