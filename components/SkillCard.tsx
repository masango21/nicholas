export default function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-slate-200">
      {skill}
    </div>
  )
}
