'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// ---- Section Label ----
interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'label-section',
        light ? 'text-brand-cyan/80' : 'text-brand-cyan',
        className
      )}
    >
      {children}
    </span>
  )
}

// ---- Section Heading ----
interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {label && <SectionLabel light={light} className="block mb-3">{label}</SectionLabel>}
      <h2
        className={cn(
          'heading-section',
          light ? 'text-white' : 'text-brand-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 font-body text-base md:text-lg leading-relaxed max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-white/60' : 'text-brand-gray'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ---- Animated Section ----
interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const initial = {
    opacity: 0,
    y: direction === 'up' ? 24 : 0,
    x: direction === 'left' ? -24 : direction === 'right' ? 24 : 0,
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ---- Stagger container ----
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ---- Counter animation ----
interface CounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, suffix = '', duration = 2, className }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
          const startTime = Date.now()
          const endTime = startTime + duration * 1000
          const tick = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / (duration * 1000), 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * value))
            if (now < endTime) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration, hasStarted])

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}
