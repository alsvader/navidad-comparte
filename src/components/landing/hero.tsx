import { ArrowRight, Heart } from "lucide-react"
import { campaign, getProgress } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { Container, Eyebrow, Illo, ProgressBar } from "./primitives"

export function Hero() {
  const p = getProgress()
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-cream pt-10 pb-32 md:pt-20 md:pb-44">
      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[56fr_44fr]">
        <div>
          <Eyebrow variant="action">
            <Heart className="size-4 fill-coral" aria-hidden /> Navidad que se comparte
          </Eyebrow>
          <h1 id="hero-title" className="t-hero mt-7 text-forest">
            <span className="text-coral">100</span> regalos
            <br />
            para <span className="text-coral">100 sonrisas</span>
            <br />
            en Huimanguillo.
          </h1>
          <p className="t-lead mt-7">
            Estamos reuniendo {p.goal} juguetes para niñas y niños de una comunidad de Huimanguillo, Tabasco.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#puntos-de-acopio" className={buttonVariants({ size: "lg" })}>
              Quiero donar un juguete <ArrowRight aria-hidden />
            </a>
            <a href="#la-iniciativa" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Conoce cómo funciona
            </a>
          </div>
          {/* Avance: cifra y barra directamente sobre el fondo, sin caja que los enmarque. */}
          <div className="mt-12 max-w-[30rem]">
            <p className="flex items-baseline gap-3">
              <span className="t-figure text-[64px] text-coral-strong">{p.current}</span>
              <span className="font-display text-xl leading-tight font-extrabold text-forest">
                de {p.goal} juguetes
                <br />
                recolectados
              </span>
            </p>
            <div className="mt-4 flex items-center gap-3">
              <ProgressBar current={p.current} goal={p.goal} className="h-5" />
              <Illo name="misc-gift-sparkle" className="w-9 shrink-0" />
            </div>
            <p className="mt-3 text-sm text-ink/80">Última actualización: {campaign.lastUpdated}</p>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[580px]">
          <Illo name="hero-100" priority className="relative mx-auto w-[82%]" />
          <Illo
            name="hero-gifts-teddy"
            priority
            alt="Pila de regalos con un oso de peluche, una pelota y un carrito"
            className="relative -mt-[34%] w-full"
            sizes="(min-width: 1024px) 580px, 90vw"
          />
          <Illo name="deco-holly" className="absolute bottom-6 -left-6 w-20 -rotate-12" />
        </div>
      </Container>
      <Illo name="hero-waves-bg" className="pointer-events-none absolute inset-x-0 bottom-0 w-full" sizes="100vw" />
      <Illo name="deco-heart-coral" className="absolute bottom-14 left-[16%] z-10 w-8" />
      <Illo name="deco-grass-sprig" className="absolute right-[4%] bottom-10 z-10 w-10" />
    </section>
  )
}
