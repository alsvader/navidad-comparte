import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { campaign, whatsappUrl } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { Container, Eyebrow, Illo, Section } from "./primitives"

export function PartnersSection() {
  return (
    <Section id="aliados" aria-labelledby="aliados-title">
      <Container>
        <Eyebrow variant="impact">Aliados</Eyebrow>
        <h2 id="aliados-title" className="mt-6 text-[40px] leading-[1.05] font-black text-forest md:text-[52px]">
          Esto lo hacemos <span className="text-coral">entre todos</span>
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-[30px]">
          Gracias a los negocios, empresas, comunidades y organizaciones que deciden sumar esfuerzos para hacer posible esta recolecta.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {campaign.partners.map((p) => {
            const tile = p.logo ? (
              <Image src={p.logo} alt={p.name} width={180} height={64} className="h-14 w-auto object-contain" />
            ) : (
              <span className="text-sm font-semibold text-ink/50">Logo · {p.name}</span>
            )
            return (
              <li key={p.name} className="flex h-24 items-center justify-center rounded-[20px] border-2 border-dashed border-line bg-white/60 p-4">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    {tile}
                  </a>
                ) : (
                  tile
                )}
              </li>
            )
          })}
        </ul>
        <div className="mt-5 flex flex-col items-center gap-4 rounded-[24px] bg-coral-soft p-6 text-center sm:flex-row sm:text-left">
          <Illo name="aliados-handshake" className="w-28" />
          <p className="font-display text-[28px] leading-tight font-black text-forest sm:border-l-2 sm:border-line sm:pl-6 md:text-[34px]">
            <span className="text-coral">Gracias</span> por hacer equipo con nosotros.
          </p>
        </div>
        <div className="mt-5 grid gap-5 rounded-[24px] bg-sky-soft p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
          <Illo name="aliados-gift-group" className="w-36" />
          <div className="md:border-l-2 md:border-line md:pl-6">
            <h3 className="text-[26px] font-extrabold text-forest">
              ¿Quieres <span className="text-coral">formar parte?</span>
            </h3>
            <p className="mt-1">Tu empresa, negocio, escuela, comunidad u organización también puede sumarse a la campaña.</p>
          </div>
          <a
            href={whatsappUrl("Hola, quiero sumarme como aliado de Navidad que se comparte.")}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "secondary" })}
          >
            Quiero sumarme como aliado <ArrowRight aria-hidden />
          </a>
        </div>
      </Container>
    </Section>
  )
}
