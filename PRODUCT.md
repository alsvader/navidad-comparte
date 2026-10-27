# Product

<!-- impeccable:product-schema 1 -->

<!--
Generado con el flujo `init` de Impeccable (.agents/skills/impeccable/reference/init.md).
No hubo entrevista interactiva: los hechos provienen de docs/brief.md, src/content/campaign.config.ts
y el código actual. Lo que no está confirmado se marca como "Pendiente".
-->

## Platform

web

## Users
- **Visitante / donante individual** (público principal): persona de Huimanguillo, Tabasco, o con vínculo con el municipio, que llega desde redes o por recomendación, normalmente desde el celular, y quiere saber rápido qué donar y dónde entregarlo. Su tarea: elegir un juguete y llevarlo a un punto de acopio. No debe necesitar hablar con nadie para hacerlo.
- **Organizaciones, negocios y voluntarios** (secundario): quieren sumarse como punto de acopio, aliado o voluntario. Su tarea: entender cómo participar y contactar a la campaña.
- **Aliados actuales y potenciales**: revisan que su marca se use con autorización y que la campaña sea transparente.
- Pendiente de confirmar: perfil demográfico, dispositivos reales y canales de entrada (redes, WhatsApp, boca a boca).

## Product Purpose
Landing informativa de la campaña comunitaria **«Navidad que se comparte»** (en el brief: «Recolecta Navideña Huimanguillo 2026»). Reúne juguetes nuevos para entregarlos en diciembre de 2026 a niñas y niños de una comunidad del municipio de Huimanguillo, Tabasco. La meta inicial es **100 juguetes**.

Debe permitir que cualquier visitante entienda: qué es la iniciativa, por qué se hace, qué donar, dónde entregarlo, cuánto falta para la meta, qué comunidad se beneficia, cómo ayudar de otras formas, quién participa y cómo se documentará la campaña.

Éxito: visitantes que llegan a un punto de acopio y entregan un juguete, sin conversaciones manuales innecesarias; más puntos de acopio, aliados y voluntarios; confianza de que la campaña es transparente. Métricas de éxito numéricas: pendientes (aparte de la meta de 100 juguetes).

## Positioning
Es una iniciativa local, hecha por y para la comunidad de Huimanguillo: donación **solo en especie**, con puntos de acopio en negocios del municipio, avance público de la meta y reporte de resultados al cierre. No es un portal de donativos en dinero ni una campaña genérica de Navidad.

## Operating Context
- **Conversión principal** (siempre con este texto exacto): «Quiero donar un juguete», que lleva a `#puntos-de-acopio`. No abre WhatsApp directamente; WhatsApp solo se usa para coordinar cuando es necesario.
- **Conversiones secundarias**: Conoce cómo funciona, Cómo llegar, Coordinar por WhatsApp, Quiero ser punto de acopio, Quiero sumar a mi organización, Quiero ser voluntario, Quiero sumarme como aliado, Contáctanos. No deben competir visualmente con la principal.
- **Orden fijo de secciones**: Header + Hero, Por qué lo hacemos, Cómo donar, Puntos de acopio, Nuestra meta, La comunidad, Otras formas de sumarte, Aliados, Transparencia, CTA final, Footer. No se cambia sin decisión explícita de producto.
- **Ciclo de la campaña** (`status` en `src/content/campaign.config.ts`): `preparation`, `active`, `goal-reached`, `completed`. Estado actual en el código: `active`.
- **Contenido**: se administra con un objeto TypeScript local (`src/content/campaign.config.ts`); no hay CMS ni backend en la primera edición.
- **Despliegue**: sugerido Vercel en el brief; no hay deploy confirmado. El repo solo está en GitHub (`alsvader/navidad-comparte`).
- **Fechas de referencia**: entrega en diciembre de 2026; límite de recepción de juguetes el 15 de diciembre (valor de ejemplo, por confirmar).

