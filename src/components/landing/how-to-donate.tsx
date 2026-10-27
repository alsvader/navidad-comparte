import { ArrowRight, Check, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { donationGuidelines } from "@/content/campaign.config"
import { cn } from "@/lib/utils"
import { Container, Eyebrow, Illo, Section } from "./primitives"

// La numeración es el orden real del proceso (brief §10), no decoración.
const steps = [
  { n: "01", title: "Elige un juguete.", text: "Nuevo, sin envolver y apropiado para su edad.", illo: "donar-step-gift" }, // taste-skill-ignore
  { n: "02", title: "Revisa las recomendaciones.", text: "Seguro, no bélico y preferentemente sin pilas.", illo: "donar-step-checklist" }, // taste-skill-ignore
  { n: "03", title: "Llévalo a un punto de acopio.", text: "Consulta la ubicación que te quede más cerca.", illo: "donar-step-map-pin" }, // taste-skill-ignore
] as const

const { yes, avoid } = donationGuidelines
const ideas = [
  { label: "Pelotas", illo: "donar-toy-ball" },
  { label: "Muñecos / peluches", illo: "donar-toy-teddy" },
  { label: "Carritos", illo: "donar-toy-car" },
  { label: "Rompecabezas", illo: "donar-toy-puzzle" },
  { label: "Bloques", illo: "donar-toy-blocks" },
  { label: "Juegos", illo: "donar-toy-board-game" },
  { label: "Material creativo", illo: "donar-toy-art-supplies" },
] as const

export function HowToDonate() {
  return (
    <>
      <Section id="como-donar" aria-labelledby="donar-title" className="pb-0 md:pb-0">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="reveal" data-stagger>
              <Eyebrow variant="action">Cómo participar</Eyebrow>
              <h2 id="donar-title" className="t-section mt-7 text-forest">
                Donar un juguete
                <br />
                es muy fácil.
              </h2>
              <p className="t-lead mt-6">
                Solo necesitas elegir un juguete, revisar algunas recomendaciones y llevarlo a uno de nuestros puntos de acopio.
              </p>
            </div>
            <Illo name="donar-toy-box" alt="Caja de cartón llena de juguetes" className="reveal-late parallax mx-auto w-full max-w-[300px] lg:mr-0 [--px:14px]" />
          </div>

          {/* Un solo panel con tres pasos: el orden se lee de corrido, no como tres tarjetas iguales. */}
          <ol className="reveal mt-14 grid gap-10 rounded-[32px] bg-white px-7 py-9 md:grid-cols-3 md:gap-8 md:px-10 md:py-12">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5 md:flex-col md:gap-6">
                <Illo name={s.illo} className="w-24 shrink-0 self-start md:h-28 md:w-auto" />
                <div>
                  <span className="t-figure block text-[44px] text-coral-strong md:text-[56px]">{s.n}</span>
                  <h3 className="mt-3 text-[24px] leading-[1.1] font-extrabold tracking-[-0.02em] text-forest">{s.title}</h3>
                  <p className="mt-2 text-base leading-[26px] text-ink/85">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="reveal mt-5 grid gap-5 lg:grid-cols-[1.1fr_1fr]" data-stagger data-stagger-step="140">
            <div className="rounded-[32px] bg-forest p-7 text-cream md:p-10">
              <h3 className="flex items-center gap-4 text-[32px] leading-none font-black tracking-[-0.02em] text-golden">
                <Check className="size-9" strokeWidth={3.5} aria-hidden /> Qué sí
              </h3>
              <ul className="mt-7 grid gap-x-8 gap-y-3 text-lg sm:grid-cols-2">
                {yes.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <Check className="size-5 shrink-0 text-golden" strokeWidth={3} aria-hidden /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[32px] bg-coral-soft p-7 md:p-10">
              <h3 className="flex items-center gap-4 text-[32px] leading-none font-black tracking-[-0.02em] text-forest">
                <X className="size-9 text-coral-strong" strokeWidth={3.5} aria-hidden /> Qué evitar
              </h3>
              <ul className="mt-7 grid gap-3 text-lg">
                {avoid.map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <X className="size-5 shrink-0 text-coral-strong" strokeWidth={3} aria-hidden /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>

        {/* Franja a todo el ancho: cambia el campo de color y cierra la sección. */}
        <div className="mt-20 bg-sky-field py-16 md:mt-28 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:items-center lg:gap-14">
              <div className="reveal" data-stagger>
                <h3 className="t-block text-forest">¿No sabes qué elegir?</h3>
                <p className="mt-3 text-base leading-[26px]">Aquí algunas ideas de juguetes que siempre alegran:</p>
              </div>
              <ul className="reveal-late grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
                {ideas.map((i) => (
                  <li key={i.label} className="flex flex-col items-center gap-3 text-center text-[15px] leading-tight font-semibold text-forest">
                    <span className="flex h-20 items-end">
                      <Illo name={i.illo} className="max-h-20 w-auto" />
                    </span>
                    {i.label}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </div>
      </Section>

      <section aria-labelledby="listo-title" className="bg-cream pt-14 md:pt-20">
        <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Illo name="deco-heart-rays" className="m-pulse w-14 shrink-0" />
            <div>
              <h3 id="listo-title" className="t-block text-forest">¿Ya tienes tu juguete?</h3>
              <p className="mt-1 text-lg">Encuentra dónde entregarlo.</p>
            </div>
          </div>
          <a href="#puntos-de-acopio" className={cn(buttonVariants({ size: "lg" }), "w-full md:w-auto md:min-w-[300px]")}>
            Ver puntos de acopio <ArrowRight aria-hidden />
          </a>
        </Container>
      </section>
    </>
  )
}
