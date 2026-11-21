import { useEffect, useRef } from 'react'
import { finePointer } from '../hooks/finePointer.js'

// A soft light that trails the mouse cursor. Desktop only.
export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (!finePointer()) return
    const el = ref.current
    let raf = 0
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0

    const tick = () => {
      cx += (tx - cx) * 0.14
      cy += (ty - cy) * 0.14
      el.style.transform = `translate3d(${cx - 210}px, ${cy - 210}px, 0)`
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5 ? requestAnimationFrame(tick) : 0
    }
    const onMove = (e) => {
      if (e.pointerType !== 'mouse') return
      tx = e.clientX
      ty = e.clientY
      el.style.opacity = '1'
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const onLeave = () => {
      el.style.opacity = '0'
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[420px] w-[420px] rounded-full opacity-0 transition-opacity duration-500"
      style={{
        background:
          'radial-gradient(circle, rgba(99,102,241,0.17) 0%, rgba(56,189,248,0.07) 40%, transparent 70%)',
        mixBlendMode: 'screen',
      }}
    />
  )
}
