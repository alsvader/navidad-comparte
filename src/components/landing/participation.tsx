import { ArrowRight } from "lucide-react"
import { whatsappUrl, campaign } from "@/content/campaign.config"
import type { IllustrationName } from "@/content/illustrations"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container, Eyebrow, Illo, Section } from "./primitives"

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

function ParticipationCard({ o, n }: { o: ParticipationOption; n: number }) {
  return (
    <li className="flex flex-col rounded-[24px] border-2 border-line bg-white/60 p-6">
      <div className="relative flex h-44 items-center justify-end">
        <span className="absolute top-0 left-0 font-display text-6xl leading-none font-black text-coral">{String(n).padStart(2, "0")}</span>
        <Illo name={o.illustration} className="max-h-44 w-auto max-w-[78%]" />
        {o.decos.map((d) => (
          <Illo key={d.name + d.className} name={d.name} className={cn("absolute", d.className)} />
        ))}
      </div>
      <h3 className="mt-4 text-[26px] leading-tight font-extrabold text-forest">{o.title}</h3>
      <p className="mt-2 flex-1 text-base leading-[26px]">{o.description}</p>
      <a href={o.href} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "secondary" }), "mt-5 w-full")}>
        {o.action} <ArrowRight aria-hidden />
      </a>
    </li>
  )
}

export function ParticipationSection() {
  return (
    <Section id="otras-formas" aria-labelledby="formas-title">
      <Container>
        <Eyebrow variant="impact">Otras formas de sumarte</Eyebrow>
        <div className="relative mt-6 w-fit">
          <h2 id="formas-title" className="text-[40px] leading-[1.05] font-black text-forest md:text-[52px]">
            También puedes ayudarnos <br />
            <span className="text-coral">de otras maneras</span>
          </h2>
          <Illo name="deco-rays-fan-b" className="absolute -top-2 -right-16 hidden w-12 md:block" />
        </div>
        <p className="mt-4 text-lg leading-[30px]">Si quieres involucrarte más, hay distintas formas de ayudar a que esta iniciativa llegue más lejos.</p>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {options.map((o, i) => (
            <ParticipationCard key={o.title} o={o} n={i + 1} />
          ))}
        </ul>
        <div className="mt-5 grid gap-5 rounded-[24px] bg-sky-tint p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
          <Illo name="formas-chat-bubbles" className="w-28" />
          <div className="md:border-l-2 md:border-line md:pl-6">
            <h3 className="text-[28px] leading-tight font-extrabold text-forest">
              ¿Tienes otra forma de <span className="text-coral">ayudar?</span>
            </h3>
            <p className="mt-1">
              También puedes apoyarnos con difusión, transporte, impresión, almacenamiento u otros recursos necesarios para la campaña.
            </p>
          </div>
          <a href={`mailto:${campaign.contact.email}`} className={cn(buttonVariants({ variant: "secondary" }), "w-full md:w-auto md:min-w-[200px]")}>
            Contáctanos <ArrowRight aria-hidden />
          </a>
        </div>
      </Container>
    </Section>
  )
}
