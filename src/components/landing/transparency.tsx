import { ArrowRight } from "lucide-react"
import { campaign, type CampaignResults } from "@/content/campaign.config"
import type { IllustrationName } from "@/content/illustrations"
import { cn } from "@/lib/utils"
import { Container, Eyebrow, Illo, Section } from "./primitives"

const steps = [
  { n: "01", title: "Conteo", text: "Registramos cada juguete que recibimos y actualizamos el avance hacia la meta.", illo: "transparencia-clipboard-gift", bg: "bg-coral-soft" },
  { n: "02", title: "Clasificación", text: "Revisamos y organizamos los juguetes de acuerdo con las edades de las niñas y niños.", illo: "transparencia-sorting", bg: "bg-sky-soft" },
  { n: "03", title: "Entrega", text: "Los juguetes serán entregados directamente en la comunidad seleccionada.", illo: "transparencia-delivery-truck", bg: "bg-golden-soft" },
  { n: "04", title: "Resultados", text: "Publicaremos el resultado final de la campaña y los principales datos de la entrega.", illo: "transparencia-report-check", bg: "bg-forest-soft" },
] as const

const metrics: { key: keyof CampaignResults; label: string; illo: IllustrationName }[] = [
  { key: "toysCollected", label: "Juguetes recolectados", illo: "meta-milestone-75" },
  { key: "toysDelivered", label: "Juguetes entregados", illo: "meta-milestone-25" },
  { key: "childrenBenefited", label: "Niñas y niños beneficiados", illo: "transparencia-kids-icon" },
  { key: "partners", label: "Aliados participantes", illo: "transparencia-allies-icon" },
  { key: "collectionPoints", label: "Puntos de acopio", illo: "comunidad-map-pin" },
]

export function TransparencySection() {
  const results = campaign.results
  const completed = campaign.status === "completed"
  return (
    <Section id="transparencia" aria-labelledby="transparencia-title">
      <Container>
        <Eyebrow variant="impact">{completed ? `Resultados ${campaign.year}` : "Transparencia"}</Eyebrow>
        <h2 id="transparencia-title" className="mt-6 text-[40px] leading-[1.05] font-black text-forest md:text-[52px]">
          Queremos que sepas <br />
          <span className="text-coral">a dónde llega tu ayuda</span>
        </h2>
        <p className="mt-4 max-w-5xl text-lg leading-[30px]">
          Cada juguete recibido formará parte de una campaña organizada, documentada y enfocada en una sola comunidad de Huimanguillo. Durante la
          recolecta iremos compartiendo el avance de la meta y, al finalizar, publicaremos los resultados de esta primera edición.
        </p>

        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n} className={cn("relative rounded-[24px] p-6", s.bg)}>
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-full bg-coral font-display text-lg font-black text-white">{s.n}</span>
                <Illo name={s.illo} className="h-24 w-auto" />
              </div>
              <h3 className="mt-3 text-[22px] font-extrabold text-forest">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-6">{s.text}</p>
              {i < steps.length - 1 && <ArrowRight className="absolute top-1/2 -right-5 hidden size-6 text-forest lg:block" aria-hidden />}
            </li>
          ))}
        </ol>

        <div className="mt-5 grid gap-6 rounded-[24px] border-2 border-line bg-white/60 p-6 lg:grid-cols-[220px_1fr] lg:items-center">
          <div>
            <Eyebrow variant="impact" className="text-xs">Resultados de la campaña</Eyebrow>
            <p className="mt-3 text-[15px]">Al finalizar la recolecta, publicaremos aquí los resultados oficiales.</p>
          </div>
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x-2 lg:divide-line">
            {metrics.map((m) => {
              const v = results?.[m.key]
              return (
                <div key={m.key} className="flex flex-col items-center gap-1 px-2 text-center">
                  <Illo name={m.illo} className="h-9 w-auto" />
                  <dt className="text-sm font-semibold text-forest">{m.label}</dt>
                  <dd className="font-display text-2xl font-black text-forest">{v ?? "—"}</dd>
                  {v === undefined && <dd className="text-xs text-ink/70">Disponible al finalizar</dd>}
                </div>
              )
            })}
          </dl>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-[24px] bg-golden-soft p-6 sm:flex-row sm:items-center">
            <Illo name="transparencia-gift-in-hands" className="w-28 shrink-0" />
            <div>
              <h3 className="text-[22px] leading-tight font-extrabold text-forest">
                Esta primera edición está basada en <span className="text-coral">donaciones en especie.</span>
              </h3>
              <p className="mt-2 text-[15px]">
                Estamos recibiendo juguetes, no aportaciones económicas. Tú donas el regalo y nosotros nos encargamos de organizarlo y hacerlo
                llegar a la comunidad.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-[24px] bg-sky-soft p-6 sm:flex-row sm:items-center">
            <Illo name="transparencia-camera-heart" className="w-28 shrink-0" />
            <div>
              <h3 className="text-[22px] leading-tight font-extrabold text-forest">
                Documentaremos la campaña <span className="text-coral">con respeto.</span>
              </h3>
              <p className="mt-2 text-[15px]">
                Compartiremos imágenes de los puntos de acopio, preparación y entrega, cuidando siempre la privacidad y dignidad de las familias.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 rounded-[24px] bg-coral-soft p-6 md:grid-cols-[auto_1fr_1fr] md:items-center">
          <Illo name="transparencia-calendar-2026" className="w-28" />
          <p className="font-display text-xl leading-snug font-extrabold text-forest md:border-x-2 md:border-line md:px-6">
            Después de la entrega, esta sección se convertirá en <span className="block text-3xl font-black text-coral">Resultados {campaign.year}.</span>
          </p>
          <p className="text-[15px]">
            Aquí publicaremos el informe final con todos los detalles de la campaña: número de juguetes, comunidad beneficiada, fotos y principales
            resultados.
          </p>
        </div>
      </Container>
    </Section>
  )
}
