import { CommunitySection } from '@/components/community-section'
import { ExperiencesSection } from '@/components/experiences-section'
import { HeroSection } from '@/components/hero-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <ExperiencesSection />
      <CommunitySection />
      <SiteFooter />
    </main>
  )
}
