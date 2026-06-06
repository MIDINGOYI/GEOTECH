import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />

      <div className="relative z-10 text-center max-w-lg">
        {/* 404 graphic */}
        <div className="relative mb-8 inline-block">
          <span className="font-display text-[160px] font-bold text-white/5 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg width="28" height="28" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M2 16L9 2L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.5 11H13.5" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="9" cy="9" r="1.5" fill="#22D3EE" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <span className="label-section block mb-4">Erreur 404</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Page introuvable
        </h1>
        <p className="font-body text-white/50 text-base leading-relaxed mb-10">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Retournez à l&apos;accueil pour continuer votre navigation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home size={16} />
            Retour à l&apos;accueil
          </Link>
          <Link href="/contact" className="btn-outline-white">
            <ArrowLeft size={16} />
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  )
}
