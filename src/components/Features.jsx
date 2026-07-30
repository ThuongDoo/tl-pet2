export default function Features({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.features.items.map((f) => (
          <div key={f.title} className="flex gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="text-3xl">{f.icon}</div>
            <div>
              <h3 className="mb-1 text-sm font-semibold text-slate-800">{f.title}</h3>
              <p className="text-xs leading-relaxed text-slate-500">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
