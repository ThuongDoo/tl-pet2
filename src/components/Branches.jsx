export default function Branches({ data }) {
  return (
    <section id="branches" className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--c-600)]">{data.branches.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800 md:text-3xl">{data.branches.title}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.branches.items.map((b) => (
            <div key={b.name} className="rounded-xl border border-slate-100 bg-white p-5 text-left shadow-sm">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--c-600)]">{b.city}</p>
              <h3 className="mb-2 text-sm font-semibold text-slate-800">{b.name}</h3>
              <p className="mb-1 text-xs text-slate-500">📍 {b.address}</p>
              <p className="mb-1 text-xs text-slate-500">📞 {b.phone}</p>
              <p className="mb-3 text-xs text-slate-500">🕐 {b.hours}</p>
              <div className="flex gap-2">
                <a href="#" className="rounded-full bg-[var(--c-600)] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[var(--c-700)]">Đặt lịch</a>
                <a href="#" className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">Chỉ đường</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
