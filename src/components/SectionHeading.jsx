import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description, align = 'center', id }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">{eyebrow}</p>
      )}
      <h2 id={id} className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </Reveal>
  )
}
