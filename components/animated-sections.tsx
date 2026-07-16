'use client'

import { RevealOnScroll } from '@/components/reveal-on-scroll'
import { BenefitsSection } from '@/components/benefits-section'
import { CommunitySection } from '@/components/community-section'
import { ExperiencesSection } from '@/components/experiences-section'
import { FaqSection } from '@/components/faq-section'
import { NewsletterSection } from '@/components/newsletter-section'
import { SocialProofBar } from '@/components/social-proof-bar'

export function AnimatedSections() {
  return (
    <>
      <SocialProofBar />
      <RevealOnScroll>
        <BenefitsSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ExperiencesSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <CommunitySection />
      </RevealOnScroll>
      <RevealOnScroll>
        <FaqSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <NewsletterSection />
      </RevealOnScroll>
    </>
  )
}
