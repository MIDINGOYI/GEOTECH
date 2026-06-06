'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
  label?: string
  title: string
  subtitle?: string
  backgroundImage?: string
  className?: string
  size?: 'default' | 'large'
}

export function PageHeader({
  label,
  title,
  subtitle,
  backgroundImage,
  className,
  size = 'default',
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        'relative bg-brand-navy overflow-hidden',
        size === 'large' ? 'pt-48 pb-28' : 'pt-40 pb-20',
        className
      )}
      aria-label={`En-tête — ${title}`}
    >
      {/* Background */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/95 to-brand-navy/90" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden="true" />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" aria-hidden="true" />

      {/* Left vertical accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent" aria-hidden="true" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {label && (
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-brand-cyan" />
              <span className="label-section">{label}</span>
            </div>
          )}
          <h1 className={cn('font-display font-bold text-white leading-tight', size === 'large' ? 'text-5xl md:text-6xl lg:text-7xl' : 'text-4xl md:text-5xl')}>
            {title}
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 font-body text-base md:text-lg text-white/60 max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
