export default function Gallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="aspect-[4/3] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70" />
      ))}
    </div>
  )
}
