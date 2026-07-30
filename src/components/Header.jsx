import { useState } from 'react'
import { isImageValue } from '../utils/imgSrc'

const navItems = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Giới thiệu', href: '#mission' },
  { label: 'Chuyên khoa', href: '#specialties' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Đội ngũ bác sĩ', href: '#team' },
  { label: 'Cơ sở', href: '#branches' },
  { label: 'Tin tức', href: '#news' },
]

export default function Header({ data }) {
  const [open, setOpen] = useState(false)
  const hasLogoImg = isImageValue(data.brand.logo)

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold text-[var(--c-700)]">
          {hasLogoImg ? (
            <img src={data.brand.logo} className="h-8 w-8 rounded-full object-cover" alt={data.brand.brand} />
          ) : (
            <span className="text-2xl">{data.brand.logo || '🐾'}</span>
          )}
          {data.brand.brand}
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-[var(--c-700)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <div className="text-right text-xs text-slate-500">
            <p className="font-semibold text-[var(--c-700)]">{data.brand.emergencyLabel}</p>
            <p>Hà Nội: {data.brand.phoneHanoi} · TP.HCM: {data.brand.phoneHcm}</p>
          </div>
          <a
            href="#booking"
            className="rounded-full bg-[var(--c-600)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--c-700)]"
          >
            {data.brand.bookingCta}
          </a>
        </div>

        <button
          type="button"
          className="text-2xl xl:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Mở menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 py-3 xl:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[var(--c-600)] px-4 py-2 text-center text-sm font-semibold text-white"
          >
            {data.brand.bookingCta}
          </a>
        </nav>
      )}
    </header>
  )
}
