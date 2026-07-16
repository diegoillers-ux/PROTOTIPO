import Link from 'next/link'
import { ArrowUpRight, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="#inicio" className="font-serif text-2xl font-semibold tracking-tight" aria-label="Vívelo, inicio">
          Vívelo<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Navegación principal">
          <Link href="#experiencias" className="transition-colors hover:text-primary">Experiencias</Link>
          <Link href="#nosotros" className="transition-colors hover:text-primary">Nosotros</Link>
          <Link href="#comunidad" className="transition-colors hover:text-primary">Comunidad</Link>
        </nav>
        <Button render={<a href="#experiencias" />} className="hidden rounded-full px-5 md:inline-flex">
          Ver próximos viajes
          <ArrowUpRight data-icon="inline-end" />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú">
          <Menu />
        </Button>
      </div>
    </header>
  )
}
