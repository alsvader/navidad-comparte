import { ArrowRight, Check, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container, Eyebrow, Illo, Section } from "./primitives"

const steps = [
  { n: "01", title: "Elige un juguete.", text: "Nuevo, sin envolver y apropiado para su edad.", illo: "donar-step-gift" },
  { n: "02", title: "Revisa las recomendaciones.", text: "Seguro, no bélico y preferentemente sin pilas.", illo: "donar-step-checklist" },
  { n: "03", title: "Llévalo a un punto de acopio.", text: "Consulta la ubicación que te quede más cerca.", illo: "donar-step-map-pin" },
] as const

const yes = ["Nuevo", "Sin envolver", "Seguro", "Apropiado para su edad", "Preferentemente sin pilas"]
const avoid = ["Juguetes bélicos", "Usados o incompletos", "Juguetes dañados", "Artículos inseguros"]
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
    <Section id="como-donar" aria-labelledby="donar-title">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow variant="action">Cómo participar</Eyebrow>
            <h2 id="donar-title" className="mt-6 text-[40px] leading-[1.05] font-black text-forest md:text-[56px]">
              Donar un juguete <br />
              <span className="text-coral">es muy fácil.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-[30px]">
              Solo necesitas elegir un juguete, revisar algunas recomendaciones y llevarlo a uno de nuestros puntos de acopio.
            </p>
          </div>
          <Illo name="donar-toy-box" alt="Caja de cartón llena de juguetes" className="mx-auto w-full max-w-[300px]" />
        </div>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="flex items-center justify-between gap-4 rounded-[24px] border-2 border-golden/40 bg-white/60 p-6">
              <div>
                <span className="font-display text-5xl font-black text-coral">{s.n}</span>
                <h3 className="mt-2 text-[22px] leading-tight font-extrabold text-forest">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-ink/80">{s.text}</p>
              </div>
              <Illo name={s.illo} className="w-24 shrink-0 md:w-28" />
            </li>
          ))}
        </ol>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-[24px] bg-forest-soft p-6 sm:flex-row sm:items-center sm:gap-10">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-full bg-forest text-cream">
                <Check className="size-8" strokeWidth={3} aria-hidden />
              </span>
              <h3 className="text-2xl font-extrabold text-forest">Qué sí</h3>
            </div>
            <ul className="space-y-1.5">
              {yes.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="size-5 text-forest" strokeWidth={3} aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 rounded-[24px] bg-coral-soft p-6 sm:flex-row sm:items-center sm:gap-10">
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-full bg-coral text-white">
                <X className="size-8" strokeWidth={3} aria-hidden />
              </span>
              <h3 className="text-2xl font-extrabold text-forest">Qué evitar</h3>
            </div>
            <ul className="space-y-1.5">
              {avoid.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <X className="size-5 text-coral" strokeWidth={3} aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 grid gap-6 rounded-[24px] bg-sky-soft p-6 lg:grid-cols-[220px_1fr] lg:items-center">
          <div className="lg:border-r-2 lg:border-line lg:pr-6">
            <h3 className="text-[26px] leading-tight font-extrabold text-forest">¿No sabes qué elegir?</h3>
            <p className="mt-2 text-sm leading-[22px]">Aquí algunas ideas de juguetes que siempre alegran:</p>
          </div>
          <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {ideas.map((i) => (
              <li key={i.label} className="flex flex-col items-center gap-2 text-center text-sm font-medium">
                <span className="flex h-16 items-center">
                  <Illo name={i.illo} className="max-h-16 w-auto" />
                </span>
                {i.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-5 rounded-[24px] bg-golden-soft p-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <Illo name="deco-heart-rays" className="w-12" />
            <div>
              <p className="font-display text-[26px] leading-tight font-extrabold text-forest">¿Ya tienes tu juguete?</p>
              <p className="text-[15px]">Encuentra dónde entregarlo.</p>
            </div>
          </div>
          <a href="#puntos-de-acopio" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto sm:min-w-[280px]")}>
            Ver puntos de acopio <ArrowRight aria-hidden />
          </a>
        </div>
      </Container>
    </Section>
  )
}
