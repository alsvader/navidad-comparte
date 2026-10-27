"use client"

import { useEffect, useRef, useState } from "react"
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

  // Escape cierra el menú móvil y devuelve el foco al botón.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus() }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className={cn("sticky top-0 z-50 bg-cream transition-shadow duration-200", scrolled && barShadow)}>
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <a href="#inicio" className="shrink-0 rounded-lg transition-opacity hover:opacity-80" aria-label="Navidad que se comparte · inicio">
          <Illo name="header-logo-horizontal" priority className="w-[168px] md:w-[190px]" />
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
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>
      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="bg-cream pb-2 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={active === l.href ? "location" : undefined}
                className="flex min-h-12 items-center rounded-xl px-3 text-base font-semibold text-forest transition-colors hover:bg-forest-soft aria-[current=location]:bg-forest-soft">
                {l.label}
              </a>
            ))}
            <a href="#puntos-de-acopio" onClick={() => setOpen(false)} className={cn(buttonVariants(), "mt-2 sm:hidden")}>
              Quiero donar un juguete
            </a>
          </Container>
        </nav>
      )}
    </header>
  )
}
