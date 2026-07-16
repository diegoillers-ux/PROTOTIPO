import Link from 'next/link'
import { Camera, Music2 } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-10 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex flex-col gap-3">
            <Link href="#inicio" className="font-serif text-4xl">Vívelo.</Link>
            <p className="max-w-sm text-sm leading-relaxed opacity-70">Viajes, tours y experiencias para conectar con el mundo y con nuevas personas.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="flex size-11 items-center justify-center rounded-full border border-background/30 hover:bg-background hover:text-foreground"><Camera className="size-5" /></a>
            <a href="#" aria-label="TikTok" className="flex size-11 items-center justify-center rounded-full border border-background/30 hover:bg-background hover:text-foreground"><Music2 className="size-5" /></a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-background/20 pt-5 text-xs uppercase tracking-wider opacity-60 sm:flex-row">
          <span>© 2026 Vívelo</span><span>Hecho para salir de la rutina</span>
        </div>
      </div>
    </footer>
  )
}
