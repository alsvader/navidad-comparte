import { campaign } from "@/content/campaign.config"
import { Container, Eyebrow, Illo, Section } from "./primitives"

export function CommunitySection() {
  const c = campaign.community
  const stats = [
    { illo: "transparencia-kids-icon", big: c.estimatedChildren ? `≈ ${c.estimatedChildren}` : "Por confirmar", small: "niñas y niños" },
    { illo: "misc-calendar", big: c.deliveryDate ?? "Por confirmar", small: "entrega" },
    { illo: "comunidad-map-pin", big: c.municipality, small: "municipio" },
  ] as const
  return (
    <Section id="la-comunidad" aria-labelledby="comunidad-title">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow variant="impact">La comunidad</Eyebrow>
            <h2 id="comunidad-title" className="mt-6 text-[36px] leading-[1.08] font-black text-forest md:text-[48px]">
              {c.confirmed && c.name ? (
                <>
                  Este año llegaremos a <span className="text-coral">{c.name}</span>
                </>
              ) : (
                <>
                  Esta Navidad llegaremos <span className="text-coral">a una comunidad de Huimanguillo</span>
                </>
              )}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-[30px]">
              <p>Los juguetes recolectados serán entregados a niñas y niños de una comunidad del municipio de Huimanguillo, Tabasco.</p>
              <p>
                Queremos concentrar esta primera edición en un solo lugar para organizar mejor la entrega y asegurarnos de que cada regalo
                llegue a su destino.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-3 divide-x-2 divide-line text-center">
              {stats.map((s) => (
                <div key={s.small} className="flex flex-col items-center px-2">
                  <Illo name={s.illo} className="h-10 w-auto" />
                  <dd className="order-2 mt-2 font-display text-lg leading-tight font-black text-coral-strong md:text-2xl">{s.big}</dd>
                  <dt className="order-3 text-sm">{s.small}</dt>
                </div>
              ))}
            </dl>
          </div>
          <Illo
            name="comunidad-village"
            alt="Ilustración de un pueblo tropical con casas, palmeras y una escuela"
            className="w-full rounded-[40px_120px_40px_120px] object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>
        {!c.confirmed && (
          <div className="mt-10 grid gap-5 rounded-[24px] bg-coral-soft p-6 md:grid-cols-[auto_1fr_1fr] md:items-center">
            <Illo name="comunidad-map-pin" className="w-14" />
            <div className="md:border-x-2 md:border-line md:px-6">
              <h3 className="text-xl font-extrabold text-forest">Próximamente conocerás la comunidad</h3>
              <p className="mt-1 text-[15px]">Estamos trabajando en la selección y validación del lugar donde realizaremos la entrega.</p>
            </div>
            <p className="text-[15px]">
              Publicaremos aquí su nombre, información general y número aproximado de niñas y niños una vez que esté confirmada.
            </p>
          </div>
        )}
      </Container>
    </Section>
  )
}
