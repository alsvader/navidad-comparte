import { ArrowRight } from "lucide-react"
import { getProgress } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CountUp } from "./count-up"
import { Container, Illo, ProgressBar } from "./primitives"

export function FinalCTA() {
  const p = getProgress()
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-forest py-20 text-cream md:py-32">
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <Illo name="cta-100-gift-pile" alt="El número 100 sobre una pila de regalos" className="reveal parallax order-2 mx-auto w-full max-w-[600px] lg:order-1 lg:-ml-6 [--px:20px]" />
        <div className="reveal-late order-1 lg:order-2" data-stagger>
          <div className="relative w-fit">
            <h2 id="cta-title" className="t-hero">
              ¿Nos ayudas <br />a llegar a <span className="text-coral-light">{p.goal}?</span>
            </h2>
            <Illo name="deco-heart-coral" className="m-pulse absolute -top-2 -right-10 hidden w-8 md:block" />
            <Illo name="deco-star-golden" className="m-twinkle absolute -bottom-3 -left-8 hidden w-8 md:block [--delay:-1.7s]" />
          </div>
          <p className="on-dark mt-6 t-lead text-cream leading-[1.7]">
            Cada juguete nos acerca un poco más a la meta y a compartir una Navidad especial con niñas y niños de Huimanguillo.
          </p>
          <div className="mt-10">
            <p className="t-figure">
              <span className="whitespace-nowrap">
                <CountUp value={p.current} className="text-[48px] text-coral-light sm:text-6xl md:text-[104px]" />
                <span className="text-[48px] sm:text-6xl md:text-[104px]"> / {p.goal}</span>
              </span>
              <span className="ml-3 font-display text-2xl font-extrabold tracking-normal">regalos</span>
            </p>
            <p className="mt-4 font-display text-xl font-extrabold">
              {p.remaining > 0 ? (
                <>
                  Nos faltan <span className="text-golden">{p.remaining}</span> para llegar a la meta.
                </>
              ) : (
                "¡Meta cumplida!"
              )}
            </p>
            <ProgressBar current={p.current} goal={p.goal} track="dark" className="mt-5 h-6" />
          </div>
          <a href="#puntos-de-acopio" data-magnetic className={cn(buttonVariants({ size: "lg" }), "mt-10 h-16 w-full text-xl")}>
            Quiero donar un juguete <ArrowRight aria-hidden />
          </a>
          <p className="mt-8 text-base text-cream/90">¿Quieres participar de otra manera?</p>
          <div className="mt-3">
            <a href="#otras-formas" className={cn(buttonVariants({ variant: "outline-light" }), "w-full sm:w-auto")}>
              Quiero sumarme <ArrowRight aria-hidden />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
