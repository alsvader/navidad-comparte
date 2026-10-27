# Navidad que se comparte

Landing de la colecta de juguetes «Navidad que se comparte» (Huimanguillo, Tabasco).

Stack: Next.js (App Router, TypeScript), Tailwind CSS v4, shadcn/ui, lucide-react y pnpm.

## Cómo correrlo

```bash
pnpm install
pnpm dev          # desarrollo en http://localhost:3000
pnpm build && pnpm start   # producción
pnpm lint
```

## Editar contenido

Todo el contenido editable (avance de la meta, puntos de acopio, contacto, aliados y redes) vive en
`src/content/campaign.config.ts`.

> ⚠️ Los datos actuales son **placeholders**: avance 37/100, puntos de acopio, WhatsApp, correo, redes y aliados.
> Reemplázalos por los datos reales antes de publicar.

- Ilustraciones: `public/illustrations/` (mapa tipado en `src/content/illustrations.ts`).
- Secciones: `src/components/landing/`.
- Tokens de marca: `src/app/globals.css`.
- Brief: `docs/brief.md`.
