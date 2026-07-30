import { isImageValue } from '../utils/imgSrc'

export default function Footer({ data }) {
  const hasLogoImg = isImageValue(data.brand.logo)

  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-4">
        <div>
          <p className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
            {hasLogoImg ? (
              <img src={data.brand.logo} className="h-6 w-6 rounded-full object-cover" alt={data.brand.brand} />
            ) : (
              <span className="text-2xl">{data.brand.logo || '🐾'}</span>
            )}
            {data.brand.brand}
          </p>
          <p className="text-sm leading-relaxed text-slate-400">{data.footer.desc}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">Liên hệ</p>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>📍 Hệ thống nhiều cơ sở toàn quốc</li>
            <li>📞 {data.brand.emergencyLabel}: {data.brand.phoneHanoi}</li>
            <li>✉️ {data.brand.email}</li>
            <li>🕐 {data.brand.hours}</li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">Hỗ trợ khách hàng</p>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#" className="hover:text-[var(--c-400)]">Hướng dẫn đặt lịch</a></li>
            <li><a href="#" className="hover:text-[var(--c-400)]">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-[var(--c-400)]">Điều khoản sử dụng</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">Kết nối</p>
          <div className="flex gap-3 text-xl">
            {data.brand.facebook && <a href={data.brand.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[var(--c-400)]">📘</a>}
            {data.brand.zalo && <a href={data.brand.zalo} target="_blank" rel="noreferrer" aria-label="Zalo" className="hover:text-[var(--c-400)]">💬</a>}
            {data.brand.youtube && <a href={data.brand.youtube} target="_blank" rel="noreferrer" aria-label="Youtube" className="hover:text-[var(--c-400)]">▶️</a>}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-slate-800 px-4 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {data.brand.brand}. {data.footer.copyright}
      </div>
    </footer>
  )
}
