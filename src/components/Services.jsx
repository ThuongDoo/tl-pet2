import { isImageValue } from '../utils/imgSrc'

export default function Services({ data }) {
  return (
    <section id="services" className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--c-600)]">{data.services.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800 md:text-3xl">{data.services.title}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.services.items.map((s, i) => (
            <div key={s.title} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <img
                src={isImageValue(s.image) ? s.image : `https://picsum.photos/seed/vet-service-${i}/400/260`}
                alt={s.title}
                loading="lazy"
                className="h-36 w-full object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="mb-1 text-sm font-semibold text-slate-800">{s.title}</h3>
                <p className="text-xs text-slate-500">{s.desc}</p>
                <a href="#" className="mt-2 inline-block text-xs font-semibold text-[var(--c-600)] hover:underline">Xem chi tiết →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
