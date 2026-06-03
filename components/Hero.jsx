'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef()
  const videoRef = useRef()
  const overlayRef = useRef()
  const contentRef = useRef()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    setTimeout(() => el.classList.add('loaded'), 100)

    const handleScroll = () => {
      const scrollY = window.scrollY
      const vh = window.innerHeight

      if (videoRef.current) {
        const parallaxOffset = scrollY * 0.45
        videoRef.current.style.transform = `translate(-50%, calc(-50% + ${parallaxOffset}px)) scale(1.15)`
      }

      if (overlayRef.current) {
        const opacity = Math.min(0.5 + (scrollY / vh) * 0.4, 0.85)
        overlayRef.current.style.background = `rgba(0,0,0,${opacity})`
      }

      if (contentRef.current) {
        const fadeOut = Math.max(1 - (scrollY / vh) * 1.4, 0)
        const moveUp = scrollY * 0.15
        contentRef.current.style.opacity = fadeOut
        contentRef.current.style.transform = `translateY(-${moveUp}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        #hero { display: block; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }
        .hero-btn-primary {
          display: inline-block;
          padding: 0.85rem 2.5rem;
          background: var(--gold);
          color: var(--black);
          font-family: 'Tenor Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .hero-btn-primary:hover {
          background: var(--gold-light, #e0c97f);
          transform: translateY(-2px);
        }
        .hero-btn-outline {
          display: inline-block;
          padding: 0.85rem 2.5rem;
          border: 1px solid var(--gold-dim);
          color: var(--gold);
          font-family: 'Tenor Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .hero-btn-outline:hover {
          background: rgba(201,168,76,0.12);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 600px) {
          .hero-title { font-size: clamp(2.8rem, 16vw, 5rem) !important; }
          .hero-subtitle { font-size: 0.6rem !important; letter-spacing: 0.2em !important; }
          .hero-desc { font-size: 0.85rem !important; }
          .hero-divider-line { width: 30px !important; }
          .hero-btns { flex-direction: column !important; align-items: center !important; }
          .hero-btn-primary, .hero-btn-outline { width: 80vw !important; text-align: center !important; }
        }
      `}</style>

      <section
        id="hero"
        ref={sectionRef}
        style={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--black)',
          border: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {/* ── Parallax video background ── */}
        <div style={{
          position: 'absolute', inset: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%) scale(1.15)',
              minWidth: '100%', minHeight: '100%',
              width: 'auto', height: 'auto',
              objectFit: 'cover',
              willChange: 'transform',
            }}
          >
            <source src="https://res.cloudinary.com/dcse27hnb/video/upload/v1780425347/videoplayback_ofop58.webm" type="video/webm" />
          </video>
        </div>

        {/* ── Dark overlay for text readability ── */}
        <div
          ref={overlayRef}
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.58)',
            zIndex: 1,
          }}
        />

        {/* ── Bottom gradient fade ── */}
        <div style={{
          position: 'absolute', bottom: -2, left: 0, right: 0,
          height: '35%',
          background: 'linear-gradient(to top, #0d0d0d 0%, #0d0d0d 2%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        {/* ── Main content ── */}
        <div
          ref={contentRef}
          style={{
            position: 'relative', zIndex: 3,
            minHeight: '100vh',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '6rem 2rem 5rem',
            textAlign: 'center',
            willChange: 'opacity, transform',
          }}
        >
          <p className="hero-subtitle" style={{
            fontFamily: 'Tenor Sans, sans-serif',
            fontSize: '0.65rem', letterSpacing: '0.4em',
            textTransform: 'uppercase', color: 'var(--gold)',
            marginBottom: '1.5rem',
            opacity: 0, animation: 'fadeUp 0.8s ease 0.2s forwards',
          }}>
            Creator · Storyteller · Singer
          </p>

          <h1 className="hero-title" style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 300, lineHeight: 0.9,
            letterSpacing: '-0.01em',
            marginBottom: '0.2em',
            opacity: 0, animation: 'fadeUp 0.8s ease 0.4s forwards',
          }}>
            <span style={{
              display: 'block',
              color: '#ffffff',
              textShadow: '0 4px 60px rgba(0,0,0,1), 0 2px 20px rgba(0,0,0,0.9)',
            }}>Swabhiman</span>
            <span style={{
              display: 'block', fontStyle: 'italic',
              color: 'var(--gold)',
              textShadow: '0 4px 60px rgba(0,0,0,1), 0 2px 20px rgba(0,0,0,0.8)',
            }}>Ball</span>
          </h1>

          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            justifyContent: 'center', margin: '2rem 0',
            opacity: 0, animation: 'fadeUp 0.8s ease 0.6s forwards',
          }}>
            <div className="hero-divider-line" style={{ height: '1px', width: 60, background: 'var(--gold-dim)' }} />
            <p className="hero-subtitle" style={{
              fontFamily: 'Tenor Sans, sans-serif',
              fontSize: '0.7rem', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)',
              margin: 0,
            }}>
              Lifestyle · Fashion · Travel
            </p>
            <div className="hero-divider-line" style={{ height: '1px', width: 60, background: 'var(--gold-dim)' }} />
          </div>

          <p className="hero-desc" style={{
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 420,
            margin: '0 auto 2.5rem',
            lineHeight: 1.9,
            opacity: 0, animation: 'fadeUp 0.8s ease 0.7s forwards',
            textShadow: '0 2px 16px rgba(0,0,0,0.9)',
          }}>
            Based in Kolkata · Crafting stories that feel real —
            work, wanderlust, music & the everyday extraordinary.
          </p>

          <div className="hero-btns" style={{
            display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
            opacity: 0, animation: 'fadeUp 0.8s ease 0.9s forwards',
          }}>
            <a href="#videos" className="hero-btn-primary">Watch My Work</a>
            <a href="#contact" className="hero-btn-outline">Work With Me</a>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          zIndex: 4,
          opacity: 0, animation: 'fadeIn 1s ease 1.5s forwards',
        }}>
        </div>
      </section>
    </>
  )
}
