export default function FloatingButtons({ data }) {
  const phoneHref = `tel:${(data.brand.phoneHanoi || '').replace(/\s/g, '')}`
  const buttons = [
    { label: 'Đặt lịch', href: '#booking', bg: 'bg-[var(--c-600)]', icon: '🗓️' },
    { label: 'Gọi ngay', href: phoneHref, bg: 'bg-emerald-500', icon: '📞' },
    { label: 'Zalo', href: data.brand.zalo || 'https://zalo.me', bg: 'bg-blue-500', icon: '💬' },
    { label: 'Chỉ đường', href: data.brand.mapUrl || 'https://maps.google.com', bg: 'bg-orange-500', icon: '📍' },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {buttons.map((b) => (
        <a
          key={b.label}
          href={b.href}
          target="_blank"
          rel="noreferrer"
          title={b.label}
          className={`${b.bg} flex h-12 w-12 items-center justify-center rounded-full text-xl text-white shadow-lg transition-transform hover:scale-110`}
        >
          <span aria-hidden="true">{b.icon}</span>
          <span className="sr-only">{b.label}</span>
        </a>
      ))}
    </div>
  )
}
