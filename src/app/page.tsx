import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { WhySection } from "@/components/landing/why"
import { HowToDonate } from "@/components/landing/how-to-donate"
import { CollectionPoints } from "@/components/landing/collection-points"
import { GoalSection } from "@/components/landing/goal"
import { CommunitySection } from "@/components/landing/community"
import { ParticipationSection } from "@/components/landing/participation"
import { PartnersSection } from "@/components/landing/partners"
import { TransparencySection } from "@/components/landing/transparency"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <>
      <a href="#contenido" className="sr-only z-[60] rounded-full bg-forest px-5 py-3 font-semibold text-cream shadow-soft focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus-visible:outline-golden">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <WhySection />
        <HowToDonate />
        <CollectionPoints />
        <GoalSection />
        <CommunitySection />
        <ParticipationSection />
        <PartnersSection />
        <TransparencySection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
