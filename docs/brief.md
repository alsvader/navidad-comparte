# Design → Development Handoff

## Recolecta Navideña Huimanguillo 2026

**Versión:** 1.0  
**Estado:** Diseño desktop aprobado y congelado  
**Fuente de verdad visual:** secciones desktop high-fidelity aprobadas individualmente  
**Objetivo:** implementar la landing respetando el sistema visual, jerarquía, contenido y comportamiento definidos durante la fase de diseño.

---

# 1. Objetivo del producto

Crear una landing informativa para una campaña comunitaria de recolección de juguetes en Huimanguillo, Tabasco.

La campaña tiene como objetivo inicial reunir:

**100 juguetes**

para entregarlos durante diciembre de 2026 a niñas y niños de una comunidad del municipio.

La landing debe permitir que cualquier visitante entienda rápidamente:

1. qué es la iniciativa;
2. por qué se realiza;
3. qué puede donar;
4. dónde puede entregar su juguete;
5. cuánto falta para alcanzar la meta;
6. qué comunidad será beneficiada;
7. cómo puede colaborar de otras maneras;
8. quiénes participan como aliados;
9. cómo se documentará la campaña.

---

# 2. Conversión principal

La acción principal de toda la landing es:

**Quiero donar un juguete**

Este CTA debe conservar siempre el mismo texto.

Su comportamiento recomendado:

```text
Quiero donar un juguete → #puntos-de-acopio
```

No debe abrir WhatsApp directamente.

El objetivo es reducir conversaciones manuales y llevar primero al usuario a los puntos de acopio.

---

# 3. Conversiones secundarias

Acciones secundarias:

- Conoce cómo funciona
- Cómo llegar
- Coordinar por WhatsApp
- Quiero ser punto de acopio
- Quiero sumar a mi organización
- Quiero ser voluntario
- Quiero sumarme como aliado
- Quiero sumarme
- Contáctanos

Estas acciones no deben competir visualmente con la conversión principal.

---

# 4. Arquitectura final

Orden definitivo de la landing:

1. Header + Hero
2. Por qué lo hacemos
3. Cómo donar
4. Puntos de acopio
5. Nuestra meta
6. La comunidad
7. Otras formas de sumarte
8. Aliados
9. Transparencia
10. CTA final
11. Footer

No modificar este orden durante implementación salvo decisión explícita de producto.

---

# 5. Design tokens

## Colors

### Cream

```css
--cream: #FFF7E8;
```

Fondo principal de la aplicación.

### Coral

```css
--coral: #F04F3D;
```

Uso:

- CTA principal;
- información destacada;
- números importantes;
- acentos;
- progreso.

### Forest

```css
--forest: #184D3A;
```

Uso:

- headings;
- botones secundarios;
- bordes;
- footer;
- CTA final;
- iconografía.

### Golden

```css
--golden: #F6BE3E;
```

Uso:

- badges;
- estrellas;
- hitos;
- elementos celebratorios.

### Sky

```css
--sky: #68C5E8;
```

Uso:

- ilustraciones;
- fondos secundarios;
- elementos de información.

### Ink

```css
--ink: #17322A;
```

Texto principal.

### White

```css
--white: #FFFFFF;
```

Uso limitado a superficies y contraste.

---

# 6. Derived colors

No obtener colores suaves directamente de los mockups.

Crear derivados consistentes desde los tokens principales.

Ejemplo:

```css
--coral-soft: rgba(240, 79, 61, 0.10);
--golden-soft: rgba(246, 190, 62, 0.14);
--sky-soft: rgba(104, 197, 232, 0.16);
--forest-soft: rgba(24, 77, 58, 0.08);
```

---

# 7. Typography

## Display / Headings

**Nunito Sans**

Pesos:

```text
700
800
900
```

Uso:

- Hero;
- títulos de sección;
- números;
- CTAs importantes;
- estadísticas.

## Body / UI

**Inter**

Pesos:

```text
400
500
600
```

Uso:

- párrafos;
- navegación;
- labels;
- información operativa;
- formularios.

---

