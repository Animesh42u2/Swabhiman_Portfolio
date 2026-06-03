'use client'
import { useRef, useEffect, useState, useMemo, useContext } from 'react'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import { createContext } from 'react'

const VelocityCtx = createContext(null)

function ScrollVelocityProvider({ children }) {
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, (v) => {
    const sign = v < 0 ? -1 : 1
    return sign * Math.min(5, (Math.abs(v) / 1000) * 5)
  })
  return <VelocityCtx.Provider value={velocityFactor}>{children}</VelocityCtx.Provider>
}

function MarqueeRow({ children, baseVelocity = 4, direction = 1 }) {
  const sharedFactor = useContext(VelocityCtx)
  const { scrollY } = useScroll()
  const localVelocity = useVelocity(scrollY)
  const localSmooth = useSpring(localVelocity, { damping: 50, stiffness: 400 })
  const localFactor = useTransform(localSmooth, (v) => {
    const sign = v < 0 ? -1 : 1
    return sign * Math.min(5, (Math.abs(v) / 1000) * 5)
  })
  const velocityFactor = sharedFactor || localFactor

  const containerRef = useRef(null)
  const [numCopies, setNumCopies] = useState(4)
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(0)
  const prevTimeRef = useRef(null)
  const unitWidthRef = useRef(0)
  const baseXRef = useRef(0)

  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartBase = useRef(0)

  const childrenArray = useMemo(() => Array.isArray(children) ? children : [children], [children])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const block = container.querySelector('.marquee-block')
    if (block) {
      unitWidthRef.current = block.scrollWidth
      const needed = Math.max(4, Math.ceil(container.offsetWidth / unitWidthRef.current) + 2)
      setNumCopies(needed)
    }
  }, [childrenArray])

  const isInView = useInView(containerRef, { margin: '20%' })
  const shouldPause = hovered || isDragging.current

  useAnimationFrame((time) => {
    if (!isInView || shouldPause) return
    if (prevTimeRef.current == null) prevTimeRef.current = time
    const dt = Math.max(0, (time - prevTimeRef.current) / 1000)
    prevTimeRef.current = time
    const unitWidth = unitWidthRef.current
    if (unitWidth <= 0) return
    const velocity = velocityFactor.get()
    const speedMul = Math.min(5, Math.abs(velocity))
    const scrollDir = velocity >= 0 ? 1 : -1
    const currentDir = direction * scrollDir
    const pps = (unitWidth * baseVelocity) / 100
    const moveBy = currentDir * pps * (1 + speedMul) * dt
    const newX = baseXRef.current + moveBy
    if (newX >= unitWidth) baseXRef.current = newX % unitWidth
    else if (newX <= 0) baseXRef.current = unitWidth + (newX % unitWidth)
    else baseXRef.current = newX
    x.set(baseXRef.current)
  })

  useEffect(() => {
    if (shouldPause) prevTimeRef.current = null
  }, [shouldPause])

  const onDragStart = (clientX) => {
    isDragging.current = true
    dragStartX.current = clientX
    dragStartBase.current = baseXRef.current
  }

  const onDragMove = (clientX) => {
    if (!isDragging.current) return
    const unitWidth = unitWidthRef.current
    if (unitWidth <= 0) return
    const delta = dragStartX.current - clientX
    let newX = dragStartBase.current + delta
    newX = ((newX % unitWidth) + unitWidth) % unitWidth
    baseXRef.current = newX
    x.set(newX)
  }

  const onDragEnd = () => { isDragging.current = false }

  const xTransform = useTransform(x, (v) => `translate3d(${-v}px,0,0)`)

  return (
    <div
      ref={containerRef}
      className="marquee-container"
      style={{ overflow: 'hidden', width: '100%', cursor: isDragging.current ? 'grabbing' : 'grab' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); onDragEnd() }}
      onMouseDown={(e) => onDragStart(e.clientX)}
      onMouseMove={(e) => onDragMove(e.clientX)}
      onMouseUp={onDragEnd}
      onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
      onTouchEnd={onDragEnd}
    >
      <motion.div style={{ transform: xTransform, display: 'inline-flex', willChange: 'transform', userSelect: 'none' }}>
        {Array.from({ length: numCopies }).map((_, i) => (
          <div key={i} className={i === 0 ? 'marquee-block' : ''} style={{ display: 'inline-flex', flexShrink: 0 }}>
            {childrenArray}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function BrandCard({ name, logo, category }) {
  return (
    <div style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.4rem',
      margin: '0 clamp(0.5rem, 1.5vw, 1rem)',
      padding: 'clamp(0.6rem, 1.5vw, 0.9rem) clamp(0.75rem, 2vw, 1.25rem)',
      minWidth: 'clamp(80px, 10vw, 130px)',
      height: 'clamp(60px, 8vw, 88px)',
      background: 'transparent',
      flexShrink: 0,
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
    }}>
      {logo ? (
        <img
          src={logo}
          alt={name}
          draggable={false}
          style={{
            height: 'clamp(24px, 3.5vw, 38px)',
            maxWidth: 'clamp(70px, 9vw, 105px)',
            objectFit: 'contain',
            opacity: 0.82,
            pointerEvents: 'none',
          }}
        />
      ) : (
        <span style={{
          fontFamily: 'Tenor Sans, sans-serif',
          fontSize: 'clamp(0.5rem, 1.1vw, 0.68rem)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.5)',
          textAlign: 'center',
          lineHeight: 1.3,
        }}>{name}</span>
      )}
      {category && (
        <span style={{
          fontFamily: 'Tenor Sans, sans-serif',
          fontSize: 'clamp(0.4rem, 0.9vw, 0.5rem)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
        }}>{category}</span>
      )}
    </div>
  )
}

export default function Brands() {
  const row1 = [
    { name: "Dolby Atmos",  logo: '/brands/dolby-atmos.png',  category: 'Audio Tech' },
    { name: "Dolby Vision", logo: '/brands/dolby-vision.png', category: 'Display Tech' },
    { name: "OYO",          logo: '/brands/oyo.png',          category: 'Hospitality' },
    { name: "Realme",       logo: '/brands/realme.png',       category: 'Mobile' },
    { name: "Style Bazaar", logo: '/brands/style-bazaar.png', category: 'Fashion' },
    { name: "Cars24",       logo: '/brands/cars24.png',       category: 'Automotive' },
    { name: "Oppo",         logo: '/brands/oppo.png',         category: 'Mobile' },
    { name: "Royal Stag",   logo: '/brands/royal-stag.png',   category: 'Lifestyle' },
    { name: "Amazon",       logo: '/brands/amazon.png',       category: 'E-Commerce' },
  ]

  const row2 = [
    { name: "Reliance",  logo: '/brands/reliance.png',  category: 'Retail' },
    { name: "Flipkart",  logo: '/brands/flipkart.png',  category: 'E-Commerce' },
    { name: "L'Oréal",   logo: '/brands/loreal.png',    category: 'Beauty' },
    { name: "Samsung",   logo: '/brands/samsung.png',   category: 'Electronics' },
    { name: "Nykaa",     logo: '/brands/nykaa.png',     category: 'Beauty' },
    { name: "JBL",       logo: '/brands/jbl.png',       category: 'Audio' },
    { name: "boAt",      logo: '/brands/boat.png',      category: 'Audio' },
    { name: "Hyundai",   logo: '/brands/hyundai.png',   category: 'Automotive' },
    { name: "Fastrack",  logo: '/brands/fastrack.png',  category: 'Fashion' },
  ]

  return (
    <section id="brands" style={{
      padding: 'clamp(4rem, 10vw, 8rem) 0',
      background: 'var(--black)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <style>{`
        .brands-header, .brands-quote { padding: 0 clamp(1.25rem, 5vw, 2.5rem); }
        .marquee-container { user-select: none; }
        .brand-row-wrap {
          position: relative;
          padding: clamp(0.3rem, 1vw, 0.5rem) 0;
        }
        .brand-row-wrap::before, .brand-row-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: clamp(30px, 6vw, 90px);
          z-index: 2;
          pointer-events: none;
        }
        .brand-row-wrap::before { left: 0; background: linear-gradient(to right, var(--black), transparent); }
        .brand-row-wrap::after  { right: 0; background: linear-gradient(to left, var(--black), transparent); }
        .row-divider {
          width: 100%; height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,168,76,0.1), transparent);
          margin: 0.25rem 0;
        }
        .bottom-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
          padding: 0 clamp(1.25rem, 5vw, 2.5rem);
          max-width: 1100px;
          margin: clamp(3rem, 6vw, 5rem) auto 0;
        }
        @media (max-width: 700px) {
          .bottom-layout {
            grid-template-columns: 1fr;
          }
          .profile-side {
            order: -1;
          }
        }
      `}</style>

      {/* Header */}
      <div className="brands-header" style={{ maxWidth: 1100, margin: '0 auto clamp(2rem, 5vw, 4rem)' }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16,1,0.3,1] }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--cream)', marginBottom: '0.75rem', lineHeight: 1.2 }}
        >
          Trusted by <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>great brands</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16,1,0.3,1] }}
          style={{ fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', color: 'var(--gray)', maxWidth: 500, lineHeight: 1.8 }}
        >
          From global giants to homegrown names — building campaigns that feel genuine.
        </motion.p>
      </div>

      {/* Marquee rows */}
      <ScrollVelocityProvider>
        <div className="brand-row-wrap" style={{ marginBottom: '0.25rem' }}>
          <MarqueeRow baseVelocity={3.5} direction={1}>
            {row1.map((b, i) => <BrandCard key={i} {...b} />)}
          </MarqueeRow>
        </div>

        <div className="row-divider" />

        <div className="brand-row-wrap">
          <MarqueeRow baseVelocity={3.5} direction={-1}>
            {row2.map((b, i) => <BrandCard key={i} {...b} />)}
          </MarqueeRow>
        </div>
      </ScrollVelocityProvider>

      {/* Bottom: Quote (left) + Profile image (right) */}
      <div className="bottom-layout">

        {/* Pull quote — left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          style={{ borderLeft: '1px solid var(--gold-dim)', padding: 'clamp(1.25rem,3vw,2rem) clamp(1.25rem,3vw,2.5rem)' }}
        >
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.1rem, 3vw, 1.8rem)',
            fontWeight: 300, fontStyle: 'italic', lineHeight: 1.6,
            color: 'var(--cream-dim)', marginBottom: '1.25rem',
          }}>
            "Content should feel like a conversation,<br />not an advertisement."
          </p>
          <span style={{
            fontFamily: 'Tenor Sans, sans-serif', fontSize: 'clamp(0.5rem, 1vw, 0.6rem)',
            letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dim)',
          }}>— Swabhiman Ball</span>
        </motion.div>

        {/* Profile image — right */}
        {/* ↓↓↓ CHANGE THE src below to your image path, e.g. '/content.jpeg' or '/swabhi.jpeg' ↓↓↓ */}
        <motion.div
          className="profile-side"
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15, ease: [0.16,1,0.3,1] }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{
            position: 'relative',
            width: 'clamp(200px, 28vw, 320px)',
            aspectRatio: '3 / 4',
          }}>
            {/* Gold accent line top-left */}
            <div style={{
              position: 'absolute',
              top: -10, left: -10,
              width: 40, height: 40,
              borderTop: '1px solid rgba(201,168,76,0.5)',
              borderLeft: '1px solid rgba(201,168,76,0.5)',
              zIndex: 2,
              pointerEvents: 'none',
            }} />
            {/* Gold accent line bottom-right */}
            <div style={{
              position: 'absolute',
              bottom: -10, right: -10,
              width: 40, height: 40,
              borderBottom: '1px solid rgba(201,168,76,0.5)',
              borderRight: '1px solid rgba(201,168,76,0.5)',
              zIndex: 2,
              pointerEvents: 'none',
            }} />

            <img
              src="/content.jpeg"
              alt="Swabhiman Ball"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                filter: 'brightness(0.92) contrast(1.04)',
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
