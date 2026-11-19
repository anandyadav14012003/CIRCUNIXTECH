import Icon from './Icons.jsx'
import Reveal from './Reveal.jsx'
import { aboutValues } from '../data/content.js'

// Abstract "network of nodes" visual, kept deliberately simple.
function AboutVisual() {
  const nodes = [
    [90, 80], [250, 50], [400, 110], [150, 200], [300, 220], [430, 290], [80, 330], [230, 360], [370, 400],
  ]
  const edges = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [2, 5], [3, 4], [3, 6], [4, 5], [4, 7], [6, 7], [7, 8], [5, 8]]
  return (
    <div className="relative mx-auto aspect-[5/4.4] w-full max-w-lg">
      <div className="pulse-glow absolute inset-[12%] rounded-full bg-gradient-to-tr from-brand-blue/25 to-brand-violet/30 blur-3xl" />
      <div className="glass relative h-full w-full overflow-hidden rounded-3xl">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <svg viewBox="0 0 500 440" className="relative h-full w-full" role="img" aria-label="Abstract network of connected nodes">
          <defs>
            <linearGradient id="ab-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#38bdf8" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <g stroke="url(#ab-line)" strokeOpacity="0.55" strokeWidth="1.3">
            {edges.map(([a, b]) => (
              <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
            ))}
          </g>
          {nodes.map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={i === 4 ? 22 : 9} fill="#0a1030" stroke="url(#ab-line)" strokeWidth="1.6" />
              <circle cx={x} cy={y} r={i === 4 ? 8 : 3.5} fill={i % 2 ? '#8b5cf6' : '#38bdf8'} className="pulse-glow" style={{ animationDelay: `${-i * 0.6}s` }} />
            </g>
          ))}
          <circle cx="300" cy="220" r="40" fill="none" stroke="rgba(148,163,255,0.25)" strokeDasharray="3 6" className="dash-flow" />
        </svg>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28" aria-labelledby="about-title">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[420px] -translate-y-1/2 bg-gradient-to-r from-brand-indigo/[0.07] via-transparent to-brand-violet/[0.07]" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">About Us</p>
            <h2 id="about-title" className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Technology With a Purpose.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              At Circunix Tech, we believe technology should solve problems, simplify processes, and create opportunities.
              We work on transforming business ideas into practical digital solutions through thoughtful design, modern
              development, and innovative thinking.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-5">
            {aboutValues.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 100} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-blue/15 to-brand-violet/20 text-sky-300">
                  <Icon name={v.icon} size={22} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={150}>
          <AboutVisual />
        </Reveal>
      </div>
    </section>
  )
}
