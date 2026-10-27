import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { campaign, whatsappUrl } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container, Eyebrow, Illo, NewTab, Section } from "./primitives"

export function PartnersSection() {
  return (
    <Section id="aliados" aria-labelledby="aliados-title">
      <Container>
        <Eyebrow variant="impact">Aliados</Eyebrow>
        <div className="relative mt-6 w-fit">
          <h2 id="aliados-title" className="text-[40px] leading-[1.05] font-black text-forest md:text-[52px]">
            Esto lo hacemos <span className="text-coral">entre todos</span>
          </h2>
          <Illo name="deco-rays-fan-b" className="absolute -top-3 -right-14 hidden w-12 md:block" />
        </div>
        <p className="mt-4 max-w-[760px] text-lg leading-[30px]">
          Gracias a los negocios, empresas, comunidades y organizaciones que deciden sumar esfuerzos para hacer posible esta recolecta.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {campaign.partners.map((p) => {
            const tile = p.logo ? (
              <Image src={p.logo} alt={p.name} width={180} height={64} className="h-14 w-auto object-contain" />
            ) : (
              <span className="text-sm font-semibold text-ink/70">Logo · {p.name}</span>
            )
            return (
              <li key={p.name} className={cn("flex h-24 items-center justify-center rounded-[20px] border-2 border-line bg-white/60 p-4", p.logo ? "border-solid" : "border-dashed")}>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg transition-opacity hover:opacity-80">
                    {tile}
                  </a>
                ) : (
                  tile
                )}
              </li>
            )
          })}
        </ul>
        <div className="mt-5 relative flex flex-col items-center gap-4 rounded-[24px] bg-coral-soft p-6 text-center sm:flex-row sm:text-left">
          <Illo name="aliados-handshake" className="w-36 shrink-0" />
          <p className="font-display text-[28px] leading-tight font-black text-forest sm:flex-1 sm:border-l-2 sm:border-line sm:pl-6 sm:text-center md:text-[40px]">
            <span className="text-coral-strong">Gracias</span> por hacer equipo con nosotros.
          </p>
          <Illo name="deco-rays-fan-a" className="absolute top-3 right-6 hidden w-12 sm:block" />
        </div>
        <div className="mt-5 grid gap-5 rounded-[24px] bg-sky-tint p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
          <Illo name="aliados-gift-group" className="w-44" />
          <div className="md:border-l-2 md:border-line md:pl-6">
            <h3 className="text-[28px] leading-tight font-extrabold text-forest">
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
            Quiero sumarme como aliado <NewTab /> <ArrowRight aria-hidden />
          </a>
        </div>
      </Container>
    </Section>
  )
}
