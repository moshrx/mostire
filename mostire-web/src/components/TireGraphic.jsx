// CSS/SVG tire graphic — no WebGL, works in every context, always visible
export default function TireGraphic({ rimColor = '#c2ccd8', size = 160, accent = '#e4322b' }) {
  const r = size / 2
  const outerR = r * 0.90
  const rimR   = r * 0.56
  const hubR   = r * 0.12
  const numTreads = 10
  const numSpokes = 5
  const id = `tg-${size}-${rimColor.replace('#','')}`

  const treads = Array.from({ length: numTreads }, (_, i) => i)
  const spokes = Array.from({ length: numSpokes }, (_, i) => {
    const angle = (360 / numSpokes) * i
    const rad = (angle * Math.PI) / 180
    return {
      x1: r + Math.cos(rad) * (hubR * 1.6),
      y1: r + Math.sin(rad) * (hubR * 1.6),
      x2: r + Math.cos(rad) * (rimR * 0.88),
      y2: r + Math.sin(rad) * (rimR * 0.88),
    }
  })

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <radialGradient id={`tire-${id}`} cx="38%" cy="32%" r="68%">
          <stop offset="0%"   stopColor="#484848" />
          <stop offset="50%"  stopColor="#2e2e2e" />
          <stop offset="100%" stopColor="#141414" />
        </radialGradient>
        <radialGradient id={`rim-${id}`} cx="32%" cy="28%" r="72%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="40%"  stopColor={rimColor} />
          <stop offset="100%" stopColor="#6b7686"    stopOpacity="0.8" />
        </radialGradient>
        <filter id={`shadow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="5" stdDeviation="6" floodColor="rgba(0,0,0,0.7)" />
        </filter>
        <filter id={`rimglow-${id}`}>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Drop shadow */}
      <ellipse cx={r + 3} cy={r + 5} rx={outerR} ry={outerR * 0.3}
        fill="rgba(0,0,0,0.5)" style={{ filter: 'blur(8px)' }} />

      {/* Outer rubber */}
      <circle cx={r} cy={r} r={outerR} fill={`url(#tire-${id})`}
        filter={`url(#shadow-${id})`} />

      {/* Tire sidewall highlight arc */}
      <path
        d={`M ${r + outerR * 0.5} ${r - outerR * 0.86} A ${outerR} ${outerR} 0 0 1 ${r + outerR * 0.86} ${r - outerR * 0.5}`}
        fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={r * 0.32} strokeLinecap="round"
      />

      {/* Tread grooves — radial lines on outer edge */}
      {treads.map((i) => {
        const angle = (360 / numTreads) * i
        const rad = (angle * Math.PI) / 180
        const r1 = outerR * 0.80
        const r2 = outerR * 0.97
        return (
          <line
            key={i}
            x1={r + Math.cos(rad) * r1} y1={r + Math.sin(rad) * r1}
            x2={r + Math.cos(rad) * r2} y2={r + Math.sin(rad) * r2}
            stroke="rgba(0,0,0,0.6)" strokeWidth={r * 0.055} strokeLinecap="round"
          />
        )
      })}

      {/* Inner sidewall ring */}
      <circle cx={r} cy={r} r={outerR * 0.76} fill="none"
        stroke="rgba(255,255,255,0.05)" strokeWidth={r * 0.025} />

      {/* White lettering band */}
      <circle cx={r} cy={r} r={outerR * 0.68} fill="none"
        stroke="rgba(255,255,255,0.12)" strokeWidth={r * 0.018} />

      {/* Rim disc */}
      <circle cx={r} cy={r} r={rimR} fill={`url(#rim-${id})`} />

      {/* Rim outer bevel */}
      <circle cx={r} cy={r} r={rimR} fill="none"
        stroke={rimColor} strokeWidth={r * 0.04} opacity="0.7"
        filter={`url(#rimglow-${id})`} />
      <circle cx={r} cy={r} r={rimR * 0.95} fill="none"
        stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

      {/* Spokes */}
      {spokes.map((s, i) => (
        <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
          stroke={rimColor} strokeWidth={r * 0.055} strokeLinecap="round" opacity="0.95" />
      ))}

      {/* Spoke shadow side */}
      {spokes.map((s, i) => (
        <line key={`sh${i}`} x1={s.x1 + 1.5} y1={s.y1 + 1.5} x2={s.x2 + 1.5} y2={s.y2 + 1.5}
          stroke="rgba(0,0,0,0.3)" strokeWidth={r * 0.04} strokeLinecap="round" />
      ))}

      {/* Center hub */}
      <circle cx={r} cy={r} r={hubR * 1.5} fill="#1a1a1a" />
      <circle cx={r} cy={r} r={hubR * 1.5} fill="none"
        stroke={rimColor} strokeWidth={r * 0.025} opacity="0.5" />
      <circle cx={r} cy={r} r={hubR} fill={rimColor} opacity="0.9" />
      <circle cx={r} cy={r} r={hubR * 0.45} fill="rgba(255,255,255,0.3)" />

      {/* Accent glow on rim */}
      <circle cx={r} cy={r} r={rimR} fill="none"
        stroke={accent} strokeWidth="1.5" opacity="0.25"
        filter={`url(#rimglow-${id})`} />

      {/* Top-left rim highlight */}
      <ellipse
        cx={r - rimR * 0.28} cy={r - rimR * 0.32}
        rx={rimR * 0.22} ry={rimR * 0.1}
        fill="white" opacity="0.18"
        transform={`rotate(-35 ${r} ${r})`}
      />
    </svg>
  )
}
