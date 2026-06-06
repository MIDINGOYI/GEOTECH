'use client'

import { useCallback } from 'react'
import {
  buyProductLink,
  rentProductLink,
  requestServiceLink,
  contactLink,
  generateWhatsAppLink,
} from '@/lib/whatsapp'

/**
 * Hook centralisant la génération de liens WhatsApp
 * pour tous les CTA du site GEOTECH Engineering Bénin
 */
export function useWhatsApp() {
  const openBuyProduct = useCallback(
    (productName: string) => {
      window.open(buyProductLink(productName), '_blank', 'noopener,noreferrer')
    },
    []
  )

  const openRentProduct = useCallback(
    (productName: string) => {
      window.open(rentProductLink(productName), '_blank', 'noopener,noreferrer')
    },
    []
  )

  const openRequestService = useCallback(
    (serviceName: string) => {
      window.open(requestServiceLink(serviceName), '_blank', 'noopener,noreferrer')
    },
    []
  )

  const openContact = useCallback(
    (subject?: string) => {
      window.open(contactLink(subject), '_blank', 'noopener,noreferrer')
    },
    []
  )

  const openCustomMessage = useCallback(
    (message: string) => {
      window.open(generateWhatsAppLink(message), '_blank', 'noopener,noreferrer')
    },
    []
  )

  return {
    openBuyProduct,
    openRentProduct,
    openRequestService,
    openContact,
    openCustomMessage,
    links: {
      buyProductLink,
      rentProductLink,
      requestServiceLink,
      contactLink,
    },
  }
}
