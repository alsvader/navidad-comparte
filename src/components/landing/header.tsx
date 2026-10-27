"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/content/campaign.config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container, Illo } from "./primitives"

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b-2 border-line/60 bg-cream/90 backdrop-blur-sm">
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <a href="#inicio" className="shrink-0" aria-label="Navidad que se comparte · inicio">
          <Illo name="header-logo-horizontal" priority className="w-[168px] md:w-[190px]" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-medium text-ink">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-md py-2 transition-colors hover:text-coral">
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
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border-2 border-forest text-forest lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>
      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t-2 border-line bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-2 py-3 text-base font-semibold text-forest hover:bg-forest-soft">
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
