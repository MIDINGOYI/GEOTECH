// ============================================================
// WHATSAPP UTILITIES — GEOTECH ENGINEERING BENIN
// ============================================================

import { WHATSAPP_CONFIG } from '@/constants'

/**
 * Génère un lien WhatsApp avec message pré-rempli
 */
export function generateWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message.trim())
  return `${WHATSAPP_CONFIG.baseUrl}/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`
}

/**
 * Message pour demande d'achat de produit
 */
export function generateBuyMessage(productName: string): string {
  return `Bonjour,

Je suis intéressé(e) par l'achat du produit *${productName}*.

Merci de me communiquer :
• Le prix
• La disponibilité
• Les modalités de livraison

Cordialement.`
}

/**
 * Message pour demande de location de produit
 */
export function generateRentMessage(productName: string): string {
  return `Bonjour,

Je souhaite louer le produit *${productName}*.

Merci de me communiquer :
• Les tarifs de location
• Les disponibilités
• Les conditions de location

Cordialement.`
}

/**
 * Message pour demande de devis de prestation
 */
export function generateServiceMessage(serviceName: string): string {
  return `Bonjour,

Je souhaite obtenir un devis concernant le service *${serviceName}*.

Merci de me contacter afin que nous puissions discuter de mon projet.

Cordialement.`
}

/**
 * Message de contact général
 */
export function generateContactMessage(subject?: string): string {
  const base = subject
    ? `Bonjour,\n\nJe vous contacte au sujet de : *${subject}*.\n\n`
    : `Bonjour,\n\nJe souhaite obtenir des informations sur vos services.\n\n`
  return base + `Cordialement.`
}

/**
 * Lien WhatsApp pour achat produit
 */
export function buyProductLink(productName: string): string {
  return generateWhatsAppLink(generateBuyMessage(productName))
}

/**
 * Lien WhatsApp pour location produit
 */
export function rentProductLink(productName: string): string {
  return generateWhatsAppLink(generateRentMessage(productName))
}

/**
 * Lien WhatsApp pour demande de service
 */
export function requestServiceLink(serviceName: string): string {
  return generateWhatsAppLink(generateServiceMessage(serviceName))
}

/**
 * Lien WhatsApp de contact général
 */
export function contactLink(subject?: string): string {
  return generateWhatsAppLink(generateContactMessage(subject))
}
