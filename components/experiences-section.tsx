import Image from 'next/image'
import { ArrowUpRight, CalendarDays, MapPin, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'

const experiences = [
  { title: 'Palmar sin prisa', place: 'Santa Marta', date: '24–27 AGO', spots: '4 cupos', image: '/images/playa-palmar.png' },
  { title: 'Alturas & colores', place: 'Guatapé', date: '13–15 SEP', spots: '7 cupos', image: '/images/guatape.png' },
  { title: 'Medellín de noche', place: 'Medellín', date: '05 OCT', spots: '10 cupos', image: '/images/medellin-noche.png' },
]

export function ExperiencesSection() {
  return (
    <section id="experiencias" className="bg-secondary px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Próximas experiencias</p>
            <h2 className="font-serif text-5xl leading-none tracking-tight text-balance md:text-7xl">Tu próximo recuerdo empieza aquí.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Grupos pequeños, planes seleccionados y cero estrés. Tú solo trae ganas de vivirlo.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {experiences.map((experience, index) => (
            <article key={experience.title} className="group overflow-hidden border border-border bg-card">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={experience.image} alt={`${experience.title} en ${experience.place}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full bg-background text-xs font-semibold">0{index + 1}</span>
              </div>
              <div className="flex flex-col gap-5 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-3xl">{experience.title}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="size-4" />{experience.place}</p>
                  </div>
                  <Button size="icon" variant="outline" className="rounded-full" aria-label={`Ver ${experience.title}`}><ArrowUpRight /></Button>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4 text-xs font-semibold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><CalendarDays className="size-4" />{experience.date}</span>
                  <span className="flex items-center gap-1.5 text-primary"><Users className="size-4" />{experience.spots}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