# 8. Typography scale

## Hero

Desktop:

```text
64–80px
font-weight: 900
line-height: 0.95–1.05
```

## Section heading

```text
40–56px
font-weight: 800–900
```

## Card heading

```text
22–28px
font-weight: 800
```

## Body large

```text
18px / 30px
```

## Body

```text
16px / 26px
```

## Small

```text
14px / 22px
```

---

# 9. Spacing system

Base unit:

```text
8px
```

Escala:

```text
8
16
24
32
48
64
80
96
128
```

Separación entre secciones desktop:

```text
96–128px
```

Padding horizontal:

```text
24–32px
```

Max container:

```text
1200–1280px
```

---

# 10. Border radius

```text
Small:   12px
Medium:  20px
Large:   28px
XL:      32px
Pill:    999px
```

Cards estándar:

```text
24–28px
```

---

# 11. Borders

Borde estándar:

```css
border: 2px solid rgba(24, 77, 58, 0.14);
```

Componentes ilustrados especiales pueden utilizar Forest más fuerte.

Evitar bordes de 1px demasiado sutiles.

---

# 12. Shadows

Muy limitadas.

Ejemplo:

```css
box-shadow: 0 8px 24px rgba(23, 50, 42, 0.08);
```

No convertir la interfaz en una colección de cards flotantes tipo SaaS.

---

# 13. Buttons

## Primary

Uso:

**Donación**

```text
background: Coral
text: White
```

Ejemplos:

- Quiero donar un juguete
- Quiero ayudar a llegar a 100

## Secondary

Uso:

acciones de participación.

```text
background: Forest
text: Cream / White
```

Ejemplos:

- Quiero ser voluntario
- Quiero ser punto de acopio
- Quiero sumarme como aliado

## Outline

```text
background: transparent
border: Forest
text: Forest
```

Ejemplos:

- Conoce cómo funciona
- Cómo llegar
- Quiero sumarme

## Button height

Mínimo:

```text
48px
```

Ideal:

```text
52–56px
```

---

# 14. Button interactions

Hover:

```text
translateY(-2px)
```

Transition:

```text
180–220ms ease
```

Active:

```text
translateY(0)
```

Focus:

visible focus ring compatible con WCAG AA.

---

# 15. Illustration system

El sistema de ilustración es parte central de la identidad.

## Style

- flat;
- sticker/editorial;
- contornos Forest gruesos;
- formas redondeadas;
- colores sólidos;
- detalle moderado;
- sombras mínimas;
- blobs pastel de fondo;
- pequeños rayos/destellos.

## Recurrent assets

Crear assets reutilizables para:

```text
gift
gift-stack
teddy
ball
car
blocks
puzzle
board-game
art-supplies
map
map-pin
coffee-shop
stationery-shop
plaza
community
clipboard
delivery
results
camera
whatsapp
volunteer
business-team
```

Preferentemente:

**SVG**

No generar diferentes versiones del mismo objeto para cada sección.

---

# 16. Decorative system

Elementos permitidos:

- estrellas;
- corazones;
- rayos;
- puntos;
- líneas curvas;
- pequeños confetis.

Paleta:

```text
Coral
Golden
Sky
Forest
```

No utilizar:

- nieve;
- renos;
- Santa como protagonista;
- estética Polo Norte;
- bastones de caramelo como recurso dominante.

---

# 17. Eyebrow system

Dos variantes.

## Action eyebrow

Coral / Coral Soft.

Uso:

- Hero
- Por qué lo hacemos
- Cómo participar
- Dónde donar

## Impact eyebrow

Golden.

Uso:

- Nuestra meta
- La comunidad
- Otras formas de sumarte
- Aliados
- Transparencia

Esto debe implementarse como variantes del mismo componente.

Ejemplo:

```tsx
<Eyebrow variant="action" />
<Eyebrow variant="impact" />
```

---

# 18. Section component

Todas las secciones deben compartir una estructura base.

```tsx
<Section>
  <Container>
    ...
  </Container>
</Section>
```

Propiedades sugeridas:

