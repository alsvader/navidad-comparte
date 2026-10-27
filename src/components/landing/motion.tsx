"use client"

import { useEffect } from "react"

/**
 * Coreografía de scroll y puntero de la landing. Todo es mejora progresiva:
 * - El HTML llega con todo el contenido visible. Aquí solo se ocultan (opacity/transform) los bloques que están
 *   por debajo del pliegue, justo antes de que entren, y se revelan una sola vez con IntersectionObserver.
 * - Con prefers-reduced-motion: reduce no se oculta ni se anima nada.
 * - Solo transform/opacity/clip-path. Los bucles decorativos se pausan fuera de pantalla.
 */

const REVEAL_SELECTOR = ".reveal, .reveal-late, .bar-fill, .bar-load"
const LOOP_SELECTOR = ".m-float, .m-twinkle, .m-pulse, .m-sway"
const DURATION = 800 // ms, igual que --reveal-duration en globals.css
const STAGGER_STEP = 80
const STAGGER_CAP = 6

type Target = { el: HTMLElement; watch: HTMLElement; delay: number; preset: boolean }

export function MotionProvider() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reduce.matches || !("IntersectionObserver" in window)) return

    const cleanups: Array<() => void> = []
    const timers = new Set<number>()

    // ---------- Revelado al entrar (una sola vez), con escalonado ----------
    const targets: Target[] = []
    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
      const base = el.classList.contains("reveal-late") ? 140 : 0
      if (el.matches("ul, ol, [data-stagger]")) {
        const step = Number(el.dataset.staggerStep ?? STAGGER_STEP)
        const style = el.dataset.revealStyle
        Array.from(el.children).forEach((child, i) => {
          const c = child as HTMLElement
          if (style && !c.dataset.revealStyle) c.dataset.revealStyle = style
          targets.push({ el: c, watch: c, delay: base + Math.min(i, STAGGER_CAP) * step, preset: true })
        })
      } else {
        // La barra se recorta con clip-path (área visible 0): se observa su pista, que sí ocupa espacio.
        const watch = el.matches(".bar-fill, .bar-load") ? (el.parentElement ?? el) : el
        targets.push({ el, watch, delay: base, preset: false })
      }
    })

    const vh = window.innerHeight
    const byEl = new Map<Element, Target>()
    const io = new IntersectionObserver(
      (entries) => {
        // Los que entran juntos (columnas, tarjetas) se escalonan por posición.
        const incoming = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
        let n = 0
        for (const e of incoming) {
          const t = byEl.get(e.target)
          io.unobserve(e.target)
          if (!t) continue
          const delay = t.delay + (t.preset ? 0 : Math.min(n++, 4) * STAGGER_STEP)
          const el = t.el
          el.style.setProperty("--reveal-delay", `${delay}ms`)
          el.dataset.reveal = "in"
          const done = window.setTimeout(() => {
            timers.delete(done)
            // Limpia: el elemento vuelve a sus propias transiciones (hover, etc.).
            delete el.dataset.reveal
            el.style.removeProperty("--reveal-delay")
          }, delay + DURATION + 1400)
          timers.add(done)
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    )

    for (const t of targets) {
      const r = t.watch.getBoundingClientRect()
      // Solo se oculta lo que aún está por debajo de la línea de entrada: lo visible al cargar no parpadea.
      // El bloque del hero aún puede estar desplazado por su animación de entrada (hasta 24px): se le da holgura.
      if (r.top < vh * 0.9 + (t.el.classList.contains("bar-load") ? 40 : 0)) continue
      // Si está tan al final de la página que nunca cruzaría la línea de entrada, se deja visible.
      if (r.top + window.scrollY > document.documentElement.scrollHeight - vh * 0.1 - 24) continue
      if (t.el.classList.contains("bar-load")) {
        // Barra del hero bajo el pliegue (móvil): su animación de carga ya habría terminado, se llena al verla.
        t.el.style.animation = "none"
        t.el.dataset.revealStyle = "bar"
      }
      t.el.dataset.reveal = "hidden"
      byEl.set(t.watch, t)
      io.observe(t.watch)
    }
    cleanups.push(() => {
      io.disconnect()
      // Nunca dejar contenido oculto si el efecto se desmonta.
      byEl.forEach((t) => {
        delete t.el.dataset.reveal
        t.el.style.removeProperty("--reveal-delay")
      })
    })

    // ---------- Bucles decorativos: pausados fuera de pantalla ----------
    const loops = document.querySelectorAll<HTMLElement>(LOOP_SELECTOR)
    const loopIo = new IntersectionObserver((entries) => {
      for (const e of entries) {
        const el = e.target as HTMLElement
        if (e.isIntersecting) delete el.dataset.paused
        else el.dataset.paused = ""
      }
    })
    loops.forEach((el) => loopIo.observe(el))
    cleanups.push(() => {
      loopIo.disconnect()
      loops.forEach((el) => delete el.dataset.paused)
    })

    // ---------- Puntero (solo ratón/lápiz con hover real) ----------
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (fine.matches) {
      // Paralaje suave de las ilustraciones del hero según el puntero.
      const stages = document.querySelectorAll<HTMLElement>("[data-pointer-parallax]")
      stages.forEach((stage) => {
        const layers = Array.from(stage.querySelectorAll<HTMLElement>("[data-depth]"))
        const host = stage.closest("section") ?? stage
        let frame = 0
        const onMove = (ev: PointerEvent) => {
          if (ev.pointerType === "touch") return
          cancelAnimationFrame(frame)
          frame = requestAnimationFrame(() => {
            const r = host.getBoundingClientRect()
            const nx = (ev.clientX - r.left) / r.width - 0.5
            const ny = (ev.clientY - r.top) / r.height - 0.5
            for (const l of layers) {
              const d = Number(l.dataset.depth)
              l.style.translate = `${(-nx * d).toFixed(1)}px ${(-ny * d).toFixed(1)}px`
            }
          })
        }
        const onLeave = () => {
          cancelAnimationFrame(frame)
          for (const l of layers) l.style.translate = ""
        }
        host.addEventListener("pointermove", onMove, { passive: true })
        host.addEventListener("pointerleave", onLeave)
        cleanups.push(() => {
          cancelAnimationFrame(frame)
          host.removeEventListener("pointermove", onMove)
          host.removeEventListener("pointerleave", onLeave)
          for (const l of layers) l.style.translate = ""
        })
      })

      // Botón magnético: el botón se inclina hacia el puntero unos pocos píxeles.
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const max = 6
        const onMove = (ev: PointerEvent) => {
          if (ev.pointerType !== "mouse") return
          const r = el.getBoundingClientRect()
          const dx = (ev.clientX - (r.left + r.width / 2)) / (r.width / 2)
          const dy = (ev.clientY - (r.top + r.height / 2)) / (r.height / 2)
          el.style.transform = `translate(${(dx * max).toFixed(1)}px, ${(dy * max * 0.8).toFixed(1)}px)`
        }
        const onLeave = () => { el.style.transform = "" }
        el.addEventListener("pointermove", onMove, { passive: true })
        el.addEventListener("pointerleave", onLeave)
        cleanups.push(() => {
          el.removeEventListener("pointermove", onMove)
          el.removeEventListener("pointerleave", onLeave)
          el.style.transform = ""
        })
      })
    }

    return () => {
      timers.forEach((t) => window.clearTimeout(t))
      cleanups.forEach((fn) => fn())
    }
  }, [])

  return null
}
