/** Metadatos públicos del sitio: los comparten layout (Open Graph), robots, sitemap y /llms.txt. */
export const siteName = "Navidad que se comparte"
export const title = "100 regalos para 100 sonrisas | Huimanguillo 2026"
export const description =
  "Súmate a nuestra recolecta navideña de juguetes en Huimanguillo, Tabasco. Queremos reunir 100 regalos para niñas y niños de una comunidad esta Navidad."

/**
 * URL pública del sitio. Dominio provisional: https://navidad-comparte.vercel.app (sin barra final).
 * Define `NEXT_PUBLIC_SITE_URL` para sobrescribirlo cuando haya dominio definitivo.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://navidad-comparte.vercel.app").replace(/\/$/, "")
