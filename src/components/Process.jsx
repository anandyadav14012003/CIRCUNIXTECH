import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { process } from '../data/content.js'

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28" aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="process-title" eyebrow="Our Process" title="From Idea to Implementation." />

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* connecting line: horizontal on desktop, vertical on mobile */}
          <div
            className="absolute left-[1.65rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-blue via-brand-indigo to-brand-violet opacity-40 max-lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute left-[12.5%] right-[12.5%] top-[1.65rem] hidden h-px bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet opacity-40 lg:block"
            aria-hidden="true"
          />

          {process.map((p, i) => (
            <Reveal
              as="li"
              key={p.step}
              delay={i * 110}
              className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
            >
              <span className="relative z-10 flex h-[3.3rem] w-[3.3rem] shrink-0 items-center justify-center rounded-full border border-brand-indigo/50 bg-ink-900 font-display text-sm font-bold text-gradient shadow-[0_0_30px_-4px_rgba(99,102,241,0.7)]">
                {p.step}
              </span>
              <div className="lg:mt-6">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted lg:mx-auto lg:max-w-[16rem]">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
