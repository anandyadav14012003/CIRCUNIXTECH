// True on devices with a real mouse and when the visitor has not asked for reduced motion.
// All cursor-driven effects check this, so touch devices and reduced-motion users never get them.
export function finePointer() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return (
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}
