import { Compass, Heart, Users } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Grupos de tu vibra',
    description:
      'Viajamos con personas de tu misma edad e intereses. No es un tour con desconocidos, es un plan con amigos que aún no conoces.',
  },
  {
    icon: Compass,
    title: 'Todo listo, tú solo vive',
    description:
      'Nos encargamos de transporte, hospedaje, actividades y reservas. Tú solo empacas y disfrutas sin preocuparte por nada.',
  },
  {
    icon: Heart,
    title: 'Momentos, no turismo',
    description:
      'Nuestras experiencias están diseñadas para crear recuerdos reales: atardeceres, risas, historias que vas a contar siempre.',
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-background px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">La diferencia</p>
          <h2 className="font-serif text-5xl leading-none tracking-tight text-balance md:text-7xl">
            Viajar no debería ser complicado.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex flex-col gap-5 border border-border bg-card p-7 transition-transform hover:-translate-y-1 md:p-9"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <benefit.icon className="size-5" />
              </div>
              <h3 className="font-serif text-2xl">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
