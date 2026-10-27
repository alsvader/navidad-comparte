import { ArrowRight } from "lucide-react"
import { campaign, getProgress } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container, Eyebrow, Illo, ProgressBar, Section } from "./primitives"

const milestones = [
  { value: 25, copy: "Primer cuarto.", illo: "meta-milestone-25" },
  { value: 50, copy: "Ya vamos a la mitad.", illo: "meta-milestone-50" },
  { value: 75, copy: "Estamos muy cerca.", illo: "meta-milestone-75" },
  { value: 100, copy: "¡Meta cumplida!", illo: "meta-milestone-100" },
] as const

export function GoalSection() {
  const p = getProgress()
  const reached = p.current >= p.goal
  return (
    <Section id="nuestra-meta" aria-labelledby="meta-title" background="golden">
      <Container>
        {/* El único encabezado centrado de la página: es el momento de la meta. */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <Eyebrow variant="impact" className="bg-white">Nuestra meta</Eyebrow>
          <h2 id="meta-title" className="t-section mt-7 text-forest">
            Vamos por <span className="text-coral-strong">{p.goal} regalos</span>
          </h2>
          <p className="t-lead mx-auto mt-6">
            Cada juguete suma y nos acerca a una meta muy sencilla: compartir esta Navidad con niñas y niños de una comunidad de Huimanguillo.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Illo name="meta-gift-pile" alt="Montaña de regalos con un oso, una pelota y un tren" className="reveal mx-auto w-full max-w-[460px]" />
          <div className="reveal-late">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <div>
                <p className="t-figure whitespace-nowrap text-[76px] sm:text-[104px] lg:text-[112px]">
                  <span className="text-coral-strong">{p.current}</span>
                  <span className="text-forest"> / {p.goal}</span>
                </p>
                <p className="mt-4 font-display text-2xl font-extrabold tracking-[-0.01em] text-forest">juguetes recolectados</p>
              </div>
              <div className="sm:pb-1 sm:text-right">
                <p className="font-display text-[28px] leading-[1.05] whitespace-nowrap font-black tracking-[-0.02em] text-forest">
                  {reached ? (
                    "¡Meta cumplida!"
                  ) : (
                    <>
                      Nos faltan <span className="text-coral-strong">{p.remaining} regalos</span>
                    </>
                  )}
                </p>
                <p className="mt-2 text-[15px] text-ink/80">Última actualización: {campaign.lastUpdated}</p>
              </div>
            </div>
            <ProgressBar current={p.current} goal={p.goal} className="mt-9 h-9 border-[3px] border-forest" />
            {/* Hitos ubicados en su porcentaje real sobre la barra. */}
            <ol className="relative mt-1 h-[132px]">
              {milestones.map((m) => (
                <li
                  key={m.value}
                  className={cn(
                    "absolute top-0 flex w-[84px] flex-col items-center text-center text-[13px] leading-tight sm:w-[104px] sm:text-[15px]",
                    m.value === 100 ? "right-0 w-[66px] items-end text-right sm:w-[104px]" : "-translate-x-1/2",
                    m.value === 75 && "w-[56px] sm:w-[104px]"
                  )}
                  style={m.value === 100 ? undefined : { left: `${m.value}%` }}
                >
                  <span className={cn("h-4 w-[3px] rounded-full bg-forest/60", m.value === 100 && "mr-4")} aria-hidden />
                  <Illo name={m.illo} className={cn("mt-1 w-8", m.value === 100 && "mr-1", p.current < m.value && "opacity-70")} />
                  <span className="mt-1 font-display font-black text-forest">{m.value}</span>
                  <span className="text-ink/90">{m.copy}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <p className="t-block text-forest">Cada regalo cuenta.</p>
              <a href="#puntos-de-acopio" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
                Quiero ayudar a llegar a {p.goal} <ArrowRight aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Illo name="deco-star-golden" className="absolute top-40 right-[8%] hidden w-10 md:block" />
      <Illo name="deco-heart-coral" className="absolute top-36 left-[7%] hidden w-8 md:block" />
      <Illo name="deco-rays-fan-a" className="absolute top-24 left-[22%] hidden w-14 lg:block" />
      <Illo name="deco-rays-fan-b" className="absolute top-24 right-[22%] hidden w-14 lg:block" />
    </Section>
  )
}
