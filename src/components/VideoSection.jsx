export default function VideoSection({ data }) {
  const { video } = data
  return (
    <section className="py-14 text-white" style={{ background: 'var(--c-700)' }}>
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-2">
        <div className="text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--c-200)]">{video.eyebrow}</p>
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">{video.title}</h2>
          <p className="text-sm leading-relaxed text-[var(--c-50)]">{video.desc}</p>
        </div>
        <div className="flex aspect-video items-center justify-center rounded-2xl bg-black/25">
          <button
            type="button"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl text-[var(--c-700)] shadow-lg transition-transform hover:scale-110"
            aria-label="Phát video"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  )
}
