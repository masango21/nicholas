export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-semibold text-amber-200">Skills</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <section className="rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
            <h2 className="text-2xl font-semibold text-amber-100">Languages</h2>
            <p className="mt-3 text-amber-200">Java</p>
            <p className="text-amber-200">T-SQL</p>
          </section>
          <section className="rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
            <h2 className="text-2xl font-semibold text-amber-100">Technical Tools</h2>
            <p className="mt-3 text-amber-200">Visio</p>
            <p className="text-amber-200">Power BI</p>
            <p className="text-amber-200">SQL Server Management Studio</p>
            <p className="text-amber-200">VS Code</p>
            <p className="text-amber-200">Copilot</p>
          </section>
          <section className="rounded-3xl border border-amber-800 bg-neutral-900/80 p-6">
            <h2 className="text-2xl font-semibold text-amber-100">Office Tools</h2>
            <p className="mt-3 text-amber-200">Word</p>
            <p className="text-amber-200">PowerPoint</p>
            <p className="text-amber-200">Excel</p>
            <p className="text-amber-200">Teams</p>
            <p className="text-amber-200">Outlook</p>
            <p className="text-amber-200">OneDrive</p>
          </section>
        </div>
      </div>
    </main>
  )
}
