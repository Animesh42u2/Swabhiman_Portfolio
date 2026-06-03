'use client'
import { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * target)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function formatStat(number, rawSuffix) {
  if (number >= 1_000_000) {
    const val = number / 1_000_000
    // Always show one decimal: 4000000 → 4.0M, 5300000 → 5.3M
    return { displayTarget: val, unit: 'M', suffix: rawSuffix.includes('+') ? '+' : '', decimals: 1 }
  }
  if (number >= 100_000) {
    // 340000 → 340K
    return { displayTarget: number / 1_000, unit: 'K', suffix: rawSuffix.includes('+') ? '+' : '', decimals: 0 }
  }
  // Below 100K — show raw number, no abbreviation (1155 stays 1155)
  return { displayTarget: number, unit: '', suffix: rawSuffix, decimals: 0 }
}

function StatCard({ number, suffix, label, platform, delay }) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  const { displayTarget, unit, suffix: formattedSuffix, decimals } = formatStat(number, suffix)
  const count = useCountUp(displayTarget, 2000, visible)

  const displayCount = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString()

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="stat-card"
      style={{
        padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.5rem)',
        border: '1px solid var(--gray-light)',
        position: 'relative',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, border-color 0.3s ease`,
        cursor: 'default',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold-dim)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--gray-light)'}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease 0.5s',
      }} />

      <p style={{
        fontFamily: 'Tenor Sans, sans-serif',
        fontSize: 'clamp(0.5rem, 1vw, 0.6rem)',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'var(--gold-dim)',
        marginBottom: '0.75rem',
        whiteSpace: 'nowrap',
      }}>{platform}</p>

      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
        fontWeight: 300,
        lineHeight: 1,
        color: 'var(--cream)',
        marginBottom: '0.5rem',
        whiteSpace: 'nowrap',
        letterSpacing: '-0.01em',
      }}>
        {displayCount}{unit}{formattedSuffix}
      </p>

      <p style={{
        fontFamily: 'Tenor Sans, sans-serif',
        fontSize: 'clamp(0.55rem, 1vw, 0.65rem)',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--gray)',
        whiteSpace: 'nowrap',
      }}>{label}</p>
    </div>
  )
}

export default function Stats() {
  const stats = [
    { number: 340000,  suffix: '+', label: 'Followers',     platform: 'Instagram' },
    { number: 4000000, suffix: '+', label: 'Total Likes',   platform: 'Instagram' },
    { number: 1155,    suffix: '',  label: 'Posts & Reels', platform: 'Instagram' },
    { number: 16100,   suffix: '',  label: 'Subscribers',   platform: 'YouTube'   },
    { number: 5300000, suffix: '+', label: 'Total Views',   platform: 'YouTube'   },
    { number: 100,     suffix: '+', label: 'Brand Collabs', platform: 'Campaigns' },
  ]

  return (
    <>
      <style>{`
        #stats { position: relative; overflow: hidden; }
        #stats::before {
          content: '';
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center 30%;
          background-attachment: fixed;
          opacity: 0.18; z-index: 0;
        }
        #stats::after {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 50% 0%, transparent 20%, var(--black) 80%),
            linear-gradient(to bottom, var(--black) 0%, transparent 25%, transparent 75%, var(--black) 100%);
          z-index: 1;
        }
        #stats > * { position: relative; z-index: 2; }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1px;
          background: var(--gray-light);
          border: 1px solid var(--gray-light);
        }
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 540px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .stat-card:hover { background: rgba(255,255,255,0.02); }
      `}</style>

      <section
        id="stats"
        style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1rem, 4vw, 2rem)', background: 'var(--black)' }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 300,
            marginBottom: 'clamp(2rem, 5vw, 4rem)',
            color: 'var(--cream)',
          }}>
            Reach that <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>speaks</span>
          </h2>

          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} style={{ background: 'var(--black)' }}>
                <StatCard {...s} delay={i * 100} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}