import Icon from './Icons.jsx'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-offset-4'

const variants = {
  primary:
    'text-white bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] hover:shadow-[0_10px_40px_-6px_rgba(139,92,246,0.85)] hover:-translate-y-0.5',
  secondary:
    'text-slate-100 border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 hover:-translate-y-0.5',
  small:
    'px-4 py-2.5 text-sm text-white bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet hover:shadow-[0_8px_28px_-6px_rgba(99,102,241,0.8)]',
}

export default function Button({ href, variant = 'primary', arrow = false, className = '', children, ...rest }) {
  const classes = `${base} ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  )
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
