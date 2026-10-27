import { ArrowRight } from "lucide-react"
import { getProgress } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container, Illo, ProgressBar } from "./primitives"

export function FinalCTA() {
  const p = getProgress()
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-forest py-16 text-cream md:py-24">
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <Illo name="cta-100-gift-pile" alt="El número 100 sobre una pila de regalos" className="order-2 mx-auto w-full max-w-[600px] lg:order-1 lg:-ml-6" />
        <div className="order-1 lg:order-2">
          <div className="relative w-fit">
            <h2 id="cta-title" className="text-[44px] leading-[1.02] font-black md:text-[72px]">
              ¿Nos ayudas <br />a llegar a <span className="text-coral-light">{p.goal}?</span>
            </h2>
            <Illo name="deco-heart-coral" className="absolute -top-2 -right-10 hidden w-8 md:block" />
            <Illo name="deco-star-golden" className="absolute -bottom-3 -left-8 hidden w-8 md:block" />
          </div>
          <p className="mt-5 text-lg leading-[30px] text-cream/90">
            Cada juguete nos acerca un poco más a la meta y a compartir una Navidad especial con niñas y niños de Huimanguillo.
          </p>
          <div className="mt-8 rounded-[24px] border-2 border-cream/15 bg-white/5 p-6">
            <p className="font-display leading-none font-black">
              <span className="whitespace-nowrap">
                <span className="text-[48px] text-coral-light sm:text-6xl md:text-[84px]">{p.current}</span>
                <span className="text-[48px] sm:text-6xl md:text-[84px]"> / {p.goal}</span>
              </span>
              <span className="ml-3 text-2xl font-extrabold">regalos</span>
            </p>
            <p className="mt-3 font-display text-lg font-extrabold">
              {p.remaining > 0 ? (
                <>
                  Nos faltan <span className="text-golden">{p.remaining}</span> para llegar a la meta.
                </>
              ) : (
                "¡Meta cumplida!"
              )}
            </p>
            <ProgressBar current={p.current} goal={p.goal} track="dark" className="mt-4 h-6 border-2 border-cream/40" />
          </div>
          <a href="#puntos-de-acopio" className={cn(buttonVariants({ size: "lg" }), "mt-8 h-16 w-full text-xl")}>
            Quiero donar un juguete <ArrowRight aria-hidden />
          </a>
          <p className="mt-6 text-center text-[15px] text-cream/85">¿Quieres participar de otra manera?</p>
          <div className="mt-3 text-center">
            <a href="#otras-formas" className={cn(buttonVariants({ variant: "outline-light" }), "w-full max-w-xs")}>
              Quiero sumarme <ArrowRight aria-hidden />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
