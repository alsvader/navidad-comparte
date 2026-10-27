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
    <Section id="nuestra-meta" aria-labelledby="meta-title">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow variant="impact">Nuestra meta</Eyebrow>
          <h2 id="meta-title" className="mt-6 text-[40px] leading-[1.05] font-black text-forest md:text-[60px]">
            Vamos por <span className="text-coral">{p.goal} regalos</span>
          </h2>
          <p className="mt-5 text-lg leading-[30px]">
            Cada juguete suma y nos acerca a una meta muy sencilla: compartir esta Navidad con niñas y niños de una comunidad de Huimanguillo.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.45fr]">
          <Illo name="meta-gift-pile" alt="Montaña de regalos con un oso, una pelota y un tren" className="mx-auto w-full max-w-[460px]" />
          <div>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <p className="font-display text-7xl leading-none font-black md:text-[96px]">
                  <span className="text-coral">{p.current}</span>
                  <span className="text-forest"> / {p.goal}</span>
                </p>
                <p className="mt-2 font-display text-2xl font-extrabold text-forest">juguetes recolectados</p>
              </div>
              <div className="flex items-center gap-4 rounded-[20px] bg-coral-soft p-5">
                <Illo name="misc-gift-sparkle" className="w-12" />
                <div>
                  <p className="font-display text-2xl leading-tight font-black text-forest">
                    {reached ? (
                      "¡Meta cumplida!"
                    ) : (
                      <>
                        Nos faltan <br />
                        <span className="text-coral-strong">{p.remaining} regalos</span>
                      </>
                    )}
                  </p>
                  <p className="mt-2 text-sm text-ink/80">
                    Última actualización: <br />
                    {campaign.lastUpdated}
                  </p>
                </div>
              </div>
            </div>
            <ProgressBar current={p.current} goal={p.goal} className="mt-8 h-9 border-[3px] border-forest" />
            <ol className="relative mt-3 grid grid-cols-4 gap-2">
              {milestones.map((m) => (
                <li key={m.value} className="flex flex-col items-center text-center text-[13px] leading-tight sm:text-sm">
                  <span className="h-5 border-l-2 border-dashed border-forest/60" aria-hidden />
                  <Illo name={m.illo} className={cn("mt-1 w-8", p.current < m.value && "opacity-70")} />
                  <span className="mt-1 font-display font-black text-forest">{m.value}</span>
                  <span>{m.copy}</span>
                </li>
              ))}
            </ol>
            <div className="mt-10 text-center">
              <p className="font-display text-[32px] font-black text-forest">Cada regalo cuenta.</p>
              <a href="#puntos-de-acopio" className={cn(buttonVariants({ size: "lg" }), "mt-5 w-full max-w-md")}>
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
