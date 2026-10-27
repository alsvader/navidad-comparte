/**
 * Contenido editable de la campaña (docs/brief.md §38 y §42).
 * ⚠️ Los valores actuales son PLACEHOLDERS: verifícalos antes de publicar
 * (puntos de acopio, WhatsApp, correo, aliados, fechas y avance).
 */
import type { IllustrationName } from "./illustrations"

export type CampaignStatus = "preparation" | "active" | "goal-reached" | "completed"

export type CollectionPoint = {
  id: string
  name: string
  address: string
  city: string
  schedule: string
  deadline: string
  mapsUrl: string
  illustration: IllustrationName
  active: boolean
}

export type Community = {
  confirmed: boolean
  name?: string
  municipality: string
  estimatedChildren?: number
  ageRange?: string
  deliveryDate?: string
}

export type Partner = {
  name: string
  /** Ruta al logo autorizado. Vacío = tile placeholder. */
  logo?: string
  url?: string
}

export type CampaignResults = {
  toysCollected?: number
  toysDelivered?: number
  childrenBenefited?: number
  partners?: number
  collectionPoints?: number
}

export type Contact = {
  /** Número en formato internacional sin espacios, p. ej. 529171234567 */
  whatsappNumber: string
  whatsappDisplay: string
  email: string
  instagramUrl: string
  facebookUrl: string
  privacyUrl: string
}

export type Campaign = {
  year: number
  status: CampaignStatus
  goal: number
  current: number
  lastUpdated: string
  donationDeadline: string
  deliveryDate?: string
  community: Community
  collectionPoints: CollectionPoint[]
  allPointsMapUrl: string
  partners: Partner[]
  results?: CampaignResults
  contact: Contact
}

export const campaign: Campaign = {
  year: 2026,
  status: "active",
  goal: 100,
  current: 37,
  lastUpdated: "12 de diciembre de 2026",
  donationDeadline: "15 de diciembre",
  deliveryDate: "Diciembre 2026",
  community: {
    confirmed: false,
    municipality: "Huimanguillo, Tabasco",
    estimatedChildren: 100,
    deliveryDate: "Diciembre 2026",
  },
  collectionPoints: [
    {
      id: "cafe-la-esquina",
      name: "Café La Esquina",
      address: "Av. Juárez 123",
      city: "Centro, Huimanguillo",
      schedule: "Lun–Sáb · 8:00–20:00",
      deadline: "Recibe hasta el 15 de diciembre",
      mapsUrl: "https://maps.google.com/?q=Huimanguillo,+Tabasco",
      illustration: "acopio-coffee-shop",
      active: true,
    },
    {
      id: "papeleria-el-estudiante",
      name: "Papelería El Estudiante",
      address: "Calle Reforma 456",
      city: "Centro, Huimanguillo",
      schedule: "Lun–Vie · 9:00–19:00",
      deadline: "Recibe hasta el 15 de diciembre",
      mapsUrl: "https://maps.google.com/?q=Huimanguillo,+Tabasco",
      illustration: "acopio-stationery-shop",
      active: true,
    },
    {
      id: "plaza-huimanguillo",
      name: "Plaza Huimanguillo",
      address: "Carretera Federal Km 1",
      city: "Huimanguillo",
      schedule: "Lun–Dom · 10:00–21:00",
      deadline: "Recibe hasta el 15 de diciembre",
      mapsUrl: "https://maps.google.com/?q=Huimanguillo,+Tabasco",
      illustration: "acopio-plaza",
      active: true,
    },
  ],
  allPointsMapUrl: "https://maps.google.com/?q=Huimanguillo,+Tabasco",
  partners: [
    { name: "Aliado 1" },
    { name: "Aliado 2" },
    { name: "Aliado 3" },
    { name: "Aliado 4" },
    { name: "Aliado 5" },
    { name: "Aliado 6" },
    { name: "Aliado 7" },
    { name: "Aliado 8" },
    { name: "Aliado 9" },
    { name: "Aliado 10" },
  ],
  results: undefined,
  contact: {
    whatsappNumber: "529171234567",
    whatsappDisplay: "+52 917 123 4567",
    email: "hola@navidadquesecomparte.mx",
    instagramUrl: "https://instagram.com/",
    facebookUrl: "https://facebook.com/",
    privacyUrl: "#aviso-de-privacidad",
  },
}

/* ---------- Derivados (nunca duplicar 37 / 63 / 37 % a mano) ---------- */
export function getProgress(c: Campaign = campaign) {
  const remaining = Math.max(c.goal - c.current, 0)
  const percentage = Math.min(c.current / c.goal, 1)
  return { goal: c.goal, current: c.current, remaining, percentage, percent: Math.round(percentage * 100) }
}

export const whatsappUrl = (text = "Hola, quiero coordinar la entrega de un juguete para Navidad que se comparte.") =>
  `https://wa.me/${campaign.contact.whatsappNumber}?text=${encodeURIComponent(text)}`

export const navLinks = [
  { label: "La iniciativa", href: "#la-iniciativa" },
  { label: "Cómo donar", href: "#como-donar" },
  { label: "Puntos de acopio", href: "#puntos-de-acopio" },
  { label: "La comunidad", href: "#la-comunidad" },
  { label: "Aliados", href: "#aliados" },
  { label: "Transparencia", href: "#transparencia" },
] as const
