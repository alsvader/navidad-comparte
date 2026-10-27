import { Mail } from "lucide-react"
import { campaign, navLinks, whatsappUrl } from "@/content/campaign.config"
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./brand-icons"
import { Container, Illo } from "./primitives"

const explora = [...navLinks.slice(0, 3), { label: "Nuestra meta", href: "#nuestra-meta" }, ...navLinks.slice(3)]
const participa = [
  { label: "Donar un juguete", href: "#puntos-de-acopio" },
  { label: "Ser punto de acopio", href: "#otras-formas" },
  { label: "Sumar a mi organización", href: "#otras-formas" },
  { label: "Ser voluntario", href: "#otras-formas" },
  { label: "Contactarnos", href: `mailto:${campaign.contact.email}` },
]

export function Footer() {
  const c = campaign.contact
  return (
    <footer className="relative bg-forest text-cream">
      <Container className="border-t-2 border-cream/10 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:divide-x-2 lg:divide-cream/10">
          <div className="lg:pr-8">
            <Illo name="footer-logo-lockup" alt="Navidad que se comparte · Huimanguillo, Tabasco" className="w-[240px]" />
            <p className="mt-5 text-[15px] leading-6 text-cream/90">
              Una iniciativa comunitaria para reunir juguetes y compartir esta Navidad con niñas y niños de una comunidad de Huimanguillo.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={c.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex size-11 items-center justify-center rounded-full bg-cream text-forest hover:bg-golden">
                <InstagramIcon className="size-5" />
              </a>
              <a href={c.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex size-11 items-center justify-center rounded-full bg-cream text-forest hover:bg-golden">
                <FacebookIcon className="size-5" />
              </a>
            </div>
          </div>
          <nav aria-labelledby="f-explora" className="lg:px-8">
            <h2 id="f-explora" className="font-display text-xl font-black text-golden">Explora</h2>
            <ul className="mt-4 space-y-1">
              {explora.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-block py-1 text-cream/90 hover:text-golden">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="f-participa" className="lg:px-8">
            <h2 id="f-participa" className="font-display text-xl font-black text-golden">Participa</h2>
            <ul className="mt-4 space-y-1">
              {participa.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="inline-block py-1 text-cream/90 hover:text-golden">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="relative lg:pl-8">
            <h2 className="font-display text-xl font-black text-golden">Contacto</h2>
            <ul className="mt-4 space-y-6">
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-golden">
                  <span className="flex size-12 items-center justify-center rounded-full bg-cream text-[#25D366]">
                    <WhatsAppIcon className="size-7" />
                  </span>
                  <span>
                    <span className="block font-bold">WhatsApp</span>
                    {c.whatsappDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${c.email}`} className="flex items-center gap-4 hover:text-golden">
                  <span className="flex size-12 items-center justify-center rounded-full bg-cream text-forest">
                    <Mail className="size-6" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold">Correo</span>
                    <span className="break-all">{c.email}</span>
                  </span>
                </a>
              </li>
            </ul>
            <Illo name="footer-deco-star-heart" className="absolute -bottom-4 right-0 hidden w-16 lg:block" />
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 border-t-2 border-cream/15 pt-6 text-center text-sm lg:flex-row lg:justify-between lg:text-left">
          <p className="font-bold">Huimanguillo, Tabasco · Navidad {campaign.year}</p>
          <p className="flex items-center gap-2 text-cream/85">
            <Illo name="misc-gift-sparkle" className="w-7" />
            Hecho con el apoyo de todas las personas que decidieron sumarse.
          </p>
          <p className="flex items-center gap-4 font-semibold">
            <a id="aviso-de-privacidad" href={c.privacyUrl} className="py-2 hover:text-golden">Aviso de privacidad</a>
            <span aria-hidden className="text-cream/40">|</span>
            <a href={`mailto:${c.email}`} className="py-2 hover:text-golden">Contacto</a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
