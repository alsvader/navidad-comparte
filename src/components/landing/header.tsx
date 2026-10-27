"use client"

import { useCallback, useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container, Illo } from "./primitives"

// Barra fija: es un overlay real, el único elemento con sombra, y solo al hacer scroll.
const barShadow = "shadow-[0_8px_24px_-12px_rgba(24,77,58,0.28)]" // taste-skill-ignore

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Sección activa en la navegación (scroll-spy ligero con IntersectionObserver).
  useEffect(() => {
    const els = navLinks.map((l) => document.querySelector(l.href)).filter((e): e is Element => !!e)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`)
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    els.forEach((el) => io.observe(el))
    const onScroll = () => {
      if (window.scrollY < 200) setActive(null)
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll) }
  }, [])

  const closeMenu = useCallback((returnFocus = true) => {
    setOpen(false)
    if (returnFocus) toggleRef.current?.focus({ preventScroll: true })
  }, [])

  // Menú móvil a pantalla completa: bloquea el scroll, atrapa el foco y cierra con Escape.
  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    const body = document.body
    const gutter = window.innerWidth - root.clientWidth // evita el salto de layout si hay barra de scroll
    const prev = { rootOverflow: root.style.overflow, bodyOverflow: body.style.overflow, bodyPad: body.style.paddingRight }
    root.style.overflow = "hidden"
    body.style.overflow = "hidden"
    if (gutter > 0) body.style.paddingRight = `${gutter}px`

    // Al abrir, el foco pasa al botón de cerrar. Se espera un instante: con visibility en transición el panel aún no es enfocable en el primer frame.
    const focusTimer = window.setTimeout(() => closeRef.current?.focus({ preventScroll: true }), 50)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); closeMenu(); return }
      if (e.key !== "Tab" || !panelRef.current) return
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      const current = document.activeElement
      if (e.shiftKey && (current === first || !panelRef.current.contains(current))) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && (current === last || !panelRef.current.contains(current))) { e.preventDefault(); first.focus() }
    }
    document.addEventListener("keydown", onKey)

    // Al pasar a escritorio el menú móvil deja de existir: se cierra sin mover el foco.
    const mq = window.matchMedia("(min-width: 1024px)")
    const onMq = (e: MediaQueryListEvent) => { if (e.matches) setOpen(false) }
    mq.addEventListener("change", onMq)

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener("keydown", onKey)
      mq.removeEventListener("change", onMq)
      root.style.overflow = prev.rootOverflow
      body.style.overflow = prev.bodyOverflow
      body.style.paddingRight = prev.bodyPad
    }
  }, [open, closeMenu])

  // Enlace del menú: cierra (devuelve el scroll) y desplaza suavemente a la sección; scroll-padding-top del html compensa el header.
  const goTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href)
    closeMenu()
    if (!target) return
    e.preventDefault()
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
      history.pushState(null, "", href)
    })
  }

  return (
    <header className={cn("sticky top-0 z-50 bg-cream transition-shadow duration-200", scrolled && barShadow)}>
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <a href="#inicio" className="shrink-0 rounded-lg transition-opacity hover:opacity-80" aria-label="Navidad que se comparte · inicio">
          <Illo name="footer-logo-lockup-no-location" priority className="h-12 w-auto md:h-14" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-semibold text-ink">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? "location" : undefined}
                  className={cn(
                    "relative inline-flex min-h-11 items-center rounded-md transition-colors hover:text-coral-strong",
                    "after:absolute after:inset-x-0 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-coral-strong after:transition-transform after:duration-200 hover:after:scale-x-100 motion-reduce:after:transition-none",
                    active === l.href && "text-forest after:scale-x-100"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#puntos-de-acopio" className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}>
          Quiero donar un juguete
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-12 items-center justify-center rounded-full border-2 border-forest text-forest transition-colors hover:bg-forest hover:text-cream active:scale-95 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-haspopup="dialog"
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-5" />
        </button>
      </Container>
      {/* Menú móvil: capa fija a pantalla completa, siempre montada y oculta con visibility + inert (permite animar la salida). */}
      <div
        id="menu-movil"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        inert={!open}
        data-open={open ? "" : undefined}
        className={cn(
          "group fixed inset-0 z-[60] flex h-dvh flex-col overflow-y-auto overscroll-contain bg-cream lg:hidden",
          // Cierre más rápido que la apertura; la visibilidad se interpola sola (visible mientras dura la transición).
          "invisible [clip-path:circle(0%_at_calc(100%-3.25rem)_2.375rem)] transition-[clip-path,visibility] duration-300 ease-[cubic-bezier(0.5,0,0.75,0)]",
          "data-[open]:visible data-[open]:[clip-path:circle(150%_at_calc(100%-3.25rem)_2.375rem)] data-[open]:duration-[480ms] data-[open]:ease-[cubic-bezier(0.16,1,0.3,1)]",
          // Movimiento reducido: sin recorte animado, solo desvanecido breve.
          "motion-reduce:[clip-path:none] motion-reduce:opacity-0 motion-reduce:transition-[opacity,visibility] motion-reduce:duration-150 motion-reduce:data-[open]:opacity-100 motion-reduce:data-[open]:[clip-path:none] motion-reduce:data-[open]:duration-200"
        )}
      >
        <Container className="flex h-[76px] shrink-0 items-center justify-between gap-6">
          <a href="#inicio" onClick={(e) => goTo(e, "#inicio")} className="shrink-0 rounded-lg" aria-label="Navidad que se comparte · inicio">
            <Illo name="footer-logo-lockup-no-location" className="h-12 w-auto" />
          </a>
          <button
            ref={closeRef}
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-full border-2 border-forest text-forest transition-colors hover:bg-forest hover:text-cream active:scale-95"
            aria-label="Cerrar menú"
            onClick={() => closeMenu()}
          >
            <X className="size-5" />
          </button>
        </Container>
        <nav aria-label="Menú móvil" className="relative flex flex-1 flex-col">
          <Container className="flex flex-1 flex-col justify-center gap-6 pt-4 pb-10">
            <ul className="flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <li
                  key={l.href}
                  style={{ "--i": i } as CSSProperties}
                  className={cn(
                    "opacity-0 transition-[opacity,transform] duration-200 ease-out translate-y-4",
                    "group-data-[open]:translate-y-0 group-data-[open]:opacity-100 group-data-[open]:duration-500 group-data-[open]:ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[open]:[transition-delay:calc(140ms+var(--i)*55ms)]",
                    "motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:group-data-[open]:[transition-delay:0ms]"
                  )}
                >
                  <a
                    href={l.href}
                    onClick={(e) => goTo(e, l.href)}
                    aria-current={active === l.href ? "location" : undefined}
                    className="flex min-h-14 items-center rounded-2xl px-3 font-display text-[1.75rem] leading-tight font-extrabold tracking-[-0.01em] text-forest transition-colors hover:bg-forest-soft hover:text-coral-strong aria-[current=location]:text-coral-strong"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#puntos-de-acopio"
              onClick={(e) => goTo(e, "#puntos-de-acopio")}
              style={{ "--i": navLinks.length } as CSSProperties}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full opacity-0 translate-y-4 [transition:opacity_200ms_ease-out,transform_200ms_ease-out,background-color_200ms,color_200ms]",
                "group-data-[open]:translate-y-0 group-data-[open]:opacity-100 group-data-[open]:[transition:opacity_500ms_cubic-bezier(0.16,1,0.3,1)_calc(140ms+var(--i)*55ms),transform_500ms_cubic-bezier(0.16,1,0.3,1)_calc(140ms+var(--i)*55ms),background-color_200ms,color_200ms]",
                "motion-reduce:translate-y-0 motion-reduce:group-data-[open]:[transition:none]"
              )}
            >
              Quiero donar un juguete
            </a>
          </Container>
          {/* Adorno aprobado, sutil y fuera del flujo. */}
          <Illo
            name="footer-deco-star-heart"
            className="pointer-events-none absolute right-3 bottom-4 w-[120px] translate-y-4 opacity-0 transition-[opacity,transform] duration-300 group-data-[open]:translate-y-0 group-data-[open]:opacity-90 group-data-[open]:delay-500 group-data-[open]:duration-700 motion-reduce:translate-y-0 motion-reduce:transition-none"
          />
        </nav>
      </div>
    </header>
  )
}
