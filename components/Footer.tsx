'use client'
import { dict, type Locale } from '@/lib/i18n'

export default function Footer({ locale }: { locale: Locale }) {
  const t = dict[locale]
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold">{t.brand}</div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{t.footer_about}</p>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-2 space-y-1">
            <li><a className="underline decoration-dotted" href="mailto:info@altayyarcargo.com">info@altayyarcargo.com</a></li>
            <li><a className="underline decoration-dotted" href="https://wa.me/966502506703" target="_blank" rel="noreferrer">0502506703 (WhatsApp)</a></li>
            <li><a className="underline decoration-dotted" href="https://www.google.com/maps/place/AL+Tayyar+Cargo+Services+Tabuk" target="_blank" rel="noreferrer">Google Map</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Links</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#trust" className="hover:underline">Trust</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-xs text-gray-500">
        © {year} {t.brand}. {t.rights}
      </div>
    </footer>
  )
}
