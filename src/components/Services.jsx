import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { services } from '../data/content.js'

function ServiceCard({ service, index }) {
  return (
    <Reveal
      as="article"
      delay={index * 90}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-800/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-indigo/50 hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.55)] sm:p-8"
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-violet/0 blur-3xl transition-all duration-500 group-hover:bg-brand-violet/25" />

      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 text-sky-300 transition-transform duration-500 group-hover:scale-110 group-hover:text-white">
        <Icon name={service.icon} size={24} />
      </div>

      <h3 className="relative mt-6 text-xl font-semibold text-white">{service.title}</h3>
      <p className="relative mt-3 text-[0.95rem] leading-relaxed text-muted">{service.description}</p>

      <ul className="relative mt-6 grid gap-2.5 border-t border-line pt-6 sm:grid-cols-2">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-200">
            <Icon name="check" size={16} strokeWidth={2.2} className="mt-0.5 shrink-0 text-brand-blue" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="relative mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-sky-300 transition-colors hover:text-white"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
        <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </Reveal>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="What We Build"
          description="Technology solutions designed around your business needs."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
