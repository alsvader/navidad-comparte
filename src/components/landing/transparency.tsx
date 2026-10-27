import { campaign, type CampaignResults } from "@/content/campaign.config"
import type { IllustrationName } from "@/content/illustrations"
import { cn } from "@/lib/utils"
import { Container, Eyebrow, Illo, Section } from "./primitives"

// La numeración es el orden real del proceso (brief §11), no decoración.
const steps = [
  { n: "01", title: "Conteo", text: "Registramos cada juguete que recibimos y actualizamos el avance hacia la meta.", illo: "transparencia-clipboard-gift" }, // taste-skill-ignore
  { n: "02", title: "Clasificación", text: "Revisamos y organizamos los juguetes de acuerdo con las edades de las niñas y niños.", illo: "transparencia-sorting" }, // taste-skill-ignore
  { n: "03", title: "Entrega", text: "Los juguetes serán entregados directamente en la comunidad seleccionada.", illo: "transparencia-delivery-truck" }, // taste-skill-ignore
  { n: "04", title: "Resultados", text: "Publicaremos el resultado final de la campaña y los principales datos de la entrega.", illo: "transparencia-report-check" }, // taste-skill-ignore
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
    <Section id="transparencia" aria-labelledby="transparencia-title" background="mint">
      <Container>
        <div className="reveal grid items-end gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16" data-stagger data-stagger-step="140">
          <div>
            <Eyebrow variant="impact" className="bg-white">{completed ? `Resultados ${campaign.year}` : "Transparencia"}</Eyebrow>
            <h2 id="transparencia-title" className="t-section mt-7 text-forest">
              Queremos que sepas a dónde llega tu ayuda
            </h2>
          </div>
          <p className="text-lg leading-[1.6]">
            Cada juguete recibido formará parte de una campaña organizada, documentada y enfocada en una sola comunidad de Huimanguillo. Durante la
            recolecta iremos compartiendo el avance de la meta y, al finalizar, publicaremos los resultados de esta primera edición.
          </p>
        </div>

        {/* Recorrido en una línea: cada etapa cuelga de la barra que las une. */}
        <ol className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={cn(
                "reveal relative",
                i < steps.length - 1 && "lg:after:absolute lg:after:top-[26px] lg:after:left-16 lg:after:-right-8 lg:after:h-1.5 lg:after:rounded-full lg:after:bg-forest/20"
              )}
            >
              <span className="relative z-10 flex size-[56px] items-center justify-center rounded-full bg-coral-strong font-display text-xl font-black text-white">{s.n}</span>
              <Illo name={s.illo} className="mt-6 h-32 w-auto" />
              <h3 className="mt-5 text-[28px] leading-none font-extrabold tracking-[-0.02em] text-forest">{s.title}</h3>
              <p className="mt-3 text-base leading-[26px]">{s.text}</p>
            </li>
          ))}
        </ol>

        {/* Oculto hasta que concluya la campaña (campaign.status = "completed") */}
        {completed && (
        <div className="mt-16 grid gap-8 rounded-[32px] bg-white p-7 md:p-10 lg:grid-cols-[250px_1fr] lg:items-center">
          <div>
            <Eyebrow variant="impact" className="whitespace-nowrap">Resultados de la campaña</Eyebrow>
            <p className="mt-3 text-base">Al finalizar la recolecta, publicaremos aquí los resultados oficiales.</p>
          </div>
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {metrics.map((m) => {
              const v = results?.[m.key]
              return (
                <div key={m.key} className="flex flex-col items-center gap-1 px-2 text-center">
                  <div className="flex min-h-11 flex-col items-center gap-1 lg:flex-row lg:gap-2">
                    <span className="flex h-11 w-14 shrink-0 items-center justify-center">
                      <Illo name={m.illo} className="max-h-11 w-auto max-w-14 object-contain" />
                    </span>
                    <dt className="text-sm leading-tight font-bold text-forest lg:text-left">{m.label}</dt>
                  </div>
                  <dd className="font-display text-2xl font-black text-forest">{v ?? "—"}</dd>
                  {v === undefined && <dd className="text-xs text-ink/70">Disponible al finalizar</dd>}
                </div>
              )
            })}
          </dl>
        </div>
        )}

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
          <div className="reveal flex flex-col gap-6 rounded-[32px] bg-white p-7 sm:flex-row sm:items-center md:p-10">
            <Illo name="transparencia-gift-in-hands" className="w-36 shrink-0" />
            <div>
              <h3 className="t-block text-forest">
                Esta primera edición está basada en <span className="text-coral-strong">donaciones en especie.</span>
              </h3>
              <p className="mt-3 text-lg leading-[28px]">
                Estamos recibiendo juguetes, no aportaciones económicas. Tú donas el regalo y nosotros nos encargamos de organizarlo y hacerlo
                llegar a la comunidad.
              </p>
            </div>
          </div>
          <div className="reveal-late flex flex-col gap-6 rounded-[32px] bg-golden-field p-7 sm:flex-row sm:items-center md:p-10">
            <Illo name="transparencia-camera-heart" className="w-32 shrink-0" />
            <div>
              <h3 className="text-[26px] leading-[1.1] font-extrabold tracking-[-0.02em] text-forest">Documentaremos la campaña con respeto.</h3>
              <p className="mt-3 text-base leading-[26px]">
                Compartiremos imágenes de los puntos de acopio, preparación y entrega, cuidando siempre la privacidad y dignidad de las familias.
              </p>
            </div>
          </div>
        </div>

        {/* Oculto hasta que concluya la campaña (campaign.status = "completed") */}
        {completed && (
        <div className="mt-5 grid gap-6 rounded-[32px] bg-coral-soft p-7 md:grid-cols-[auto_1fr_1fr] md:items-center md:gap-10 md:p-10">
          <Illo name="transparencia-calendar-2026" className="w-36" />
          <p className="font-display text-xl leading-snug font-extrabold text-forest">
            Después de la entrega, esta sección se convertirá en <span className="block text-3xl font-black text-coral-strong">Resultados {campaign.year}.</span>
          </p>
          <p className="text-base">
            Aquí publicaremos el informe final con todos los detalles de la campaña: número de juguetes, comunidad beneficiada, fotos y principales
            resultados.
          </p>
        </div>
        )}
      </Container>
    </Section>
  )
}
