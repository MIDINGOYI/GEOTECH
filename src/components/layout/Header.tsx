'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { NAV_ITEMS, SITE_CONFIG } from '@/constants'
import { contactLink } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-navy/98 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'bg-brand-navy'
      )}
      style={{ height: 'var(--nav-height)' }}
    >
      <div className="container-main h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group focus-ring rounded">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-blue rounded-sm flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2 16L9 2L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.5 11H13.5" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="9" cy="9" r="1.5" fill="#22D3EE" />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-white text-base leading-none tracking-wide">
                GEOTECH
              </span>
              <span className="block font-body text-brand-cyan text-[9px] font-medium tracking-[0.2em] uppercase leading-none mt-0.5">
                Engineering Bénin
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="relative">
              {'children' in item && item.children ? (
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  className={cn(
                    'flex items-center gap-1 px-3.5 py-2 font-body text-sm font-medium rounded-sm transition-colors',
                    'focus-ring',
                    pathname.startsWith('/services')
                      ? 'text-brand-cyan'
                      : 'text-white/80 hover:text-white'
                  )}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={cn('transition-transform duration-200', activeDropdown === item.label && 'rotate-180')}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'px-3.5 py-2 font-body text-sm font-medium rounded-sm transition-colors block focus-ring',
                    pathname === item.href
                      ? 'text-brand-cyan'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {'children' in item && item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-brand-navy border border-white/10 rounded-sm shadow-2xl py-2 z-50"
                    role="menu"
                  >
                    {'children' in item && item.children && item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className={cn(
                          'flex items-center gap-2 px-5 py-2.5 font-body text-sm transition-colors',
                          pathname === child.href
                            ? 'text-brand-cyan bg-white/5'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        )}
                      >
                        <span className="w-1 h-1 rounded-full bg-brand-cyan/60" />
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-body transition-colors"
          >
            <Phone size={14} />
            <span>{SITE_CONFIG.phone}</span>
          </a>
          <a
            href={contactLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs py-2.5 px-5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Devis WhatsApp
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white rounded-sm focus-ring"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-brand-navy border-t border-white/10 overflow-hidden"
          >
            <nav className="container-main py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-3 py-2.5 font-body text-sm font-medium rounded-sm transition-colors',
                      pathname === item.href ? 'text-brand-cyan bg-white/5' : 'text-white/80 hover:text-white'
                    )}
                  >
                    {item.label}
                  </Link>
                  {'children' in item && item.children && (
                    <div className="ml-4 flex flex-col gap-0.5 mt-1 mb-2">
                      {item.children && item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'flex items-center gap-2 px-3 py-2 font-body text-xs font-medium rounded-sm transition-colors',
                            pathname === child.href ? 'text-brand-cyan' : 'text-white/60 hover:text-white'
                          )}
                        >
                          <span className="w-1 h-1 rounded-full bg-brand-cyan/60" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <a
                  href={contactLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-sm"
                >
                  Demander un devis WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
