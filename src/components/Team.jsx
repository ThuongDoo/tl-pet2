import { isImageValue } from '../utils/imgSrc'

export default function Team({ data }) {
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--c-600)]">{data.team.eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-800 md:text-3xl">{data.team.title}</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.team.items.map((t, i) => (
          <div key={t.name} className="overflow-hidden rounded-xl border border-slate-100 bg-white text-center shadow-sm">
            <img
              src={isImageValue(t.avatar) ? t.avatar : `https://picsum.photos/seed/vet-doctor-${i}/300/300`}
              alt={t.name}
              loading="lazy"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm font-semibold text-slate-800">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="#" className="text-sm font-semibold text-[var(--c-600)] hover:underline">Xem toàn bộ đội ngũ →</a>
      </div>
    </section>
  )
}
