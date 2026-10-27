"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

/**
 * Cifra que cuenta de 0 al valor real cuando entra en pantalla.
 * El valor real siempre está en el HTML (SEO, lectores de pantalla, sin JS). Mientras cuenta, ese texto se
 * mantiene invisible (opacity) para conservar el ancho exacto y evitar saltos de layout, y una copia
 * aria-hidden muestra el número intermedio. Al terminar se restaura el valor real.
 */
export function CountUp({ value, delay = 0, duration = 1400, className }: { value: number; delay?: number; duration?: number; className?: string }) {
  const rootRef = useRef<HTMLSpanElement>(null)
  const liveRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const live = liveRef.current
    if (!root || !live) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return
    const sizer = root.firstElementChild as HTMLElement

    let raf = 0
    let timer = 0
    let started = false

    // Parte en 0 de inmediato (si está fuera de pantalla nadie lo ve; si es el hero, aún está en su retraso de entrada).
    sizer.style.opacity = "0"
    live.textContent = "0"

    const finish = () => {
      live.textContent = ""
      sizer.style.opacity = ""
    }
    const run = () => {
      const t0 = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - t0) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 4) // ease-out fuerte
        live.textContent = String(Math.round(value * eased))
        if (t < 1) raf = requestAnimationFrame(tick)
        else finish()
      }
      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (started || !entries.some((e) => e.isIntersecting)) return
        started = true
        io.disconnect()
        timer = window.setTimeout(run, delay)
      },
      { threshold: 0.5 }
    )
    io.observe(root)

    return () => {
      io.disconnect()
      window.clearTimeout(timer)
      cancelAnimationFrame(raf)
      finish()
    }
  }, [value, delay, duration])

  return (
    <span ref={rootRef} className={cn("relative inline-block", className)}>
      <span>{value}</span>
      <span ref={liveRef} aria-hidden className="absolute top-0 left-0" />
    </span>
  )
}
