import { ArrowRight } from "lucide-react"
import { whatsappUrl, campaign } from "@/content/campaign.config"
import type { IllustrationName } from "@/content/illustrations"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container, Eyebrow, Illo, Section } from "./primitives"

type ParticipationOption = { title: string; description: string; illustration: IllustrationName; action: string; href: string }

const options: ParticipationOption[] = [
  {
    title: "Sé punto de acopio",
    description: "Si tienes un negocio, oficina, escuela o espacio accesible, puedes ayudarnos recibiendo juguetes durante la campaña.",
    illustration: "formas-punto-acopio",
    action: "Quiero ser punto de acopio",
    href: whatsappUrl("Hola, quiero ser punto de acopio de Navidad que se comparte."),
  },
  {
    title: "Participa con tu empresa",
    description: "Organiza una pequeña recolecta con tu equipo y sumen juntos varios juguetes a la meta.",
    illustration: "formas-empresa",
    action: "Quiero sumar a mi organización",
    href: whatsappUrl("Hola, quiero sumar a mi organización a Navidad que se comparte."),
  },
  {
    title: "Ayúdanos como voluntario",
    description: "Puedes apoyarnos en la clasificación, preparación, transporte o entrega de los juguetes.",
    illustration: "formas-voluntario",
    action: "Quiero ser voluntario",
    href: whatsappUrl("Hola, quiero ser voluntario en Navidad que se comparte."),
  },
]

function ParticipationCard({ o, n }: { o: ParticipationOption; n: number }) {
  return (
    <li className="flex flex-col rounded-[24px] border-2 border-golden/40 bg-white/60 p-6">
      <div className="relative flex h-36 items-center justify-end">
        <span className="absolute top-0 left-0 font-display text-5xl font-black text-coral">{String(n).padStart(2, "0")}</span>
        <Illo name={o.illustration} className="max-h-36 w-auto max-w-[78%]" />
      </div>
      <h3 className="mt-4 text-[24px] font-extrabold text-forest">{o.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-6">{o.description}</p>
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
        <h2 id="formas-title" className="mt-6 text-[40px] leading-[1.05] font-black text-forest md:text-[52px]">
          También puedes ayudarnos <br />
          <span className="text-coral">de otras maneras</span>
        </h2>
        <p className="mt-4 text-lg leading-[30px]">Si quieres involucrarte más, hay distintas formas de ayudar a que esta iniciativa llegue más lejos.</p>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {options.map((o, i) => (
            <ParticipationCard key={o.title} o={o} n={i + 1} />
          ))}
        </ul>
        <div className="mt-5 grid gap-5 rounded-[24px] bg-sky-soft p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
          <Illo name="formas-chat-bubbles" className="w-24" />
          <div className="md:border-l-2 md:border-line md:pl-6">
            <h3 className="text-[26px] font-extrabold text-forest">
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
