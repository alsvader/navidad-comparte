import { CountUp } from "./count-up"
import { Container, Eyebrow, Illo, Section } from "./primitives"

const highlights = [
  { illo: "porque-gift", blob: "deco-blob-golden", big: "100", small: "regalos", alt: "Regalo" },
  { illo: "porque-community-church", blob: "deco-blob-sky", big: "1", small: "comunidad", alt: "Iglesia y casas de una comunidad" },
  { illo: "porque-star", blob: "deco-blob-pink", big: "2026", small: "para compartir", pre: "Navidad", alt: "Estrella" },
] as const

export function WhySection() {
  return (
    <Section id="la-iniciativa" aria-labelledby="why-title">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="reveal" data-stagger>
          <Eyebrow variant="action">Por qué lo hacemos</Eyebrow>
          <h2 id="why-title" className="t-section mt-7 text-forest">
            Una Navidad
            <br />
            que se comparte.
          </h2>
          <div className="t-lead mt-8 space-y-5">
            <p>
              Esta iniciativa nace con una idea sencilla: reunir a personas que quieran compartir un poco de alegría esta Navidad con
              niñas y niños de una comunidad de Huimanguillo, Tabasco.
            </p>
            <p>
              Queremos comenzar con una meta concreta:{" "}
              <strong className="font-semibold text-forest">reunir 100 juguetes y concentrar esta primera edición en una sola comunidad.</strong>
            </p>
          </div>
          {/* Frase de cierre: solo tipografía; el énfasis viene del color de la primera línea, sin barra lateral ni caja. */}
          <blockquote className="mt-12 flex items-center gap-6">
            <p className="font-display text-[26px] leading-[1.15] font-black tracking-[-0.02em] text-forest md:text-[34px]">
              <span className="text-coral-strong">100 regalos.</span>
              <br />
              Una comunidad.
              <br />
              Muchas personas haciendo equipo.
            </p>
            <Illo name="deco-heart-rays" className="m-pulse hidden w-14 shrink-0 sm:block" />
          </blockquote>
        </div>
        <ul className="reveal-late grid gap-6 md:gap-8">
          {highlights.map((h, i) => (
            <li key={h.big} className={`grid grid-cols-[1fr_1fr] items-center gap-4 ${i === 1 ? "lg:translate-x-10" : ""}`}>
              <div className="relative flex justify-center">
                <Illo name={h.blob} className="absolute inset-0 m-auto w-[90%] opacity-90" />
                <Illo name={h.illo} alt={h.alt} className="relative max-h-40 w-auto" />
              </div>
              <p className="font-display leading-none font-black">
                {"pre" in h && <span className="block text-3xl tracking-[-0.02em] text-forest md:text-4xl">{h.pre}</span>}
                <span className="t-figure block text-[64px] text-coral md:text-[88px]">{h.big === "100" ? <CountUp value={Number(h.big)} /> : h.big}</span>
                <span className="mt-2 block text-2xl font-extrabold tracking-[-0.01em] text-forest">{h.small}</span>
              </p>
            </li>
          ))}
        </ul>
      </Container>
      <Illo name="deco-star-golden" className="m-twinkle absolute top-14 right-[42%] hidden w-10 lg:block" />
    </Section>
  )
}
