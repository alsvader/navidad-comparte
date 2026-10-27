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
        <div className="reveal grid items-end gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16" data-stagger data-stagger-step="140">
          <div>
            <Eyebrow variant="impact">Aliados</Eyebrow>
            <h2 id="aliados-title" className="t-section mt-7 text-forest">
              Esto lo hacemos entre todos
            </h2>
          </div>
          <p className="t-lead">
            Gracias a los negocios, empresas, comunidades y organizaciones que deciden sumar esfuerzos para hacer posible esta recolecta.
          </p>
        </div>
        <ul className="reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {campaign.partners.map((p) => {
            const tile = p.logo ? (
              <Image src={p.logo} alt={p.name} width={180} height={64} className="h-14 w-auto object-contain" />
            ) : (
              <span className="text-[15px] font-semibold text-ink/75">Logo · {p.name}</span>
            )
            return (
              <li key={p.name} className="flex h-24 items-center justify-center rounded-[20px] bg-white p-4">
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
        <div className="mt-5 grid grid-cols-[minmax(0,1fr)] gap-5 lg:grid-cols-[1.15fr_1fr]">
          <div className="reveal relative flex flex-col items-start gap-6 overflow-hidden rounded-[32px] bg-coral-soft p-7 sm:flex-row sm:items-center md:p-10">
            <Illo name="aliados-handshake" className="w-32 shrink-0 md:w-40" />
            <p className="font-display text-[34px] leading-[1] font-black tracking-[-0.03em] text-forest md:text-[48px]">
              <span className="text-coral-strong">Gracias</span> por hacer equipo con nosotros.
            </p>
            <Illo name="deco-rays-fan-a" className="m-twinkle absolute top-4 right-6 hidden w-12 sm:block" />
          </div>
          <div className="reveal-late lift flex flex-col justify-between gap-6 rounded-[32px] bg-white p-6 sm:p-7 md:p-10">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
              <Illo name="aliados-gift-group" className="w-32 shrink-0" />
              <div>
                <h3 className="t-block text-forest">¿Quieres formar parte?</h3>
                <p className="mt-2 text-lg leading-[28px]">Tu empresa, negocio, escuela, comunidad u organización también puede sumarse a la campaña.</p>
              </div>
            </div>
            <a
              href={whatsappUrl("Hola, quiero sumarme como aliado de Navidad que se comparte.")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full sm:w-auto")}
            >
              Quiero sumarme como aliado <NewTab /> <ArrowRight aria-hidden />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
