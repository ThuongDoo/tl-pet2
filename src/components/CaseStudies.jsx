import { isImageValue } from '../utils/imgSrc'

export default function CaseStudies({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--c-600)]">{data.caseStudies.eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-800 md:text-3xl">{data.caseStudies.title}</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.caseStudies.items.map((c, i) => (
          <div key={c.title} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
            <img
              src={isImageValue(c.image) ? c.image : `https://picsum.photos/seed/vet-case-${i}/400/260`}
              alt={c.title}
              loading="lazy"
              className="h-32 w-full object-cover"
            />
            <div className="p-4 text-left">
              <span className="mb-2 inline-block rounded-full bg-[var(--c-100)] px-2 py-0.5 text-[11px] font-semibold text-[var(--c-700)]">{c.tag}</span>
              <h3 className="text-sm font-semibold text-slate-800">{c.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
