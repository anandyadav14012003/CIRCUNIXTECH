import { useId } from 'react'

// Geometric "C" mark: an open ring with a circuit-node terminal and an inner core.
export function LogoMark({ size = 36 }) {
  const id = useId()
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.55" stopColor="#6366f1" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="13" fill="#0a1030" stroke="rgba(148,163,255,0.25)" />
      <path d="M34 15.5H25.5a8.5 8.5 0 0 0 0 17H34" stroke={`url(#${id}-g)`} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="15.5" r="3.2" fill="#38bdf8" />
      <circle cx="34" cy="32.5" r="3.2" fill="#8b5cf6" />
      <circle cx="25.5" cy="24" r="2" fill="#e8ebff" />
    </svg>
  )
}

export default function Logo({ className = '' }) {
  return (
    <a href="#home" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Circunix Tech home">
      <LogoMark />
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Circunix<span className="text-gradient"> Tech</span>
      </span>
    </a>
  )
}
