'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { CTASection } from '@/components/sections/CTASection'
import { FAQS } from '@/constants/data'
import { cn } from '@/lib/utils'

function FAQItem({ faq }: { faq: typeof FAQS[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn('border rounded-sm transition-all duration-200', open ? 'border-brand-blue/30 bg-brand-blue/2' : 'border-brand-gray-mid bg-white')}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-body font-semibold text-brand-navy text-base">{faq.question}</span>
        <ChevronDown
          size={18}
          className={cn('text-brand-blue shrink-0 transition-transform duration-200', open && 'rotate-180')}
        />
      </button>
      {open && (
        <div className="px-6 pb-6">
          <div className="h-px bg-brand-gray-mid mb-4" />
          <p className="font-body text-sm text-brand-gray leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const categories = Array.from(new Set(FAQS.map((f) => f.category)))

  return (
    <>
      <PageHeader
        label="FAQ"
        title="Questions fréquentes"
        subtitle="Retrouvez les réponses aux questions les plus fréquemment posées par nos clients."
      />

      <section className="section-padding bg-brand-gray-light">
        <div className="container-main max-w-4xl">
          {categories.map((category) => {
            const faqs = FAQS.filter((f) => f.category === category)
            return (
              <div key={category} className="mb-12">
                <h2 className="font-body text-sm font-semibold text-brand-gray uppercase tracking-wider mb-5 flex items-center gap-3">
                  <span className="h-px flex-1 bg-brand-gray-mid" />
                  {category}
                  <span className="h-px flex-1 bg-brand-gray-mid" />
                </h2>
                <div className="flex flex-col gap-3">
                  {faqs.map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CTASection />
    </>
  )
}
