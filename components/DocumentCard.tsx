export default function DocumentCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-slate-200">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-300">{description}</p>
    </div>
  )
}
