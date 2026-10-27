import type { Metadata, Viewport } from "next"
import { Inter, Nunito_Sans } from "next/font/google"
import "./globals.css"

const nunito = Nunito_Sans({ variable: "--font-nunito", subsets: ["latin"], weight: ["700", "800", "900"], display: "swap" })
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" })

const title = "100 regalos para 100 sonrisas | Huimanguillo 2026"
const description =
  "Súmate a nuestra recolecta navideña de juguetes en Huimanguillo, Tabasco. Queremos reunir 100 regalos para niñas y niños de una comunidad esta Navidad."

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  applicationName: "Navidad que se comparte",
  keywords: ["recolecta de juguetes", "Huimanguillo", "Tabasco", "Navidad 2026", "donar juguetes"],
  openGraph: { title, description, type: "website", locale: "es_MX", siteName: "Navidad que se comparte" },
  twitter: { card: "summary_large_image", title, description },
}

export const viewport: Viewport = { themeColor: "#184D3A" }

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${nunito.variable} ${inter.variable}`}>
      <body className="min-h-screen overflow-x-clip">{children}</body>
    </html>
  )
}
