import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <section className="relative px-5 py-20 sm:px-8 sm:py-24" aria-labelledby="cta-title">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 px-6 py-16 text-center sm:px-14 sm:py-20">
        {/* gradient glow background */}
        <div className="absolute inset-0 -z-10 bg-ink-900" aria-hidden="true" />
        <div className="absolute -left-20 -top-24 -z-10 h-80 w-80 rounded-full bg-brand-blue/30 blur-[100px]" aria-hidden="true" />
        <div className="absolute -bottom-28 -right-16 -z-10 h-96 w-96 rounded-full bg-brand-violet/40 blur-[110px]" aria-hidden="true" />
        <div className="bg-grid absolute inset-0 -z-10 opacity-50" aria-hidden="true" />

        <h2 id="cta-title" className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Have an Idea? Let&apos;s Build Something Great.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Whether you need a business website, a custom application, or an intelligent technology solution, Circunix Tech
          is ready to help.
        </p>
        <div className="mt-9">
          <Button href="#contact" arrow>
            Discuss Your Project
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
