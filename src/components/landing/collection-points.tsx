import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react"
import { campaign, whatsappUrl } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { WhatsAppIcon } from "./brand-icons"
import { Container, Eyebrow, Illo, NewTab, Section } from "./primitives"

export function CollectionPoints() {
  const points = campaign.collectionPoints.filter((p) => p.active)
  return (
    <Section id="puntos-de-acopio" aria-labelledby="acopio-title" className="pt-16 md:pt-20">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal">
            <Eyebrow variant="action">Dónde donar</Eyebrow>
            <h2 id="acopio-title" className="t-section mt-7 text-forest">
              Encuentra un punto
              <br />
              de acopio cerca de ti
            </h2>
            <p className="t-lead mt-6">Puedes llevar tu juguete a cualquiera de nuestros puntos de acopio participantes.</p>
          </div>
          <Illo name="acopio-map" alt="Mapa con un pin de ubicación" className="reveal-late mx-auto w-full max-w-[300px] lg:mr-0" />
        </div>

        {points.length === 0 ? (
          <p className="mt-12 rounded-[28px] bg-golden-soft p-7 text-lg font-semibold">Muy pronto publicaremos los puntos de acopio.</p>
        ) : (
          /* Directorio en filas: crece con la lista real de puntos y se lee como una agenda, no como una cuadrícula de tarjetas. */
          <ul className="mt-12 grid gap-4">
            {points.map((p) => (
              <li
                key={p.id}
                className="reveal grid items-center gap-x-8 gap-y-5 rounded-[28px] bg-white p-4 sm:grid-cols-[168px_1fr] sm:p-5 lg:grid-cols-[200px_minmax(0,1.1fr)_minmax(0,1fr)_auto] lg:pr-8"
              >
                <div className="relative flex h-40 items-end justify-center rounded-[20px] bg-golden-soft px-4 pb-3 sm:h-36 lg:h-40">
                  <MapPin className="absolute top-3 left-3 size-7 fill-coral text-coral [&>circle]:fill-white" aria-hidden />
                  <Illo name={p.illustration} alt={`Ilustración de ${p.name}`} className="max-h-32 w-auto lg:max-h-36" />
                </div>
                <div>
                  <h3 className="text-[28px] leading-[1.05] font-extrabold tracking-[-0.02em] text-forest">{p.name}</h3>
                  <p className="mt-2 text-lg leading-snug">
                    {p.address}
                    <span className="block text-base text-ink/80">{p.city}</span>
                  </p>
                </div>
                <dl className="grid gap-3 text-base sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-3">
                    <dt className="sr-only">Horario</dt>
                    <Clock className="size-5 shrink-0 text-coral-strong" aria-hidden />
                    <dd className="tabular-nums">{p.schedule}</dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <dt className="sr-only">Fecha límite</dt>
                    <CalendarDays className="size-5 shrink-0 text-coral-strong" aria-hidden />
                    <dd>{p.deadline}</dd>
                  </div>
                </dl>
                <a
                  href={p.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }), "w-full sm:col-span-2 lg:col-span-1 lg:w-auto")}
                  aria-label={`Cómo llegar a ${p.name} (se abre en una pestaña nueva)`}
                >
                  Cómo llegar <ArrowRight aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-5 lg:text-right">
          <a href={campaign.allPointsMapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-display font-extrabold text-coral-strong underline-offset-4 hover:underline">
            Ver todos en el mapa <NewTab /> <ArrowRight className="size-5" aria-hidden />
          </a>
        </p>

        {/* Dos salidas alternativas en un mismo bloque, repartidas con espacio y sin divisor. */}
        <div className="reveal mt-12 grid gap-10 rounded-[32px] bg-forest-soft p-7 md:p-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon className="size-11" decorative />
            </span>
            <div>
              <h3 className="text-[26px] leading-[1.1] font-extrabold tracking-[-0.02em] text-forest">¿Ningún punto te queda cerca?</h3>
              <p className="mt-2 text-lg leading-[28px]">Escríbenos y coordinamos contigo otra forma de recibir tu donación.</p>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "secondary" }), "mt-6 w-full sm:w-auto")}>
                Coordinar por WhatsApp <NewTab /> <ArrowRight aria-hidden />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <Illo name="acopio-become-point-store" className="w-28 shrink-0" />
            <div>
              <h3 className="text-[26px] leading-[1.1] font-extrabold tracking-[-0.02em] text-forest">¿Tienes un espacio y quieres ayudarnos?</h3>
              <p className="mt-2 text-lg leading-[28px]">Conviértete en punto de acopio y ayúdanos a recibir más juguetes.</p>
              <a href={whatsappUrl("Hola, tengo un espacio y quiero ser punto de acopio de Navidad que se comparte.")} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "secondary" }), "mt-6 w-full sm:w-auto")}>
                Quiero ser punto de acopio <NewTab /> <ArrowRight aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