```ts
type SectionProps = {
  id?: string
  background?: 'cream' | 'forest' | 'sky-soft' | 'custom'
  spacing?: 'default' | 'compact'
}
```

---

# 19. Header

Desktop:

```text
Logo
Navigation
Primary CTA
```

Navigation:

- La iniciativa
- Cómo donar
- Puntos de acopio
- La comunidad
- Aliados
- Transparencia

CTA:

**Quiero donar un juguete**

Header puede ser sticky.

Si se usa sticky:

```text
background con ligera transparencia / blur
```

pero evitar estética glassmorphism fuerte.

---

# 20. Hero

## Content

Eyebrow:

**NAVIDAD QUE SE COMPARTE**

Headline:

**100 regalos para 100 sonrisas en Huimanguillo.**

Subheadline:

> Estamos reuniendo 100 juguetes para niñas y niños de una comunidad de Huimanguillo, Tabasco.

CTA:

**Quiero donar un juguete**

Secondary:

**Conoce cómo funciona**

Progress:

```text
37 de 100 juguetes recolectados
```

Last update:

```text
Última actualización: 12 de diciembre de 2026
```

## Layout

Desktop:

```text
55% copy
45% illustration
```

---

# 21. Por qué lo hacemos

Headline:

**Una Navidad que se comparte.**

Content:

Explicación corta de la iniciativa.

Highlight:

```text
100 regalos
1 comunidad
Navidad 2026
```

Quote / key statement:

**100 regalos. Una comunidad. Muchas personas haciendo equipo.**

---

# 22. Cómo donar

Flow:

```text
01 Elige un juguete
02 Revisa las recomendaciones
03 Llévalo a un punto de acopio
```

Rules:

## Qué sí

- Nuevo
- Sin envolver
- Seguro
- Apropiado para su edad
- Preferentemente sin pilas

## Qué evitar

- Juguetes bélicos
- Usados o incompletos
- Juguetes dañados
- Artículos inseguros

Suggestions:

- Pelotas
- Muñecos / peluches
- Carritos
- Rompecabezas
- Bloques
- Juegos
- Material creativo

CTA:

**Ver puntos de acopio**

---

# 23. Puntos de acopio

Data-driven component.

Suggested type:

```ts
type CollectionPoint = {
  id: string
  name: string
  address: string
  city: string
  schedule: string
  deadline: string
  mapsUrl: string
  illustration: string
  active: boolean
}
```

Card displays:

```text
name
address
schedule
deadline
maps CTA
```

CTA:

**Cómo llegar**

Additional actions:

- Ver todos en el mapa
- Coordinar por WhatsApp
- Quiero ser punto de acopio

---

# 24. Nuestra meta

Single source of truth.

```ts
type CampaignProgress = {
  goal: number
  current: number
  lastUpdated: string
}
```

Derived:

```ts
remaining = Math.max(goal - current, 0)
percentage = current / goal
```

Never manually duplicate:

```text
37
63
37%
```

in different places.

Milestones:

```text
25
50
75
100
```

Copy:

```text
Primer cuarto.
Ya vamos a la mitad.
Estamos muy cerca.
¡Meta cumplida!
```

---

# 25. La comunidad

Suggested data:

```ts
type Community = {
  confirmed: boolean
  name?: string
  municipality: string
  estimatedChildren?: number
  ageRange?: string
  deliveryDate?: string
}
```

Before confirmation:

**Próximamente conocerás la comunidad**

After confirmation:

**Este año llegaremos a [Community]**

Avoid personal/family information.

---

# 26. Otras formas de sumarte

Three options:

```text
Punto de acopio
Empresa / organización
Voluntariado
```

Suggested component:

```tsx
<ParticipationCard />
```

Props:

```ts
type ParticipationOption = {
  title: string
  description: string
  illustration: string
  action: string
  href: string
}
```

Additional CTA:

**¿Tienes otra forma de ayudar?**

---

# 27. Aliados

Suggested type:

```ts
type Partner = {
  name: string
  logo: string
  url?: string
}
```

Logo container:

