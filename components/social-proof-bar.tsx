import { CalendarDays, MapPin, Star, Users } from 'lucide-react'

const stats = [
  { value: '+1,200', label: 'Viajeros felices', icon: Users },
  { value: '4.9★', label: 'Calificación', icon: Star },
  { value: '32', label: 'Experiencias realizadas', icon: MapPin },
  { value: 'Desde', label: '2022', icon: CalendarDays },
]

export function SocialProofBar() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex items-center justify-center gap-3 px-5 py-6 md:py-8 ${index < stats.length - 1 ? 'border-b border-background/10 md:border-b-0 md:border-r' : ''} ${index === 1 ? 'border-l border-background/10 md:border-l-0' : ''} ${index === 3 ? 'border-l border-background/10 md:border-l-0' : ''}`}
          >
            <stat.icon className="size-5 shrink-0 opacity-60" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl leading-tight">{stat.value}</span>
              <span className="text-[0.65rem] uppercase tracking-[0.16em] opacity-60">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
