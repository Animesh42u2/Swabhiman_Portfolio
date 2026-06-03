'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }
  }),
}

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
}

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
}

const stats = [
  { label: 'Based in', value: 'Kolkata, WB' },
  { label: 'Since', value: '2019' },
  { label: 'Platforms', value: 'Instagram · YouTube' },
]

function splitWords(text) {
  return text.split(/(\s+)/).map((w, i) => ({ t: w, key: i }))
}

const p1Words = splitWords("I'm a creator, storyteller, and playback singer from Kolkata, West Bengal. My content lives at the intersection of real life and beautiful storytelling — fashion that feels personal, travel that goes beyond the tourist trail, and lifestyle content that's genuinely, unapologetically me.")
const p2Words = splitWords("With 3.4L+ followers across platforms, I collaborate with brands that believe in authentic storytelling — not just ads, but experiences worth remembering.")

function WordReveal({ words, visible }) {
  return words.map((w, i) => (
    <span key={i} style={{
      display: 'inline',
      opacity: visible[i] ? 1 : 0,
      transform: visible[i] ? 'translateY(0)' : 'translateY(12px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
    }}>{w.t}</span>
  ))
}

/* ── Gold BorderBeam (pure CSS animation) ── */
function GoldBorderBeam({ duration = 4, size = 140 }) {
  return (
    <>
      <style>{`
        @property --beam-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes beam-spin {
          to { --beam-angle: 360deg; }
        }
        @keyframes beam-spin-rev {
          from { --beam-angle: 360deg; }
          to   { --beam-angle: 0deg; }
        }
        .gold-beam-border {
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          pointer-events: none;
          z-index: 3;
        }
        .gold-beam-border::before,
        .gold-beam-border::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
        }
        /* The travelling beam — conic gradient that sweeps around */
        .gold-beam-border::before {
          padding: 1.5px;
          background: conic-gradient(
            from var(--beam-angle),
            transparent 0%,
            transparent 60%,
            rgba(201,168,76,0.15) 70%,
            rgba(201,168,76,0.85) 85%,
            rgba(255,220,120,1)   90%,
            rgba(201,168,76,0.85) 95%,
            rgba(201,168,76,0.15) 98%,
            transparent 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: beam-spin ${duration}s linear infinite;
        }
        /* Second beam going the opposite direction, offset */
        .gold-beam-border::after {
          padding: 1px;
          background: conic-gradient(
            from var(--beam-angle),
            transparent 0%,
            transparent 65%,
            rgba(201,168,76,0.08) 72%,
            rgba(201,168,76,0.4)  82%,
            rgba(255,220,120,0.6) 87%,
            rgba(201,168,76,0.4)  92%,
            rgba(201,168,76,0.08) 97%,
            transparent 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: beam-spin-rev ${duration * 1.3}s linear infinite;
          animation-delay: ${duration * 0.5}s;
          opacity: 0.65;
        }
      `}</style>
      <div className="gold-beam-border" />
    </>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [vis1, setVis1] = useState(Array(p1Words.length).fill(false))
  const [vis2, setVis2] = useState(Array(p2Words.length).fill(false))

  useEffect(() => {
    if (!isInView) return
    const timers = []
    p1Words.forEach((_, i) => {
      timers.push(setTimeout(() => {
        setVis1(prev => { const n = [...prev]; n[i] = true; return n })
      }, 300 + i * 55))
    })
    const p2Start = 300 + p1Words.length * 55 + 80
    p2Words.forEach((_, i) => {
      timers.push(setTimeout(() => {
        setVis2(prev => { const n = [...prev]; n[i] = true; return n })
      }, p2Start + i * 55))
    })
    return () => timers.forEach(clearTimeout)
  }, [isInView])

  return (
    <section id="about" ref={ref} style={{
      padding: 'clamp(4rem, 10vw, 8rem) clamp(1rem, 5vw, 2rem)',
      background: 'var(--black-soft)',
      position: 'relative', overflow: 'hidden',
    }}>

      <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(2.5rem, 7vw, 5rem)', alignItems: 'center' }}>

          {/* LEFT: Photo */}
          <motion.div initial="hidden" animate={isInView ? 'show' : 'hidden'} variants={slideLeft} style={{ position: 'relative' }}>

            <motion.span
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ position: 'absolute', top: -20, left: -12, zIndex: 3, fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(5rem, 12vw, 8rem)', fontWeight: 300, color: 'rgba(201,168,76,0.07)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}
            >01</motion.span>

            {/* Photo wrapper — BorderBeam lives here */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                aspectRatio: '3/4',
                background: 'var(--black-mid)',
                position: 'relative',
                overflow: 'hidden',
                maxWidth: 420,
                /* no hard border — beam provides it */
              }}
            >
              {/* Gold BorderBeam */}
              <GoldBorderBeam duration={4} />

              <img
                src="/swabhi.jpeg"
                alt="Swabhiman Ball"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />

              {/* Hover gold overlay */}
              <motion.div
                initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%)', pointerEvents: 'none' }}
              />

              {/* Name label at bottom */}
              <motion.div
                initial={{ y: 20, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem 1.25rem 1.25rem', background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)', zIndex: 4 }}
              >
                <p style={{ fontFamily: 'Tenor Sans, sans-serif', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Mr. Swabhi</p>
              </motion.div>
            </motion.div>

            {/* Offset gold border behind the photo */}
            <motion.div
              initial={{ opacity: 0, x: -10, y: -10 }} animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ position: 'absolute', top: 20, left: 20, right: -14, bottom: -14, border: '1px solid rgba(201,168,76,0.2)', zIndex: -1, maxWidth: 434 }}
            />

            {/* Followers badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }} animate={isInView ? { opacity: 1, scale: 1, rotate: -3 } : {}}
              transition={{ delay: 1, duration: 0.6, type: 'spring', stiffness: 200 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              style={{ position: 'absolute', bottom: 30, right: -20, background: 'var(--gold)', padding: '0.6rem 1rem', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', zIndex: 5 }}
            >
              <p style={{ fontFamily: 'Tenor Sans, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--black)', whiteSpace: 'nowrap' }}>3.4L+ Followers</p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div initial="hidden" animate={isInView ? 'show' : 'hidden'} variants={slideRight}>

            <div style={{ marginBottom: '2rem', overflow: 'hidden' }}>
              <motion.h2
                initial={{ y: 60, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1 }}
              >
                I'm{' '}
                <span className="gold-text" style={{ fontStyle: 'italic' }}>Swabhiman</span>
                <br />but you can call me <br />
                <motion.span
                  initial={{ color: 'var(--cream)' }} animate={isInView ? { color: 'var(--gold)' } : {}}
                  transition={{ delay: 1, duration: 0.8 }}
                >Mr. Swabhi</motion.span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ height: 1, background: 'linear-gradient(to right, var(--gold-dim), transparent)', transformOrigin: 'left', marginBottom: '1.75rem' }}
            />

            <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: 'var(--gray)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              <WordReveal words={p1Words} visible={vis1} />
            </p>

            <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', color: 'var(--gray)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              <WordReveal words={p2Words} visible={vis2} />
            </p>

            <motion.div
              initial="hidden" animate={isInView ? 'show' : 'hidden'}
              variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
              style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 2rem)', flexWrap: 'wrap', marginTop: '2rem' }}
            >
              {stats.map(({ label, value }) => (
                <motion.div
                  key={label} variants={fadeUp} whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '1rem', minWidth: 110 }}
                >
                  <p style={{ fontFamily: 'Tenor Sans, sans-serif', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.3rem' }}>{label}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--cream-dim)' }}>{value}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.6 }}
              style={{ marginTop: '2.5rem' }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, backgroundColor: 'var(--gold-light)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'inline-block', padding: '0.85rem 2.25rem', background: 'var(--gold)', color: 'var(--black)', fontFamily: 'Tenor Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                Let's Collaborate ✦
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
