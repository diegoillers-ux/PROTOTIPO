'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '¿Puedo ir solo/a?',
    answer:
      '¡Claro! La mayoría de nuestros viajeros van solos. Esa es la magia: llegas solo y te vas con amigos nuevos. Nuestros grupos están pensados para que conectes desde el primer momento.',
  },
  {
    question: '¿Qué incluye cada experiencia?',
    answer:
      'Transporte desde el punto de encuentro, hospedaje, actividades principales y acompañamiento del equipo Vívelo. Comidas y gastos personales van por tu cuenta, pero siempre te recomendamos los mejores lugares.',
  },
  {
    question: '¿Cómo reservo mi cupo?',
    answer:
      'Escríbenos por WhatsApp, te contamos los detalles del viaje y separas tu cupo con un anticipo. El resto lo puedes pagar en cuotas antes de la fecha de salida.',
  },
  {
    question: '¿Cuántas personas van por viaje?',
    answer:
      'Entre 8 y 15 personas por grupo. Nos gusta mantener los grupos pequeños para que la experiencia sea más personal y todos se conozcan.',
  },
  {
    question: '¿Hay política de reembolso?',
    answer:
      'Sí. Si cancelas con más de 15 días de anticipación, te devolvemos el 80% del anticipo. Con menos de 15 días, puedes transferir tu cupo a otra persona.',
  },
  {
    question: '¿Es seguro viajar con Vívelo?',
    answer:
      'Llevamos desde 2022 organizando viajes. Todos nuestros destinos están verificados, contamos con seguros de viaje y nuestro equipo te acompaña en todo momento.',
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-secondary px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Preguntas frecuentes</p>
          <h2 className="font-serif text-5xl leading-none tracking-tight text-balance md:text-7xl">Todo lo que necesitas saber.</h2>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">Si tu pregunta no está aquí, escríbenos por WhatsApp y te respondemos en minutos.</p>
        </div>
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