```text
fixed visual height
object-fit: contain
consistent internal padding
```

Do not recolor third-party logos without authorization.

CTA:

**Quiero sumarme como aliado**

---

# 28. Transparencia

Process:

```text
01 Conteo
02 Clasificación
03 Entrega
04 Resultados
```

Campaign metrics:

```ts
type CampaignResults = {
  toysCollected?: number
  toysDelivered?: number
  childrenBenefited?: number
  partners?: number
  collectionPoints?: number
}
```

While active:

```text
Disponible al finalizar
```

After delivery:

populate actual results.

---

# 29. Donations policy

Current campaign model:

**Donaciones en especie únicamente.**

Do not display:

- bank account;
- transfer;
- PayPal;
- payment processor;
- donation amount.

Unless the campaign model changes explicitly.

---

# 30. Privacy

Photography rules:

- document logistics;
- photograph collection points;
- preparation;
- volunteers;
- delivery environment.

Avoid publishing identifiable minors without proper authorization.

No personal beneficiary information on the landing.

---

# 31. CTA final

Background:

```text
Forest
```

Content:

**¿Nos ayudas a llegar a 100?**

Display:

```text
37 / 100
```

CTA:

**Quiero donar un juguete**

Secondary:

**Quiero sumarme**

The section should feel like a compact second Hero.

---

# 32. Footer

Background:

```text
Forest
```

Columns:

```text
Brand
Explora
Participa
Contacto
```

Include:

- Instagram
- Facebook
- WhatsApp
- email
- privacy notice
- contact

Footer and CTA final should visually behave as one closing region.

---

# 33. Responsive rules

The desktop design is the visual source of truth.

Responsive implementation must:

**reflow, not redesign.**

That means:

- same illustrations;
- same colors;
- same iconography;
- same hierarchy;
- same components;
- same content.

Only modify:

- grid → stack;
- widths;
- padding;
- type scale;
- spacing;
- alignment.

Do not create alternate mobile artwork.

---

# 34. Suggested breakpoints

```text
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Primary design target:

```text
1280px desktop
```

---

# 35. Accessibility

Minimum target:

**WCAG 2.1 AA**

Requirements:

- body text ≥ 16px;
- interactive controls ≥ 44×44px;
- keyboard navigation;
- visible focus states;
- semantic headings;
- alt text;
- no color-only state indicators;
- progress value exposed to screen readers;
- `prefers-reduced-motion`.

Example:

```html
<div
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="37"
  aria-label="37 de 100 juguetes recolectados"
/>
```

---

# 36. Motion

Use sparingly.

Allowed:

- fade / translate section entry;
- progress animation;
- small card hover;
- decorative micro-movement;
- confetti on goal completion.

Avoid:

- parallax;
- constant floating objects;
- heavy GSAP timelines;
- animations that block interaction.

---

# 37. Campaign states

## `preparation`

Before launch.

Show:

- community pending;
- collection points pending;
- progress 0;
- early partners.

## `active`

Campaign open.

Show:

- CTA donation;
- live progress;
- collection points;
- deadline.

## `goal-reached`

When:

```ts
current >= goal
```

Show:

**¡Meta cumplida!**

Continue receiving donations until campaign deadline if desired.

## `completed`

After campaign closes.

Change:

- donation CTA → campaign closed;
- disable/remove active collection points;
- Transparency → Results 2026;
- show actual metrics;
- add gallery/report.

---

# 38. Suggested campaign model

```ts
type Campaign = {
  year: number
  status: 'preparation' | 'active' | 'goal-reached' | 'completed'

  goal: number
  current: number
  lastUpdated: string

  donationDeadline: string
  deliveryDate?: string

  community: Community

  collectionPoints: CollectionPoint[]
  partners: Partner[]

  results?: CampaignResults
}
```

---

# 39. Suggested component tree

```text
LandingPage

