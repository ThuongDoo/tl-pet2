import { isImageValue } from '../utils/imgSrc'

export default function Community({ data }) {
  return (
    <section className="bg-[var(--c-50)] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--c-600)]">{data.community.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800 md:text-3xl">{data.community.title}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {data.community.items.map((a, i) => (
            <div key={a.title} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <img
                src={isImageValue(a.image) ? a.image : `https://picsum.photos/seed/vet-community-${i}/500/320`}
                alt={a.title}
                loading="lazy"
                className="h-40 w-full object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-sm font-semibold text-slate-800">{a.title}</h3>
                <a href="#" className="mt-2 inline-block text-xs font-semibold text-[var(--c-600)] hover:underline">Xem thêm →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
