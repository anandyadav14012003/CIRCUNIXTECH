// Abstract isometric "connected systems" illustration drawn in SVG.
// A layered platform of stacked tiles, linked by glowing data lines to satellite nodes.
export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* ambient light behind the illustration */}
      <div className="pulse-glow hero-shift absolute inset-[8%] rounded-full bg-gradient-to-br from-brand-blue/30 via-brand-indigo/25 to-brand-violet/30 blur-3xl" />

      <svg viewBox="0 0 560 560" className="hero-tilt relative h-full w-full" role="img" aria-label="Abstract illustration of connected software, devices and networks">
        <defs>
          <linearGradient id="hv-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="hv-left" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1b2563" />
            <stop offset="1" stopColor="#0c1235" />
          </linearGradient>
          <linearGradient id="hv-right" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2a2f7a" />
            <stop offset="1" stopColor="#111844" />
          </linearGradient>
          <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id="hv-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* orbit rings */}
        <ellipse cx="280" cy="300" rx="235" ry="120" fill="none" stroke="rgba(148,163,255,0.16)" strokeDasharray="3 7" />
        <ellipse cx="280" cy="300" rx="170" ry="86" fill="none" stroke="rgba(148,163,255,0.12)" />

        {/* data lines from core to satellites */}
        <g fill="none" stroke="url(#hv-line)" strokeWidth="1.6" strokeDasharray="5 9" className="dash-flow" opacity="0.85">
          <path d="M280 270 C 230 200, 150 170, 100 130" />
          <path d="M280 270 C 340 200, 420 170, 474 118" />
          <path d="M280 320 C 220 380, 150 410, 96 448" />
          <path d="M280 320 C 340 390, 420 410, 478 452" />
        </g>

        {/* lower tile */}
        <g className="float-slow" style={{ animationDelay: '-2s' }}>
          <Tile cx={280} cy={335} w={150} h={34} opacity={0.9} />
        </g>
        {/* middle tile */}
        <g className="float-slow" style={{ animationDelay: '-1s' }}>
          <Tile cx={280} cy={290} w={120} h={30} opacity={0.95} />
        </g>
        {/* top tile with core */}
        <g className="float-slow">
          <Tile cx={280} cy={245} w={92} h={26} top />
          <circle cx="280" cy="231" r="7" fill="#fff" filter="url(#hv-glow)" />
          <circle cx="280" cy="231" r="14" fill="none" stroke="#fff" strokeOpacity="0.45" />
        </g>

        {/* satellite nodes */}
        <Node x={100} y={130} label="code" />
        <Node x={474} y={118} label="globe" />
        <Node x={96} y={448} label="chip" />
        <Node x={478} y={452} label="layers" />

        {/* tiny signal dots */}
        <g fill="#38bdf8" filter="url(#hv-glow)">
          <circle cx="188" cy="168" r="3" className="pulse-glow" />
          <circle cx="388" cy="162" r="3" className="pulse-glow" style={{ animationDelay: '-1.5s' }} />
          <circle cx="182" cy="408" r="3" className="pulse-glow" style={{ animationDelay: '-2.5s' }} />
          <circle cx="392" cy="410" r="3" className="pulse-glow" style={{ animationDelay: '-3s' }} />
        </g>
      </svg>
    </div>
  )
}

// An isometric slab: top diamond plus two side faces.
function Tile({ cx, cy, w, h, top = false, opacity = 1 }) {
  const hw = w
  const hh = w * 0.5
  const t = `${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`
  const l = `${cx - hw},${cy} ${cx},${cy + hh} ${cx},${cy + hh + h} ${cx - hw},${cy + h}`
  const r = `${cx + hw},${cy} ${cx},${cy + hh} ${cx},${cy + hh + h} ${cx + hw},${cy + h}`
  return (
    <g opacity={opacity}>
      <polygon points={l} fill="url(#hv-left)" stroke="rgba(148,163,255,0.25)" />
      <polygon points={r} fill="url(#hv-right)" stroke="rgba(148,163,255,0.25)" />
      <polygon
        points={t}
        fill={top ? 'url(#hv-top)' : 'rgba(30,38,100,0.85)'}
        stroke={top ? 'rgba(255,255,255,0.5)' : 'rgba(148,163,255,0.4)'}
      />
      {/* grid lines on the tile surface */}
      <g stroke="rgba(255,255,255,0.18)" strokeWidth="1">
        <line x1={cx - hw / 2} y1={cy - hh / 2} x2={cx + hw / 2} y2={cy + hh / 2} />
        <line x1={cx + hw / 2} y1={cy - hh / 2} x2={cx - hw / 2} y2={cy + hh / 2} />
      </g>
    </g>
  )
}

const nodeGlyphs = {
  code: 'm-6 -4 -5 4 5 4m12 -8 5 4 -5 4m-5 -11 -3 14',
  globe: 'm-9 0h18m-9 -9c4 4 4 14 0 18m0 -18c-4 4 -4 14 0 18',
  chip: 'm-5 -5h10v10h-10zm3 -4v4m4 -4v4m-4 10v-4m4 4v-4',
  layers: 'm0 -8 9 5 -9 5 -9 -5zm-9 10 9 5 9 -5',
}

function Node({ x, y, label }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="34" fill="rgba(10,16,48,0.9)" stroke="rgba(148,163,255,0.3)" />
      <circle r="34" fill="none" stroke="url(#hv-line)" strokeOpacity="0.6" strokeDasharray="2 6" />
      {label === 'globe' && <circle r="9" fill="none" stroke="#a5b4fc" strokeWidth="1.6" />}
      <path d={nodeGlyphs[label]} fill="none" stroke="#a5b4fc" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  )
}
