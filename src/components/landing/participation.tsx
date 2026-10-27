import { ArrowRight } from "lucide-react"
import { whatsappUrl, campaign } from "@/content/campaign.config"
import type { IllustrationName } from "@/content/illustrations"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container, Eyebrow, Illo, NewTab, Section } from "./primitives"

type ParticipationOption = { title: string; description: string; illustration: IllustrationName; action: string; href: string; decos: { name: IllustrationName; className: string }[] }

const options: ParticipationOption[] = [
  {
    title: "Sé punto de acopio",
    description: "Si tienes un negocio, oficina, escuela o espacio accesible, puedes ayudarnos recibiendo juguetes durante la campaña.",
    illustration: "formas-punto-acopio",
    action: "Quiero ser punto de acopio",
    href: whatsappUrl("Hola, quiero ser punto de acopio de Navidad que se comparte."),
    decos: [
      { name: "deco-rays-burst", className: "top-1 right-2 w-9" },
      { name: "deco-heart-coral", className: "right-1 bottom-6 w-6" },
    ],
  },
  {
    title: "Participa con tu empresa",
    description: "Organiza una pequeña recolecta con tu equipo y sumen juntos varios juguetes a la meta.",
    illustration: "formas-empresa",
    action: "Quiero sumar a mi organización",
    href: whatsappUrl("Hola, quiero sumar a mi organización a Navidad que se comparte."),
    decos: [
      { name: "deco-rays-fan-a", className: "top-0 right-0 w-10" },
      { name: "deco-heart-coral", className: "bottom-8 left-[34%] w-5" },
    ],
  },
  {
    title: "Ayúdanos como voluntario",
    description: "Puedes apoyarnos en la clasificación, preparación, transporte o entrega de los juguetes.",
    illustration: "formas-voluntario",
    action: "Quiero ser voluntario",
    href: whatsappUrl("Hola, quiero ser voluntario en Navidad que se comparte."),
    decos: [
      { name: "deco-heart-coral", className: "top-4 left-[33%] w-6" },
      { name: "deco-rays-burst", className: "top-8 right-0 w-8" },
    ],
  },
]

function ParticipationFeature({ o }: { o: ParticipationOption }) {
  return (
    <li className="reveal flex flex-col rounded-[32px] bg-white p-7 md:p-10 lg:row-span-2">
      <div className="relative flex min-h-56 flex-1 items-center justify-center py-4">
        <Illo name={o.illustration} className="max-h-60 w-auto max-w-[80%]" />
        {o.decos.map((d) => (
          <Illo key={d.name + d.className} name={d.name} className={cn("absolute", d.className)} />
        ))}
      </div>
      <h3 className="t-block mt-6 text-forest">{o.title}</h3>
      <p className="mt-3 text-lg leading-[28px]">{o.description}</p>
      <a href={o.href} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "mt-8 w-full")}>
        {o.action} <NewTab /> <ArrowRight aria-hidden />
      </a>
    </li>
  )
}

function ParticipationRow({ o }: { o: ParticipationOption }) {
  return (
    <li className="reveal-late grid items-center gap-6 rounded-[32px] bg-white p-6 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:p-8">
      <div className="relative flex h-40 items-center justify-center">
        <Illo name={o.illustration} className="max-h-40 w-auto max-w-full" />
        {o.decos.map((d) => (
          <Illo key={d.name + d.className} name={d.name} className={cn("absolute", d.className)} />
        ))}
      </div>
      <div>
        <h3 className="text-[24px] leading-[1.1] font-extrabold tracking-[-0.02em] text-forest">{o.title}</h3>
        <p className="mt-2 text-base leading-[26px]">{o.description}</p>
        <a href={o.href} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "secondary" }), "mt-5 w-full sm:w-auto")}>
          {o.action} <NewTab /> <ArrowRight aria-hidden />
        </a>
      </div>
    </li>
  )
}

export function ParticipationSection() {
  return (
    <Section id="otras-formas" aria-labelledby="formas-title" background="sky">
      <Container>
        <div className="reveal grid items-end gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <Eyebrow variant="impact" className="bg-white">Otras formas de sumarte</Eyebrow>
            <h2 id="formas-title" className="t-section mt-7 text-forest">
              También puedes ayudarnos de otras maneras
            </h2>
          </div>
          <p className="t-lead">Si quieres involucrarte más, hay distintas formas de ayudar a que esta iniciativa llegue más lejos.</p>
        </div>
        {/* Composición asimétrica: una opción protagonista y dos de apoyo, en lugar de tres tarjetas idénticas. */}
        <ul className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          <ParticipationFeature o={options[0]} />
          <ParticipationRow o={options[1]} />
          <ParticipationRow o={options[2]} />
        </ul>
        <div className="reveal mt-5 grid gap-6 rounded-[32px] bg-forest p-7 text-cream md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:p-10">
          <Illo name="formas-chat-bubbles" className="w-28" />
          <div>
            <h3 className="t-block text-cream">
              ¿Tienes otra forma de <span className="text-golden">ayudar?</span>
            </h3>
            <p className="mt-2 text-lg leading-[28px] text-cream/90">
              También puedes apoyarnos con difusión, transporte, impresión, almacenamiento u otros recursos necesarios para la campaña.
            </p>
          </div>
          <a href={`mailto:${campaign.contact.email}`} className={cn(buttonVariants({ variant: "outline-light", size: "lg" }), "w-full md:w-auto")}>
            Contáctanos <ArrowRight aria-hidden />
          </a>
        </div>
      </Container>
    </Section>
  )
}
