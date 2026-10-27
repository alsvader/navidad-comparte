import Image from "next/image"
import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { illustrations, type IllustrationName } from "@/content/illustrations"

type SectionProps = {
  id?: string
  background?: "cream" | "forest" | "sky-soft" | "custom"
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
        spacing === "default" ? "py-16 md:py-24" : "py-12 md:py-16",
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
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-semibold tracking-wide uppercase",
        variant === "action" ? "bg-coral-soft text-coral" : "bg-golden text-forest",
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

/** Ilustración aprobada (ver assets/manifest.md). alt vacío = decorativa. */
export function Illo({ name, alt = "", className, ...props }: IlloProps) {
  const i = illustrations[name]
  return (
    <Image
      src={i.src}
      width={i.width}
      height={i.height}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      className={cn("h-auto select-none", className)}
      {...props}
    />
  )
}

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-[28px] border-2 border-line bg-white/60", className)}>{children}</div>
}

export function ProgressBar({ current, goal, className, track = "light" }: { current: number; goal: number; className?: string; track?: "light" | "dark" }) {
  const pct = Math.min(current / goal, 1) * 100
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={goal}
      aria-valuenow={current}
      aria-label={`${current} de ${goal} juguetes recolectados`}
      className={cn("h-4 w-full overflow-hidden rounded-full", track === "light" ? "bg-forest-soft" : "bg-cream", className)}
    >
      <div
        className="h-full rounded-full bg-coral bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.18)_0_8px,transparent_8px_16px)] transition-[width] duration-700 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
