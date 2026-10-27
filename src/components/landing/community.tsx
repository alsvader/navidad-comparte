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
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div className="reveal" data-stagger>
            <Eyebrow variant="impact">La comunidad</Eyebrow>
            <h2 id="comunidad-title" className="t-section mt-7 text-forest">
              {c.confirmed && c.name ? (
                <>
                  Este año llegaremos a <span className="text-coral-strong">{c.name}</span>
                </>
              ) : (
                <>Esta Navidad llegaremos a una comunidad de Huimanguillo</>
              )}
            </h2>
            <div className="t-lead mt-7 space-y-5">
              <p>Los juguetes recolectados serán entregados a niñas y niños de una comunidad del municipio de Huimanguillo, Tabasco.</p>
              <p>
                Queremos concentrar esta primera edición en un solo lugar para organizar mejor la entrega y asegurarnos de que cada regalo
                llegue a su destino.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((s) => (
                <div key={s.small} className="flex flex-col items-start">
                  <Illo name={s.illo} className="h-10 w-auto" />
                  <dd className="order-2 mt-3 font-display text-[17px] leading-[1.1] break-words sm:text-xl font-black tracking-[-0.02em] text-coral-strong md:text-[28px]">{s.big}</dd>
                  <dt className="order-3 mt-1 text-base">{s.small}</dt>
                </div>
              ))}
            </dl>
          </div>
          <Illo
            name="comunidad-village"
            alt="Ilustración de un pueblo tropical con casas, palmeras y una escuela"
            className="reveal-late w-full rounded-[40px_120px_40px_120px] object-cover"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        </div>
        {!c.confirmed && (
          <div data-stagger className="reveal mt-16 grid gap-6 rounded-[32px] bg-coral-soft p-7 md:grid-cols-[auto_1.1fr_1fr] md:items-center md:gap-10 md:p-10">
            <Illo name="comunidad-map-pin" className="w-14" />
            <div>
              <h3 className="t-block text-forest">Próximamente conocerás la comunidad</h3>
              <p className="mt-2 text-lg leading-[28px]">Estamos trabajando en la selección y validación del lugar donde realizaremos la entrega.</p>
            </div>
            <p className="text-base leading-[26px]">
              Publicaremos aquí su nombre, información general y número aproximado de niñas y niños una vez que esté confirmada.
            </p>
          </div>
        )}
      </Container>
    </Section>
  )
}
