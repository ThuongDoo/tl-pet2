import { useState } from 'react'
import { isImageValue } from '../utils/imgSrc'

export default function Hero({ data }) {
  const { hero } = data
  const locations = data.branches.items.map((b) => b.name).filter(Boolean)
  const services = data.services.items.map((s) => s.title).filter(Boolean)
  const [form, setForm] = useState({ location: '', service: '', date: '', name: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="home"
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(4,40,70,0.7), rgba(4,40,70,0.7)), url('${
          isImageValue(hero.image) ? hero.image : 'https://picsum.photos/seed/vet-hero/1600/900'
        }')`,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--c-100)]">
          {hero.eyebrow}
        </p>
        <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">{hero.title}</h1>
        <p className="mx-auto mb-10 max-w-2xl text-sm text-[var(--c-50)] md:text-base">{hero.desc}</p>
      </div>

      <div id="booking" className="mx-auto max-w-4xl -translate-y-6 px-4">
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-2xl bg-white p-6 text-left text-slate-700 shadow-xl md:grid-cols-5 md:items-end"
        >
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-semibold text-slate-500">Cơ sở</label>
            <select name="location" value={form.location} onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
              <option value="">Chọn cơ sở</option>
              {locations.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-semibold text-slate-500">Dịch vụ</label>
            <select name="service" value={form.service} onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm">
              <option value="">Chọn dịch vụ</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-semibold text-slate-500">Ngày hẹn</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-semibold text-slate-500">Số điện thoại</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="09xx xxx xxx" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" />
          </div>
          <button type="submit" className="rounded-lg bg-[var(--c-600)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--c-700)] md:col-span-1">
            {hero.cta}
          </button>

          {submitted && (
            <p className="text-sm font-medium text-emerald-600 md:col-span-5">
              Cảm ơn bạn! Đây là bản demo — yêu cầu đặt lịch chưa được gửi đi thật.
            </p>
          )}
        </form>
      </div>
      <div className="h-6" />
    </section>
  )
}
