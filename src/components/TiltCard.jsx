import { useRef } from 'react'
import { finePointer } from '../hooks/finePointer.js'

// Card that tilts toward the cursor and shows a light that follows it. Desktop mouse only.
// The look is in the `.tilt` and `.tilt-spot` rules in index.css.
export default function TiltCard({ as: Tag = 'div', max = 5, className = '', children, ...rest }) {
  const ref = useRef(null)

  const onMove = (e) => {
    if (e.pointerType !== 'mouse' || !finePointer()) return
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    el.style.setProperty('--rx', `${((0.5 - y / r.height) * max * 2).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${((x / r.width - 0.5) * max * 2).toFixed(2)}deg`)
    el.style.setProperty('--ly', '-6px')
  }

  const onLeave = () => {
    const el = ref.current
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--ly', '0px')
  }

  return (
    <Tag ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className={`tilt ${className}`} {...rest}>
      <span className="tilt-spot" aria-hidden="true" />
      {children}
    </Tag>
  )
}
