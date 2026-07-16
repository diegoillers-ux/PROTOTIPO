import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Camera, Play } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="inicio" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2">
        <div className="flex min-h-[34rem] flex-col justify-between border-border p-5 md:min-h-[44rem] md:border-r md:p-8 lg:p-12">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em]">
            <span>Viajes que se sienten</span>
            <span>Colombia · 2026</span>
          </div>
          <div className="flex flex-col gap-7 py-12">
            <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" />
              Próxima salida · 24 de agosto
            </p>
            <h1 className="max-w-xl font-serif text-6xl leading-[0.9] tracking-[-0.045em] text-balance sm:text-7xl lg:text-8xl">
              Sal de la rutina. <em className="font-normal">Entra en la historia.</em>
            </h1>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Creamos viajes en grupo, tours y eventos para que conozcas lugares increíbles y personas que se sienten como amigos de toda la vida.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button render={<a href="#experiencias" />} size="lg" className="h-12 rounded-full px-6">
                Explorar experiencias
                <ArrowUpRight data-icon="inline-end" />
              </Button>
              <Button render={<a href="#comunidad" />} variant="outline" size="lg" className="h-12 rounded-full px-6">
                <Play data-icon="inline-start" />
                Ver la vibra
              </Button>
            </div>
          </div>
          <a href="#experiencias" className="flex items-center gap-2 text-sm font-medium">
            Sigue explorando <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="relative min-h-[32rem] overflow-hidden md:min-h-[44rem]">
          <Image src="/images/hero-cartagena.png" alt="Amigos disfrutando un viaje en barco en Cartagena" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-foreground/80 p-5 text-background backdrop-blur-sm md:p-7">
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-[0.18em]">Cartagena desde el mar</span>
              <span className="font-serif text-2xl">4 días · 3 noches</span>
            </div>
            <a href="#comunidad" className="flex size-12 items-center justify-center rounded-full border border-background/50" aria-label="Ver contenido en Instagram">
              <Camera className="size-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between border-x border-border px-5 py-3 text-xs uppercase tracking-[0.14em] md:px-8">
        <span>Más que un viaje</span>
        <span className="hidden sm:inline">Instagram · TikTok · Comunidad</span>
        <span>Desde 2022</span>
      </div>
    </section>
  )
}
