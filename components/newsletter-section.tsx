'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function NewsletterSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-background px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">No te lo pierdas</p>
          <h2 className="font-serif text-5xl leading-none tracking-tight text-balance md:text-7xl">Recibe las próximas rutas antes de que se agoten.</h2>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground">Déjanos tu correo y sé el primero en enterarte de los nuevos destinos y fechas. Sin spam, solo aventura.</p>
        </div>
        {submitted ? (
          <p className="text-lg font-medium">¡Listo! Te avisaremos de las próximas rutas. 🎒</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-border bg-card rounded-lg px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="tu@correo.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-border bg-card rounded-lg px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
            />
            <Button type="submit" size="lg" className="h-14 w-full rounded-full px-7">
              Quiero enterarme primero
              <ArrowUpRight data-icon="inline-end" />
            </Button>
            <p className="text-xs text-muted-foreground">Nos tomamos tu privacidad en serio. Cero spam.</p>
          </form>
        )}
      </div>
    </section>
  )
}
