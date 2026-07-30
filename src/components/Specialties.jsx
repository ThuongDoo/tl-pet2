export default function Specialties({ data }) {
  return (
    <section id="specialties" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--c-600)]">{data.specialties.eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-800 md:text-3xl">{data.specialties.title}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {data.specialties.items.map((s) => (
          <div key={s.title} className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-white py-6 text-center shadow-sm">
            <span className="text-3xl">{s.icon}</span>
            <p className="text-sm font-medium text-slate-700">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
