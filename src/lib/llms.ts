/**
 * Genera el contenido de /llms.txt (https://llmstxt.org/) a partir de
 * `src/content/campaign.config.ts` y `src/lib/site.ts`. No escribir cifras ni datos a mano aquí.
 *
 * Formato: H1 → blockquote → detalles (sin encabezados) → secciones H2 con listas de enlaces → «Optional».
 * Con `campaign.placeholderData = true` se omiten puntos de acopio, avance, fechas, contacto y aliados.
 */
import { campaign, donationGuidelines, getProgress, navLinks } from "@/content/campaign.config"
import { siteName, siteUrl } from "@/lib/site"

const sections = [
  { href: "#la-iniciativa", name: "La iniciativa", note: "Por qué se hace la recolecta y la meta de la primera edición." },
  { href: "#como-donar", name: "Cómo donar", note: "Pasos para donar, qué juguetes sí y cuáles evitar, e ideas de juguetes." },
  { href: "#puntos-de-acopio", name: "Puntos de acopio", note: "Dónde entregar los juguetes (negocios y espacios que los reciben)." },
  { href: "#nuestra-meta", name: "Nuestra meta", note: "Avance de la campaña hacia la meta." },
  { href: "#la-comunidad", name: "La comunidad", note: "Quiénes recibirán los juguetes y cómo se cuida su privacidad." },
  { href: "#otras-formas", name: "Otras formas de participar", note: "Ser punto de acopio, sumar a una empresa u organización, o ser voluntario." },
  { href: "#aliados", name: "Aliados", note: "Personas y organizaciones que apoyan la campaña." },
  { href: "#transparencia", name: "Transparencia", note: "Cómo se cuentan, clasifican y entregan los juguetes, y publicación de resultados." },
] as const

const statusText: Record<typeof campaign.status, string> = {
  preparation: "La campaña está en preparación.",
  active: "La recolecta está abierta.",
  "goal-reached": "Ya se alcanzó la meta de juguetes.",
  completed: "La campaña concluyó y se publican sus resultados.",
}

export function buildLlmsTxt(): string {
  const c = campaign
  const verified = !c.placeholderData
  const { municipality, confirmed } = c.community
  const url = (hash = "") => `${siteUrl}/${hash}`
  const out: string[] = []

  out.push(`# ${siteName}`, "")
  out.push(`> Recolecta navideña ${c.year} de juguetes en especie para niñas y niños de una comunidad de ${municipality}. Queremos reunir ${c.goal} regalos para niñas y niños de una comunidad esta Navidad.`, "")

  out.push(statusText[c.status], "")
  out.push("Datos clave:", "")
  out.push("- Solo se reciben donaciones en especie (juguetes). No se piden ni se reciben dinero, cuentas bancarias ni pagos.")
  out.push(`- Meta de la primera edición: ${c.goal} juguetes para una sola comunidad.`)
  out.push(
    `- Zona: ${municipality}${confirmed ? "" : " (la comunidad beneficiaria aún no está confirmada)"}.`
  )
  if (verified) {
    const p = getProgress()
    out.push(`- Avance: ${p.current} de ${p.goal} juguetes (${p.percent} %), actualizado el ${c.lastUpdated}.`)
    out.push(`- Fecha límite para donar: ${c.donationDeadline}.`)
    if (c.deliveryDate) out.push(`- Entrega: ${c.deliveryDate}.`)
  }
  out.push(`- Qué sí: ${donationGuidelines.yes.join(", ").toLowerCase()}.`)
  out.push(`- Qué evitar: ${donationGuidelines.avoid.join(", ").toLowerCase()}.`)
  out.push("- No se publica información personal de las niñas, niños ni familias beneficiarias.")
  if (!verified) {
    out.push(
      "- Los puntos de acopio, el avance, las fechas y los datos de contacto aún no están publicados de forma definitiva, por eso este archivo no los incluye. No los asumas: consulta la página."
    )
  }
  out.push("")

  const labels = new Map<string, string>(navLinks.map((l) => [l.href, l.label]))
  out.push("## Página principal", "")
  out.push(`- [${siteName}](${url()}): landing de una sola página con toda la información de la campaña.`)
  for (const s of sections) out.push(`- [${labels.get(s.href) ?? s.name}](${url(s.href)}): ${s.note}`)
  out.push("")

  if (verified) {
    const points = c.collectionPoints.filter((p) => p.active)
    if (points.length) {
      out.push("## Puntos de acopio", "")
      for (const p of points) out.push(`- [${p.name}](${p.mapsUrl}): ${p.address}, ${p.city}. ${p.schedule}. ${p.deadline}.`)
      out.push("")
    }
    out.push("## Contacto", "")
    out.push(`- [WhatsApp ${c.contact.whatsappDisplay}](https://wa.me/${c.contact.whatsappNumber}): coordinar la entrega de un juguete o participar.`)
    out.push(`- [${c.contact.email}](mailto:${c.contact.email}): correo de contacto.`)
    out.push("")
  }

  out.push("## Optional", "")
  out.push(`- [Mapa del sitio](${siteUrl}/sitemap.xml): lista de páginas indexables.`)
  out.push(`- [robots.txt](${siteUrl}/robots.txt): reglas de acceso para rastreadores.`)
  if (verified) {
    out.push(`- [Instagram](${c.contact.instagramUrl}): novedades de la campaña.`)
    out.push(`- [Facebook](${c.contact.facebookUrl}): novedades de la campaña.`)
  }
  out.push("")

  return out.join("\n")
}
