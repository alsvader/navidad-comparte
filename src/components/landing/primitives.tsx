import Image from "next/image"
import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { illustrations, type IllustrationName } from "@/content/illustrations"

type SectionProps = {
  id?: string
  background?: "cream" | "forest" | "sky-soft" | "golden" | "sky" | "mint" | "custom"
  spacing?: "default" | "compact"
  className?: string
  children: ReactNode
  "aria-labelledby"?: string
}

export function Section({ id, background = "cream", spacing = "default", className, children, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        background === "cream" && "bg-cream",
        background === "forest" && "bg-forest text-cream",
        background === "sky-soft" && "bg-sky-soft",
        background === "golden" && "bg-golden-field",
        background === "sky" && "bg-sky-field",
        background === "mint" && "bg-mint-field",
        spacing === "default" ? "py-20 md:py-32" : "py-16 md:py-24",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  )
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-8", className)}>{children}</div>
}

export function Eyebrow({ variant = "action", children, className }: { variant?: "action" | "impact"; children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[15px] leading-6 font-semibold",
        variant === "action" ? "bg-coral-soft text-coral-strong" : "bg-golden text-forest",
        className
      )}
    >
      {children}
    </p>
  )
}

type IlloProps = Omit<ComponentProps<typeof Image>, "src" | "width" | "height" | "alt"> & {
  name: IllustrationName
  alt?: string
}

/**
 * Deduce el atributo `sizes` a partir de las clases de ancho (w-8, w-[260px], md:w-[190px], max-w-[320px]…)
 * para que next/image sirva la variante justa en vez de la imagen intrínseca completa.
 * Si no hay ancho fijo, usa un valor conservador según el ancho intrínseco.
 */
function inferSizes(className: string | undefined, intrinsic: number, aspect: number): string {
  const px = (token: string) => {
    const m = token.match(/^(?:w|max-w|size)-(?:\[(\d+(?:\.\d+)?)px\]|(\d+(?:\.\d+)?))$/)
    if (!m) return null
    return m[1] ? Number(m[1]) : Number(m[2]) * 4
  }
  const tokens = (className ?? "").split(/\s+/)
  let base: number | null = null
  const bps: Array<[string, number]> = []
  for (const t of tokens) {
    const parts = t.split(":")
    const v = px(parts[parts.length - 1])
    if (v === null) continue
    if (parts.length === 1) base = base === null ? v : Math.min(base, v)
    else if (parts.length === 2 && ["sm", "md", "lg", "xl"].includes(parts[0])) bps.push([parts[0], v])
  }
  if (base === null && !bps.length) {
    // Sin ancho fijo: si hay altura fija/máxima (h-10, max-h-36…) el ancho sale de la proporción.
    for (const t of tokens) {
      const m = t.match(/^(?:max-h|h)-(\d+(?:\.\d+)?)$/)
      if (m) base = Math.round(Number(m[1]) * 4 * aspect)
    }
  }
  const bpPx: Record<string, number> = { sm: 640, md: 768, lg: 1024, xl: 1280 }
  if (base !== null || bps.length) {
    const fallback = base ?? Math.min(intrinsic, 320)
    const sorted = bps.sort((a, b) => bpPx[b[0]] - bpPx[a[0]]).map(([bp, v]) => `(min-width: ${bpPx[bp]}px) ${v}px`)
    return [...sorted, `${fallback}px`].join(", ")
  }
  return `(min-width: 1024px) ${Math.min(intrinsic, 560)}px, 90vw`
}

/** Ilustración aprobada (ver assets/manifest.md). alt vacío = decorativa. */
export function Illo({ name, alt = "", className, sizes, ...props }: IlloProps) {
  const i = illustrations[name]
  return (
    <Image
      src={i.src}
      width={i.width}
      height={i.height}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      sizes={sizes ?? inferSizes(className, i.width, i.width / i.height)}
      className={cn("h-auto select-none", className)}
      {...props}
    />
  )
}

/** Aviso accesible para enlaces que abren una pestaña nueva. */
export function NewTab() {
  return <span className="sr-only"> (se abre en una pestaña nueva)</span>
}

/** Superficie rellena (sin borde ni sombra en reposo): la jerarquía sale del tono, no de la línea. */
export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-[32px] bg-white", className)}>{children}</div>
}

/** trigger="load": se llena al cargar (hero, ya visible). trigger="view" (por defecto): se llena al entrar en pantalla. */
export function ProgressBar({ current, goal, className, track = "light", trigger = "view" }: { current: number; goal: number; className?: string; track?: "light" | "dark"; trigger?: "load" | "view" }) {
  const pct = Math.min(current / goal, 1) * 100
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={goal}
      aria-valuenow={current}
      aria-label={`${current} de ${goal} juguetes recolectados`}
      className={cn("h-4 w-full overflow-hidden rounded-full", track === "light" ? "bg-forest/15" : "bg-cream/90", className)}
    >
      <div
        className={cn("h-full rounded-full bg-coral", trigger === "load" ? "bar-load" : "bar-fill")}
        data-reveal-style={trigger === "view" ? "bar" : undefined}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