## Capabilities and Constraints
- Stack: Next.js (App Router, TypeScript), Tailwind CSS v4, shadcn/ui, lucide-react, pnpm.
- **Política de donaciones**: solo en especie. No mostrar cuenta bancaria, transferencias, PayPal, procesadores de pago ni montos, salvo cambio explícito del modelo.
- **Reglas de donación**: juguetes nuevos, sin envolver, seguros, apropiados para la edad y de preferencia sin pilas. Evitar juguetes bélicos, usados o incompletos, dañados o inseguros.
- **Progreso**: fuente única de verdad en `campaign.config.ts` (`goal`, `current`, `lastUpdated`); `remaining` y porcentaje se derivan, nunca se duplican a mano.
- **Privacidad**: sin información personal ni familiar de beneficiarios; sin menores identificables sin autorización. Mientras la comunidad no esté confirmada se muestra «Próximamente conocerás la comunidad».
- **Aliados**: no recolorear logos de terceros sin autorización.
- **Responsive**: el diseño desktop (1280px) es la fuente de verdad; en móvil se reacomoda, no se rediseña (mismas ilustraciones, colores, jerarquía y contenido).
- **Terminología**: «punto de acopio», «juguete», «meta», «aliado», «comunidad». Español de México.
- **Datos placeholder (no publicar así)**: avance 37/100, fecha de última actualización, puntos de acopio (Café La Esquina, Papelería El Estudiante, Plaza Huimanguillo), URLs de Maps, WhatsApp `529171234567`, correo `hola@navidadquesecomparte.mx`, redes (Instagram y Facebook genéricas), aviso de privacidad y aliados «Aliado 1 a 10».
- **Pendiente**: nombre y datos de la comunidad, número real de niñas y niños, rango de edad, fecha exacta de entrega, formularios de contacto (el brief los sugiere para organizaciones, aliados y voluntarios; hoy no existen), analítica, dominio y deploy.
- Tarjetas «Resultados de la campaña» y «Después de la entrega»: ocultas hasta que `status` sea `"completed"`.

## Brand Commitments
- Nombre de campaña: **Navidad que se comparte**. Titular del hero: «100 regalos para 100 sonrisas en Huimanguillo.»
- Logo con lockup (con y sin «Huimanguillo, Tabasco»). El header y el footer usan la versión sin ubicación.
- **Sistema de ilustración aprobado**, parte central de la identidad: estilo flat tipo sticker/editorial, contornos Forest gruesos, formas redondeadas, colores sólidos, blobs pastel y pequeños destellos. 83 ilustraciones aprobadas en `assets/illustrations/` y `public/illustrations/`. No generar versiones distintas del mismo objeto por sección ni arte móvil alterno.
- **Paleta y tipografías de marca** definidas en `docs/brief.md` y `src/app/globals.css` (Cream, Coral, Forest, Golden, Sky, Ink; Nunito Sans para títulos e Inter para texto).
- **Evitar en lo decorativo**: nieve, renos, Santa como protagonista, estética Polo Norte, bastones de caramelo dominantes.
- Voz: cálida, comunitaria, cercana y en español de México; habla de «hacer equipo» y de comunidad, no de caridad ni de culpa. (Inferido del brief; por confirmar.)

## Evidence on Hand
- `docs/brief.md`: handoff de diseño v1.0 (desktop congelado) con sistema visual, arquitectura y reglas de contenido.
- 11 mockups desktop aprobados (los conserva el responsable del proyecto; no están en este repo).
- 83 ilustraciones y variantes de logo en `assets/illustrations/` (con manifiesto en `assets/manifest.md`).
- **No existe**: testimonios, cifras reales de recolección, listado confirmado de puntos de acopio, logos autorizados de aliados, fotografías de la campaña ni datos de la comunidad. No inventarlos.

## Product Principles
1. **Una acción principal clara.** Todo conduce a «Quiero donar un juguete» y a los puntos de acopio; lo demás acompaña sin competir.
2. **Confianza antes que emoción.** Progreso, fechas, reglas de donación y resultados son verificables y salen de una sola fuente de datos; nada de cifras o aliados inventados.
3. **Dignidad de los niños y de la comunidad.** Cero información personal de beneficiarios y cero menores identificables sin autorización.
4. **Cercanía local, no genérica.** Huimanguillo, sus negocios y su gente aparecen con nombre; la Navidad se expresa con el sistema de ilustración propio, no con clichés navideños.
5. **Reacomodar, no rediseñar.** El diseño aprobado manda; los cambios de interfaz refinan sin alterar marca, ilustraciones, orden ni contenido.

## Accessibility & Inclusion
- Meta mínima: **WCAG 2.1 AA**.
- Texto de cuerpo ≥ 16px; controles interactivos ≥ 44×44px; navegación por teclado y foco visible; encabezados semánticos; texto alternativo.
- Sin estados indicados solo por color; progreso expuesto a lectores de pantalla (`role="progressbar"`).
- Respetar `prefers-reduced-motion`; movimiento mínimo (sin parallax ni flotación constante).
- Audiencia con conexiones móviles variables: imágenes optimizadas y página ligera.
