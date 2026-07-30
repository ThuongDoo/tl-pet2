import { isImageValue } from '../utils/imgSrc'

export default function News({ data }) {
  return (
    <section id="news" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--c-600)]">{data.news.eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-800 md:text-3xl">{data.news.title}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {data.news.items.map((p, i) => (
          <article key={p.title} className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
            <img
              src={isImageValue(p.image) ? p.image : `https://picsum.photos/seed/vet-news-${i}/500/320`}
              alt={p.title}
              loading="lazy"
              className="h-40 w-full object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="mb-2 text-sm font-semibold text-slate-800">{p.title}</h3>
              <a href="#" className="text-xs font-semibold text-[var(--c-600)] hover:underline">Đọc thêm →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
