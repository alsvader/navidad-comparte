import type { Metadata, Viewport } from "next"
import { Inter, Nunito_Sans } from "next/font/google"
import "./globals.css"

const nunito = Nunito_Sans({ variable: "--font-nunito", subsets: ["latin"], weight: ["700", "800", "900"], display: "swap" })
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" })

const siteName = "Navidad que se comparte"
const title = "100 regalos para 100 sonrisas | Huimanguillo 2026"
const description =
  "Súmate a nuestra recolecta navideña de juguetes en Huimanguillo, Tabasco. Queremos reunir 100 regalos para niñas y niños de una comunidad esta Navidad."

/**
 * URL pública del sitio. Dominio provisional: https://navidad-comparte.vercel.app (sin barra final).
 * Define `NEXT_PUBLIC_SITE_URL` para sobrescribirlo cuando haya dominio definitivo.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://navidad-comparte.vercel.app"

// La imagen para compartir (1200×630) y su texto alternativo viven en
// `opengraph-image.png`, `twitter-image.png` y sus `*.alt.txt`; Next.js agrega
// og:image / twitter:image (con ancho, alto, tipo y alt) automáticamente.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${siteName}` },
  description,
  applicationName: siteName,
  keywords: [
    "recolecta de juguetes",
    "colecta de juguetes",
    "donar juguetes",
    "Navidad 2026",
    "Huimanguillo",
    "Tabasco",
    "Navidad que se comparte",
    "juguetes para niñas y niños",
  ],
  category: "charity",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName, title, description, locale: "es_MX" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false, email: false, address: false },
}

export const viewport: Viewport = { themeColor: "#184D3A", colorScheme: "light" }

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${nunito.variable} ${inter.variable}`}>
      <body className="min-h-screen overflow-x-clip">{children}</body>
    </html>
  )
}
