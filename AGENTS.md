<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Navidad que se comparte: guía para agentes

Landing de la colecta de juguetes «Navidad que se comparte» (Huimanguillo, Tabasco). Stack: Next.js, Tailwind v4, shadcn/ui, pnpm. Contexto del producto en [`PRODUCT.md`](./PRODUCT.md); sistema visual y reglas en [`docs/brief.md`](./docs/brief.md); contenido editable en `src/content/campaign.config.ts`.

## Skills de diseño (obligatorios para trabajo de UI)

Todo cambio de interfaz (secciones, componentes, estilos, layout, tipografía, color, movimiento, accesibilidad, responsive o copy de UI) **debe** usar los skills de diseño instalados en `.agents/skills/`. Lee su `SKILL.md` antes de editar. No es opcional.

| Skill | Cuándo usarlo |
|---|---|
| `impeccable` (con `PRODUCT.md`) | Auditar (`audit`), criticar (`critique`), pulir (`polish`), ajustar layout, tipografía o color, endurecer casos límite (`harden`) y planear o crear secciones nuevas (`shape`). Es el skill por defecto para revisar y refinar. Lee `PRODUCT.md` como contexto. Si cambia el producto, actualiza `PRODUCT.md` con su flujo `init`. |
| `design-taste-frontend` (Taste Skill) | Composición y tipografía anti-genéricas («anti AI slop»): jerarquía, ritmo entre secciones, tarjetas sin bordes ni sombras innecesarios, escala tipográfica. Úsalo al crear o rediseñar una sección. |
| `ui-ux-pro-max` | Accesibilidad (WCAG 2.1 AA, contraste, foco, tamaños táctiles ≥ 44px), UX, interacción, responsive, rendimiento y revisión previa a entregar. |

Flujo sugerido: nueva sección o rediseño → `impeccable shape` + `design-taste-frontend` → `ui-ux-pro-max` para accesibilidad y responsive → `impeccable audit`/`polish` al final. Ajustes pequeños → al menos `impeccable polish` o `audit` sobre lo tocado más la revisión de `ui-ux-pro-max`.

### Orden de precedencia

1. `docs/brief.md` y los mockups aprobados (diseño desktop v1.0 congelado) mandan sobre cualquier regla de un skill.
2. `PRODUCT.md` (producto, usuarios, restricciones).
3. Reglas de los skills (`impeccable`, `design-taste-frontend`, `ui-ux-pro-max`). Si dos skills chocan, gana el que respete el brief; si ninguno lo hace, deja lo que ya está en el brief.

Cuando un skill pida algo que contradiga el brief (paleta, fuentes, orden de secciones, sistema de ilustración), se queda el brief y se anota en el resumen del cambio.

### Restricciones

- **No ejecutar scripts ni launchers que descarguen binarios o código de internet** (p. ej. `.agents/skills/impeccable/scripts/impeccable`, ni instaladores de los skills). Aplica sus criterios leyendo sus referencias en `.agents/skills/*/`. Tampoco scripts que escriban fuera del repo.
- **Conservar las ilustraciones aprobadas** (`public/illustrations/`, `assets/illustrations/`) y los logos. No regenerarlas ni crear arte alterno para móvil; solo reacomodar.
- Mantener el orden de secciones, los colores y las fuentes del brief; responsive = reacomodar, no rediseñar.
- Los datos de `src/content/campaign.config.ts` son **placeholders** (avance 37/100, puntos de acopio, WhatsApp, correo, redes, aliados). No los presentes como reales ni inventes datos nuevos; no dupliques cifras a mano en componentes.
- Solo donaciones en especie: nada de cuentas, pagos ni montos.
- No exponer información personal de beneficiarios ni menores identificables.

## Flujo de trabajo del repo

- **Cada cambio o feature va en una rama nueva** (`feat/…`, `fix/…`, `docs/…`) creada desde `main` actualizado. No hacer commit directo a `main`.
- Antes de commit deben pasar `pnpm lint` y `pnpm build`.
- El merge a `main` solo se hace cuando el responsable del proyecto lo pida explícitamente.
- Trabajar solo en el repo local; no usar agentes en la nube.
