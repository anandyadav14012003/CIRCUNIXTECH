import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { process } from '../data/content.js'

// 0 -> 1 as the timeline scrolls through the viewport. Jumps straight to 1 for reduced motion.
function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1)
      return
    }
    let raf = 0
    const update = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const p = (window.innerHeight * 0.7 - r.top) / r.height
      setProgress(Math.min(1, Math.max(0, p)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])

  return progress
}

export default function Process() {
  const listRef = useRef(null)
  const progress = useScrollProgress(listRef)
  const last = process.length - 1

  return (
    <section id="process" className="relative py-24 sm:py-28" aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="process-title" eyebrow="Our Process" title="From Idea to Implementation." />

        <ol ref={listRef} className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* faint track + scroll-filled line: vertical on mobile, horizontal on desktop */}
          <div className="absolute left-[1.65rem] top-2 h-[calc(100%-1rem)] w-px bg-line lg:hidden" aria-hidden="true" />
          <div
            className="absolute left-[1.65rem] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-brand-blue via-brand-indigo to-brand-violet shadow-[0_0_12px_rgba(99,102,241,0.8)] lg:hidden"
            style={{ transform: `scaleY(${progress})` }}
            aria-hidden="true"
          />
          <div className="absolute left-[12.5%] right-[12.5%] top-[1.65rem] hidden h-px bg-line lg:block" aria-hidden="true" />
          <div
            className="absolute left-[12.5%] right-[12.5%] top-[1.65rem] hidden h-px origin-left bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet shadow-[0_0_12px_rgba(99,102,241,0.8)] lg:block"
            style={{ transform: `scaleX(${progress})` }}
            aria-hidden="true"
          />

          {process.map((p, i) => {
            const active = progress >= (i / last) * 0.98
            return (
              <Reveal
                as="li"
                key={p.step}
                delay={i * 110}
                className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
              >
                <span
                  className={`relative z-10 flex h-[3.3rem] w-[3.3rem] shrink-0 items-center justify-center rounded-full border bg-ink-900 font-display text-sm font-bold transition-all duration-500 ${
                    active
                      ? 'border-brand-blue/70 shadow-[0_0_30px_-2px_rgba(99,102,241,0.85)]'
                      : 'border-line text-slate-500'
                  }`}
                >
                  <span className={active ? 'text-gradient' : ''}>{p.step}</span>
                </span>
                <div className="lg:mt-6">
                  <h3 className={`text-lg font-semibold transition-colors duration-500 ${active ? 'text-white' : 'text-slate-400'}`}>{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted lg:mx-auto lg:max-w-[16rem]">{p.text}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
