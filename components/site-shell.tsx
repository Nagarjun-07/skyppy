'use client'

import Link from 'next/link'
import { Menu, Route, X } from 'lucide-react'
import { useState } from 'react'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return <main className="min-h-screen bg-[#f6f3ee] text-[#102027]">
    <header className="sticky top-0 z-30 border-b border-[#102027]/10 bg-[#f6f3ee]/90 px-6 backdrop-blur-xl lg:px-12"><nav className="mx-auto flex max-w-[1600px] items-center justify-between py-4" aria-label="Main navigation">
      <Link href="/" className="flex items-center gap-3 text-lg font-semibold"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#ff6845]"><Route size={18}/></span>relay<span className="text-[#ff6845]">.</span></Link>
      <div className="hidden items-center gap-7 text-sm text-[#536269] lg:flex"><Link href="/services" className="hover:text-[#102027]">Services</Link><Link href="/network" className="hover:text-[#102027]">Network</Link><Link href="/tracking" className="hover:text-[#102027]">Tracking</Link><Link href="/business" className="hover:text-[#102027]">For business</Link></div>
      <div className="hidden items-center gap-4 lg:flex"><Link href="/tracking" className="text-sm text-[#536269]">Track shipment</Link><Link href="/#book" className="rounded-full bg-[#102027] px-5 py-2.5 text-sm font-medium text-white">Book a shipment</Link></div>
      <button className="rounded-full border border-[#102027]/15 p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={19}/> : <Menu size={19}/>}</button>
    </nav>{open && <div className="mx-auto grid max-w-[1600px] gap-4 border-t border-[#102027]/10 py-5 text-sm lg:hidden"><Link href="/services">Services</Link><Link href="/network">Network</Link><Link href="/tracking">Tracking</Link><Link href="/business">For business</Link></div>}</header>
    {children}
    <footer className="bg-[#102027] px-6 py-12 text-white lg:px-12"><div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-8 sm:flex-row"><div><Link href="/" className="text-lg font-semibold">relay<span className="text-[#ff6845]">.</span></Link><p className="mt-3 max-w-xs text-sm text-white/45">The connective tissue between people, businesses, and the places they call home.</p></div><div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-white/55"><Link href="/services">Services</Link><Link href="/network">Network</Link><Link href="/tracking">Track</Link><Link href="/business">Business</Link></div></div></footer>
  </main>
}

export function PageHero({ eyebrow, title, body, image }: { eyebrow: string; title: React.ReactNode; body: string; image: string }) { return <section className="relative isolate min-h-[560px] overflow-hidden bg-[#102027] text-white"><img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"/><div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#071b26_4%,rgba(7,27,38,.88)_43%,rgba(7,27,38,.18)_100%)]"/><div className="mx-auto flex max-w-[1600px] items-end px-6 pb-20 pt-36 lg:px-12"><div className="max-w-4xl"><p className="eyebrow text-[#ff967f]">{eyebrow}</p><h1 className="mt-6 max-w-4xl text-6xl font-medium leading-[.9] tracking-[-.07em] lg:text-[8.5rem]">{title}</h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">{body}</p></div></div></section> }
