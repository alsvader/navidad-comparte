import { ArrowRight, Heart } from "lucide-react"
import { campaign, getProgress } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { Container, Eyebrow, Illo, ProgressBar } from "./primitives"

export function Hero() {
  const p = getProgress()
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-cream pt-10 pb-28 md:pt-16 md:pb-40">
      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[55fr_45fr]">
        <div>
          <Eyebrow variant="action">
            <Heart className="size-4 fill-coral" aria-hidden /> Navidad que se comparte
          </Eyebrow>
          <h1 id="hero-title" className="mt-6 text-[44px] leading-[1] font-black tracking-tight text-forest sm:text-6xl lg:text-[76px]">
            <span className="text-coral">100</span> regalos
            <br />
            para <span className="text-coral">100 sonrisas</span>
            <br />
            en Huimanguillo.
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-[30px] text-ink/90">
            Estamos reuniendo {p.goal} juguetes para niñas y niños de una comunidad de Huimanguillo, Tabasco.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#puntos-de-acopio" className={buttonVariants({ size: "lg" })}>
              Quiero donar un juguete <ArrowRight aria-hidden />
            </a>
            <a href="#la-iniciativa" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Conoce cómo funciona
            </a>
          </div>
          <div className="mt-8 max-w-[28rem] rounded-[20px] bg-white/70 p-5 shadow-soft">
            <p className="font-display text-lg font-extrabold text-forest">
              <span className="mr-2 text-coral-strong">{p.current}</span>de {p.goal} juguetes recolectados
            </p>
            <div className="mt-3 flex items-center gap-3">
              <ProgressBar current={p.current} goal={p.goal} />
              <Illo name="misc-gift-sparkle" className="w-8 shrink-0" />
            </div>
            <p className="mt-3 text-sm text-ink/70">Última actualización: {campaign.lastUpdated}</p>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <Illo name="hero-100" priority className="relative mx-auto w-[82%]" />
          <Illo
            name="hero-gifts-teddy"
            priority
            alt="Pila de regalos con un oso de peluche, una pelota y un carrito"
            className="relative -mt-[34%] w-full"
            sizes="(min-width: 1024px) 560px, 90vw"
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
