import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react"
import { campaign, whatsappUrl } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { WhatsAppIcon } from "./brand-icons"
import { Container, Eyebrow, Illo, Section } from "./primitives"

export function CollectionPoints() {
  const points = campaign.collectionPoints.filter((p) => p.active)
  return (
    <Section id="puntos-de-acopio" aria-labelledby="acopio-title">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow variant="action">Dónde donar</Eyebrow>
            <h2 id="acopio-title" className="mt-6 text-[40px] leading-[1.05] font-black text-forest md:text-[56px]">
              Encuentra un punto <br />
              <span className="text-coral">de acopio</span> cerca de ti
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-[30px]">Puedes llevar tu juguete a cualquiera de nuestros puntos de acopio participantes.</p>
          </div>
          <Illo name="acopio-map" alt="Mapa con un pin de ubicación" className="mx-auto w-full max-w-[320px]" />
        </div>

        {points.length === 0 ? (
          <p className="mt-10 rounded-[24px] bg-golden-soft p-6 text-lg font-semibold">Muy pronto publicaremos los puntos de acopio.</p>
        ) : (
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {points.map((p) => (
              <li key={p.id} className="flex flex-col rounded-[24px] border-2 border-golden/40 bg-white/60 p-6">
                <div className="relative flex h-40 items-end justify-center">
                  <MapPin className="absolute top-0 left-0 size-9 fill-coral text-coral [&>circle]:fill-white" aria-hidden />
                  <Illo name={p.illustration} alt={`Ilustración de ${p.name}`} className="max-h-36 w-auto" />
                </div>
                <h3 className="mt-5 text-[24px] font-extrabold text-forest">{p.name}</h3>
                <dl className="mt-3 space-y-2 text-[15px]">
                  <div className="flex gap-3">
                    <dt className="sr-only">Dirección</dt>
                    <MapPin className="mt-0.5 size-5 shrink-0 text-coral" aria-hidden />
                    <dd>
                      {p.address}
                      <br />
                      {p.city}
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="sr-only">Horario</dt>
                    <Clock className="size-5 shrink-0 text-coral" aria-hidden />
                    <dd>{p.schedule}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="sr-only">Fecha límite</dt>
                    <CalendarDays className="size-5 shrink-0 text-coral" aria-hidden />
                    <dd>{p.deadline}</dd>
                  </div>
                </dl>
                <a
                  href={p.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }), "mt-6 w-full")}
                  aria-label={`Cómo llegar a ${p.name}`}
                >
                  Cómo llegar <ArrowRight aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-6 text-center">
          <a href={campaign.allPointsMapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-display font-extrabold text-coral hover:underline">
            Ver todos en el mapa <ArrowRight className="size-5" aria-hidden />
          </a>
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-[24px] bg-forest-soft p-6 sm:flex-row sm:items-center">
            <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon className="size-11" />
            </span>
            <div>
              <h3 className="text-[22px] font-extrabold text-forest">¿Ningún punto te queda cerca?</h3>
              <p className="mt-1">Escríbenos y coordinamos contigo otra forma de recibir tu donación.</p>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "secondary" }), "mt-4 w-full sm:w-auto")}>
                Coordinar por WhatsApp <ArrowRight aria-hidden />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-[24px] bg-golden-soft p-6 sm:flex-row sm:items-center">
            <Illo name="acopio-become-point-store" className="w-28 shrink-0" />
            <div>
              <h3 className="text-[22px] font-extrabold text-forest">¿Tienes un espacio y quieres ayudarnos?</h3>
              <p className="mt-1">Conviértete en punto de acopio y ayúdanos a recibir más juguetes.</p>
              <a href={whatsappUrl("Hola, tengo un espacio y quiero ser punto de acopio de Navidad que se comparte.")} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "secondary" }), "mt-4 w-full sm:w-auto")}>
                Quiero ser punto de acopio <ArrowRight aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
