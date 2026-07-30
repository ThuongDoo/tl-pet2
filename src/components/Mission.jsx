import { isImageValue } from '../utils/imgSrc'

export default function Mission({ data }) {
  const { mission } = data
  const image = isImageValue(mission.image) ? mission.image : 'https://picsum.photos/seed/vet-mission/700/500'

  return (
    <section id="mission" className="bg-[var(--c-50)] py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2">
        <img src={image} alt={mission.title} loading="lazy" className="rounded-2xl object-cover shadow-md" />
        <div className="text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--c-600)]">
            {mission.eyebrow}
          </p>
          <h2 className="mb-4 text-2xl font-bold text-slate-800 md:text-3xl">{mission.title}</h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-600">{mission.desc}</p>
          <a href="#specialties" className="inline-block rounded-full bg-[var(--c-600)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--c-700)]">
            {mission.button} →
          </a>
        </div>
      </div>
    </section>
  )
}
