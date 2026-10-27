import { Container, Eyebrow, Illo, Section } from "./primitives"

const highlights = [
  { illo: "porque-gift", blob: "deco-blob-golden", big: "100", small: "regalos", alt: "Regalo" },
  { illo: "porque-community-church", blob: "deco-blob-sky", big: "1", small: "comunidad", alt: "Iglesia y casas de una comunidad" },
  { illo: "porque-star", blob: "deco-blob-pink", big: "2026", small: "para compartir", pre: "Navidad", alt: "Estrella" },
] as const

export function WhySection() {
  return (
    <Section id="la-iniciativa" aria-labelledby="why-title">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow variant="action">Por qué lo hacemos</Eyebrow>
          <h2 id="why-title" className="mt-6 text-[40px] leading-[1.05] font-black text-forest md:text-[56px]">
            Una Navidad <br />
            <span className="text-coral">que se</span> comparte.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-[30px]">
            <p>
              Esta iniciativa nace con una idea sencilla: reunir a personas que quieran compartir un poco de alegría esta Navidad con
              niñas y niños de una comunidad de Huimanguillo, Tabasco.
            </p>
            <p>
              Queremos comenzar con una meta concreta:{" "}
              <strong className="font-semibold text-forest">reunir 100 juguetes y concentrar esta primera edición en una sola comunidad.</strong>
            </p>
          </div>
          <blockquote className="mt-8 flex items-center gap-5 rounded-[20px] bg-golden-soft p-6">
            <Illo name="deco-heart-rays" className="w-14 shrink-0" />
            <p className="font-display text-xl leading-snug font-extrabold text-forest">
              100 regalos.
              <br />
              Una comunidad.
              <br />
              Muchas personas haciendo equipo.
            </p>
          </blockquote>
        </div>
        <ul className="grid gap-8">
          {highlights.map((h) => (
            <li key={h.big} className="grid grid-cols-[1fr_1fr] items-center gap-4">
              <div className="relative flex justify-center">
                <Illo name={h.blob} className="absolute inset-0 m-auto w-[90%] opacity-90" />
                <Illo name={h.illo} alt={h.alt} className="relative max-h-40 w-auto" />
              </div>
              <p className="font-display leading-none font-black">
                {"pre" in h && <span className="block text-3xl text-forest md:text-4xl">{h.pre}</span>}
                <span className="block text-6xl text-coral md:text-7xl">{h.big}</span>
                <span className="mt-1 block text-2xl font-extrabold text-forest">{h.small}</span>
              </p>
            </li>
          ))}
        </ul>
      </Container>
      <Illo name="deco-star-golden" className="absolute top-12 right-[40%] hidden w-10 lg:block" />
    </Section>
  )
}
