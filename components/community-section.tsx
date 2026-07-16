import Image from 'next/image'
import { ArrowUpRight, Heart, MessageCircle, Quote } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function CommunitySection() {
  return (
    <>
      <section id="nosotros" className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[30rem] border-border md:border-r">
            <Image src="/images/guatape.png" alt="Grupo de viajeros contemplando el paisaje de Guatapé" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center gap-8 p-6 md:p-12 lg:p-20">
            <Quote className="size-8 text-primary" />
            <blockquote className="font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">“Llegué sola y regresé con un grupo que ya planea el próximo viaje.”</blockquote>
            <div className="flex items-center justify-between border-t border-border pt-5">
              <div>
                <p className="font-semibold">Laura M.</p>
                <p className="text-sm text-muted-foreground">Viajera · Cartagena 2025</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold"><Heart className="size-4 fill-primary text-primary" />4.9 / 5</div>
            </div>
          </div>
        </div>
      </section>
      <section id="comunidad" className="bg-primary px-5 py-20 text-primary-foreground md:px-8 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">¿Lo viste en tus redes?</p>
          <h2 className="max-w-4xl font-serif text-5xl leading-none tracking-tight text-balance md:text-8xl">No lo guardes para después. Vívelo.</h2>
          <p className="max-w-xl text-base leading-relaxed opacity-80">Escríbenos y encuentra el plan que más se parece a ti. Respondemos personalmente, sin bots ni vueltas.</p>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider"><span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-background opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-background" /></span>Solo quedan 4 cupos para agosto</p>
          <Button render={<a href="https://wa.me/573000000000?text=Hola%2C%20quiero%20saber%20sobre%20los%20pr%C3%B3ximos%20viajes" target="_blank" rel="noreferrer" />} size="lg" className="h-14 rounded-full bg-background px-7 text-foreground hover:bg-background/90">
            <MessageCircle data-icon="inline-start" />
            Hablar por WhatsApp
            <ArrowUpRight data-icon="inline-end" />
          </Button>
          <p className="text-xs uppercase tracking-[0.16em] opacity-70">Normalmente respondemos en menos de 10 min</p>
        </div>
      </section>
    </>
  )
}
