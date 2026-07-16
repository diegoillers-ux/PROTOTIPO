import { AnimatedSections } from '@/components/animated-sections'
import { HeroSection } from '@/components/hero-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AnimatedSections />
      <SiteFooter />
    </main>
  )
}