├── Header
├── Hero
│   └── ProgressMini
│
├── WhySection
│
├── HowToDonate
│   ├── DonateStep
│   ├── DonationRules
│   └── ToySuggestions
│
├── CollectionPoints
│   └── CollectionPointCard
│
├── GoalSection
│   ├── ProgressBar
│   └── Milestone
│
├── CommunitySection
│
├── ParticipationSection
│   └── ParticipationCard
│
├── PartnersSection
│   └── PartnerLogo
│
├── TransparencySection
│   ├── TransparencyStep
│   └── CampaignMetric
│
├── FinalCTA
└── Footer
```

---

# 40. SEO

Suggested title:

**100 regalos para 100 sonrisas | Huimanguillo 2026**

Description:

> Súmate a nuestra recolecta navideña de juguetes en Huimanguillo, Tabasco. Queremos reunir 100 regalos para niñas y niños de una comunidad esta Navidad.

Open Graph image:

Use campaign identity + `100` + gift illustration.

Recommended:

```text
1200 × 630
```

---

# 41. Analytics events

Suggested events:

```text
donate_cta_click
collection_point_maps_click
whatsapp_coordination_click
become_collection_point_click
organization_signup_click
volunteer_click
partner_signup_click
social_link_click
```

Include optional metadata:

```text
section
collection_point_id
campaign_year
```

---

# 42. Content management

For this first edition, a CMS is not necessary.

Recommended:

simple local configuration object / JSON / TypeScript file.

Example:

```text
campaign.config.ts
```

Dynamic content:

- progress;
- points;
- partners;
- community;
- status;
- results.

This keeps complexity low.

---

# 43. Recommended technical implementation

Suggested stack:

```text
Next.js
TypeScript
Tailwind CSS
```

Optional:

```text
Framer Motion
```

Only for lightweight motion.

Deployment:

```text
Vercel
```

No backend is required initially unless forms are added.

---

# 44. Contact forms

Recommended approach:

Individual donor:

```text
No form.
```

Use:

collection points first.

WhatsApp only when coordination is necessary.

Organization / ally / volunteer:

simple contact form.

Suggested fields:

```text
name
organization?
email / whatsapp
participationType
message
```

---

# 45. Asset checklist

Before development is considered complete, prepare:

- campaign logo;
- gift illustrations;
- toy illustrations;
- collection point illustrations;
- community landscape;
- transparency icons;
- participation illustrations;
- social icons;
- partner logos;
- OG image;
- favicon;
- app icon if necessary.

Preferred:

```text
SVG
```

Raster only where necessary.

---

# 46. Implementation priorities

## P0

- responsive layout;
- content;
- CTA flow;
- collection points;
- progress;
- accessibility.

## P1

- campaign states;
- partners;
- form;
- analytics.

## P2

- motion;
- decorative interactions;
- results gallery;
- enhanced post-campaign state.

---

# 47. QA checklist

Before launch:

- all links work;
- Maps URLs verified;
- WhatsApp number verified;
- email verified;
- progress correct;
- remaining count correct;
- deadline correct;
- community copy correct;
- partner authorization confirmed;
- images optimized;
- mobile tested;
- keyboard tested;
- reduced motion tested;
- metadata verified;
- OG preview verified;
- Lighthouse reviewed;
- no placeholder content remains.

---

# 48. Source of truth

The implementation must follow:

**1. This handoff document for system rules.**

**2. The individually approved desktop high-fidelity sections for visual composition.**

If there is a conflict between different generated images, do not improvise a hybrid.

Use the approved section corresponding to that component and apply the shared design tokens defined in this document.

---

# 49. Frozen design sections

The following desktop sections are considered approved:

- Hero
- Por qué lo hacemos
- Cómo donar
- Puntos de acopio
- Nuestra meta
- La comunidad
- Otras formas de sumarte
- Aliados
- Transparencia
- CTA final
- Footer

Any future changes should be treated as a new design revision rather than silently modifying v1.0.

---

# 50. Design status

## Landing Recolecta Navideña

**Desktop Design:** v1.0 — Frozen  
**Design System:** v1.0 — Ready  
**Content Architecture:** v1.0 — Ready  
**Development Handoff:** v1.0 — Ready

### Next stage

**Implementation**
