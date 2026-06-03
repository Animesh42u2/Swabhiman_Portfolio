'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Stats', 'Videos', 'Brands', 'Contact']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.25rem 2.5rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
    }}>
      <a href="#hero" style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.15em',
        color: 'var(--gold)', textDecoration: 'none',
        textTransform: 'uppercase',
      }}>
        Mr. Swabhi
      </a>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', gap: '2.5rem', listStyle: 'none',
        margin: 0, padding: 0,
      }} className="desktop-nav">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              fontFamily: 'Tenor Sans, sans-serif',
              fontSize: '0.7rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'var(--cream-dim)',
              textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
            >{l}</a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        <div style={{ width: 24, height: 1, background: 'var(--gold)', marginBottom: 6 }} />
        <div style={{ width: 16, height: 1, background: 'var(--gold)', marginBottom: 6 }} />
        <div style={{ width: 20, height: 1, background: 'var(--gold)' }} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(10,10,10,0.98)', padding: '2rem',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '0.75rem 0',
                fontFamily: 'Tenor Sans, sans-serif',
                fontSize: '0.8rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--cream-dim)',
                textDecoration: 'none', borderBottom: '1px solid rgba(201,168,76,0.1)',
              }}
            >{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
