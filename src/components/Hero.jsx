import { useRef } from 'react'
import Button from './Button.jsx'
import { finePointer } from '../hooks/finePointer.js'
import HeroVisual from './HeroVisual.jsx'
import Reveal from './Reveal.jsx'

export default function Hero() {
  const ref = useRef(null)

  // Publishes the cursor position (-1 to 1) as --px / --py so the illustration can react to it.
  const onMove = (e) => {
    if (e.pointerType !== 'mouse' || !finePointer()) return
    const el = ref.current
    const r = el.getBoundingClientRect()
    el.style.setProperty('--px', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3))
    el.style.setProperty('--py', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3))
  }
  const onLeave = () => {
    ref.current.style.setProperty('--px', '0')
    ref.current.style.setProperty('--py', '0')
  }

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      id="home"
      className="relative isolate overflow-hidden pt-[4.5rem]"
      aria-labelledby="hero-title"
    >
      {/* background: lighting + animated grid */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid animate-grid absolute inset-0" />
        <div className="hero-shift absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-brand-indigo/20 blur-[120px]" />
        <div className="hero-shift absolute -right-32 top-40 h-[420px] w-[420px] rounded-full bg-brand-violet/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-blue/10 blur-[110px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-24">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_10px_2px_rgba(56,189,248,0.8)]" />
              Innovation Meets Technology
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 id="hero-title" className="mt-7 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.6rem]">
              Building <span className="text-gradient">Digital Solutions</span> That Move Your Business Forward.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              From powerful websites to intelligent software and IoT solutions, we help businesses turn complex ideas into
              simple, scalable, and impactful technology.
            </p>
          </Reveal>

          <Reveal delay={270} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" arrow>
              Start Your Project
            </Button>
            <Button href="#services" variant="secondary">
              Explore Our Services
            </Button>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  )
}
