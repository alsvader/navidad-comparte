import { ArrowRight } from "lucide-react"
import { getProgress } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container, Illo, ProgressBar } from "./primitives"

export function FinalCTA() {
  const p = getProgress()
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-forest py-16 text-cream md:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <Illo name="cta-100-gift-pile" alt="El número 100 sobre una pila de regalos" className="order-2 mx-auto w-full max-w-[520px] lg:order-1" />
        <div className="order-1 lg:order-2">
          <h2 id="cta-title" className="text-[44px] leading-[1.02] font-black md:text-[64px]">
            ¿Nos ayudas <br />a llegar a <span className="text-coral">{p.goal}?</span>
          </h2>
          <p className="mt-5 text-lg leading-[30px] text-cream/90">
            Cada juguete nos acerca un poco más a la meta y a compartir una Navidad especial con niñas y niños de Huimanguillo.
          </p>
          <div className="mt-8 rounded-[24px] border-2 border-cream/15 bg-white/5 p-6">
            <p className="font-display leading-none font-black">
              <span className="text-6xl text-coral md:text-7xl">{p.current}</span>
              <span className="text-6xl md:text-7xl"> / {p.goal}</span>
              <span className="ml-3 text-2xl font-extrabold">regalos</span>
            </p>
            <p className="mt-3 font-display text-lg font-extrabold">
              {p.remaining > 0 ? (
                <>
                  Nos faltan <span className="text-coral">{p.remaining}</span> para llegar a la meta.
                </>
              ) : (
                "¡Meta cumplida!"
              )}
            </p>
            <ProgressBar current={p.current} goal={p.goal} track="dark" className="mt-4 border-2 border-cream/40" />
          </div>
          <a href="#puntos-de-acopio" className={cn(buttonVariants({ size: "lg" }), "mt-8 w-full")}>
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
