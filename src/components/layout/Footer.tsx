import Link from 'next/link'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { SITE_CONFIG, NAV_ITEMS } from '@/constants'
import { SERVICES } from '@/constants/services'
import { contactLink } from '@/lib/whatsapp'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Pied de page</h2>

      {/* Main footer */}
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-brand-blue rounded-sm flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M2 16L9 2L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.5 11H13.5" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="9" cy="9" r="1.5" fill="#22D3EE" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-white text-base leading-none tracking-wide">GEOTECH</span>
                <span className="block font-body text-brand-cyan text-[9px] font-medium tracking-[0.2em] uppercase leading-none mt-0.5">Engineering Bénin</span>
              </div>
            </Link>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
              Cabinet d&apos;ingénierie spécialisé en topographie, géomatique, hydraulique et génie civil au Bénin.
            </p>
            <div className="flex flex-col gap-3">
              <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors">
                <Phone size={14} className="text-brand-cyan shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors">
                <Mail size={14} className="text-brand-cyan shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <span className="flex items-start gap-2.5 text-white/70 text-sm">
                <MapPin size={14} className="text-brand-cyan shrink-0 mt-0.5" />
                {SITE_CONFIG.address}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body text-sm font-bold text-white tracking-wide uppercase mb-5">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors font-body flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-cyan/50" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-sm font-bold text-white tracking-wide uppercase mb-5">Navigation</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_ITEMS.filter((item) => !item.children).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors font-body flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-cyan/50" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="font-body text-sm font-bold text-white tracking-wide uppercase mb-5">Contact Rapide</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Besoin d&apos;un devis ou d&apos;informations ? Contactez-nous directement sur WhatsApp.
            </p>
            <a
              href={contactLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-3 px-5 w-full justify-center mb-4"
            >
              <MessageCircle size={16} />
              Écrire sur WhatsApp
            </a>
            <p className="text-xs text-white/40 text-center">Réponse sous 24h</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 font-body">
            © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
          <p className="text-xs text-white/30 font-body">
            Topographie · Hydraulique · SIG · VRD · Évaluation Immobilière
          </p>
        </div>
      </div>
    </footer>
  )
}
