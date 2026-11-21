import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import SectionHeading from './SectionHeading.jsx'
import { whyUs } from '../data/content.js'

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-28" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="why-title" eyebrow="Why Circunix" title="Why Businesses Choose Circunix Tech" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="h-full">
              <TiltCard as="article" max={7} className="glass group relative h-full overflow-hidden rounded-2xl p-7">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet text-white shadow-[0_8px_24px_-8px_rgba(99,102,241,0.9)]">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="relative mt-6 text-lg font-semibold text-white">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
