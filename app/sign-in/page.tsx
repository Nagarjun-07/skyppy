'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Boxes, CheckCircle2, Home, MessageCircle, Send, X } from 'lucide-react'

export default function SignInPage() {
  const [submitted, setSubmitted] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
  const [chatSent, setChatSent] = useState(false)

  return (
    <main className="min-h-screen bg-[#071b26] px-6 py-8 text-white lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between">
        <Link href="/" className="flex w-fit items-center gap-3 text-lg font-semibold"><span className="grid h-9 w-9 place-items-center rounded-2xl bg-[#ff6845] text-[#071b26]"><Boxes size={18} /></span>skyppy<span className="text-[#ff6845]">.</span></Link>
        <section className="grid items-center gap-14 py-20 lg:grid-cols-[1fr_420px]">
          <div><p className="eyebrow text-[#ff967f]">Skyppy account</p><h1 className="mt-6 max-w-2xl text-6xl font-medium leading-[.9] tracking-[-.07em] lg:text-8xl">Move with<br /><span className="text-[#ff6845]">confidence.</span></h1><p className="mt-8 max-w-md text-lg leading-relaxed text-white/60">Sign in to save frequent routes, view shipments, and manage every handoff from one calm workspace.</p></div>
          <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="rounded-[2rem] bg-[#f7f3ed] p-7 text-[#102027] shadow-2xl sm:p-9">
            {submitted ? <div className="py-8 text-center"><CheckCircle2 className="mx-auto text-[#1d7056]" size={48} /><h2 className="mt-5 text-2xl font-medium">You&apos;re signed in.</h2><p className="mt-3 text-sm leading-relaxed text-[#536269]">Welcome back to Skyppy. Your workspace is ready.</p><Link href="/tracking" className="mt-7 inline-flex items-center rounded-full bg-[#102027] px-5 py-3 text-sm font-medium text-white">View tracking <ArrowUpRight className="ml-2" size={15} /></Link></div> : <><div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#536269]">Welcome back</p><h2 className="mt-2 text-2xl font-medium">Sign in to Skyppy</h2></div><span className="grid h-10 w-10 place-items-center rounded-full bg-[#dce9bf]"><Boxes size={18} /></span></div><label className="mt-8 block text-sm font-medium">Email<input required type="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-[#102027]/10 bg-white px-4 py-3 outline-none focus:border-[#ff6845]" /></label><label className="mt-4 block text-sm font-medium">Password<input required minLength={6} type="password" placeholder="••••••••" className="mt-2 w-full rounded-xl border border-[#102027]/10 bg-white px-4 py-3 outline-none focus:border-[#ff6845]" /></label><button className="mt-6 flex w-full items-center justify-center rounded-full bg-[#ff6845] px-5 py-3.5 text-sm font-semibold transition hover:bg-[#f4512e]">Sign in <ArrowUpRight className="ml-2" size={15} /></button></>}
          </form>
        </section>
        <Link href="/" className="flex w-fit items-center gap-2 text-sm text-white/50 hover:text-white"><ArrowLeft size={15} /> Back to home</Link>{chatOpen && <section className="fixed bottom-24 right-5 z-50 w-[min(360px,calc(100vw-2rem))] rounded-3xl bg-[#f7f3ed] p-5 text-[#102027] shadow-2xl" aria-label="Skyppy chat"><div className="flex items-center justify-between"><p className="font-medium">Skyppy assistant</p><button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={17}/></button></div>{chatSent && <p className="mt-4 rounded-2xl bg-[#dce9bf] p-3 text-sm">I don&apos;t have money to buy a subscription. Please provide me money and I&apos;ll make this more robust.</p>}<form onSubmit={(event) => { event.preventDefault(); if (chatMessage.trim()) { setChatSent(true); setChatMessage('') } }} className="mt-4 flex gap-2"><input value={chatMessage} onChange={(event) => setChatMessage(event.target.value)} className="min-w-0 flex-1 rounded-full border border-[#102027]/15 bg-white px-4 py-2.5 text-sm" placeholder="Ask anything..." aria-label="Chat message"/><button type="submit" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ff6845]" aria-label="Send message"><Send size={16}/></button></form></section>}<button type="button" onClick={() => setChatOpen(!chatOpen)} className="fixed bottom-5 right-5 grid h-14 w-14 place-items-center rounded-full bg-[#ff6845] text-[#071b26] shadow-lg" aria-label="Open Skyppy chatbot"><MessageCircle size={23}/></button>
      </div>
    </main>
  )
}
