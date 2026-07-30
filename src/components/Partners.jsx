import { isImageValue } from '../utils/imgSrc'

export default function Partners({ data }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
        {data.partners.eyebrow}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale">
        {data.partners.items.map((p, i) => (
          <div
            key={p.name || i}
            className="flex h-12 w-28 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-400"
          >
            {isImageValue(p.logo) ? (
              <img src={p.logo} alt={p.name} className="h-full w-full object-contain" />
            ) : (
              p.name || `Partner ${i + 1}`
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
