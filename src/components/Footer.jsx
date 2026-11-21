import Logo from './Logo.jsx'
import { BrandIcon } from './Icons.jsx'
import { company, contactInfo, navLinks, services, socials } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{company.description}</p>
            <ul className="mt-6 flex gap-3">
              {socials.map((s) => (
                <li key={s.id}>
                  <a href={s.href} aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-indigo/60 hover:text-white">
                    <BrandIcon name={s.id} size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-white">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Our services">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Our Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-sm text-muted transition-colors hover:text-white">{s.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li className="break-words">
                <a href={contactInfo.email.href} className="transition-colors hover:text-white">{contactInfo.email.value}</a>
              </li>
              {contactInfo.phones.map((p) => (
                <li key={p.value}>
                  <a href={p.href} className="transition-colors hover:text-white">{p.value}</a>
                </li>
              ))}
              <li>{contactInfo.location}</li>
              <li>{contactInfo.website}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">© {company.year} Circunix Tech. All Rights Reserved.</p>
          <p className="text-sm text-slate-500">{company.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
