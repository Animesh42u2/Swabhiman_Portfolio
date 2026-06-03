'use client'
import { useState, useEffect, useRef } from 'react'

// ── Confetti ─────────────────────────────────────────────────────────────────
function GoldenConfetti({ active }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = ['#C9A84C', '#E2C97E', '#F5E6B2', '#B8860B', '#FFD700', '#FFF8DC']
    const pieces = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      w: 6 + Math.random() * 8,
      h: 10 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.15,
      vx: (Math.random() - 0.5) * 2.5,
      vy: 2.5 + Math.random() * 3,
      opacity: 1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      pieces.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.rot += p.rotSpeed
        if (p.y > canvas.height * 0.7) p.opacity -= 0.018
        if (p.opacity > 0) alive = true
        ctx.save()
        ctx.globalAlpha = Math.max(0, p.opacity)
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx.restore()
      })
      if (alive) animRef.current = requestAnimationFrame(draw)
    }
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [active])

  if (!active) return null
  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      pointerEvents: 'none',
    }} />
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', type: '', budget: '', message: '',
  })
  const [sent, setSent] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const handleChange = (name, value) => setForm(p => ({ ...p, [name]: value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzWReSbj8Wxch5KFRuxhgdnNf80ymsTCqDzzXTtDkzq8UAAP4s1LcGSh9RJKD47NGW0zg/exec'
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([key, val]) => fd.append(key, val))
      await fetch(SCRIPT_URL, { method: 'POST', body: fd, mode: 'no-cors' })
      setSent(true)
      setConfetti(true)
      setTimeout(() => setConfetti(false), 4000)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem',
    background: 'var(--black-mid)', border: '1px solid var(--gray-light)',
    color: 'var(--cream)', fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.85rem', outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    fontFamily: 'Tenor Sans, sans-serif', fontSize: '0.6rem',
    letterSpacing: '0.2em', textTransform: 'uppercase',
    color: 'var(--gold-dim)', display: 'block', marginBottom: '0.5rem',
  }

  const typeOptions = [
    { value: '', label: 'Select type' },
    { value: 'Sponsored video', label: 'Sponsored video' },
    { value: 'Instagram reel / post', label: 'Instagram reel / post' },
    { value: 'Brand ambassador', label: 'Brand ambassador' },
    { value: 'Product review', label: 'Product review' },
    { value: 'Event coverage', label: 'Event coverage' },
    { value: 'Other', label: 'Other' },
  ]

  const budgetOptions = [
    { value: '', label: 'Select budget' },
    { value: 'Under ₹10,000', label: 'Under ₹10,000' },
    { value: '₹10,000 – ₹30,000', label: '₹10,000 – ₹30,000' },
    { value: '₹30,000 – ₹75,000', label: '₹30,000 – ₹75,000' },
    { value: '₹75,000+', label: '₹75,000+' },
    { value: "Let's discuss", label: "Let's discuss" },
  ]

  const CustomSelect = ({ name, value, options, placeholder }) => {
    const isOpen = openDropdown === name
    const selected = options.find(o => o.value === value)
    const displayLabel = selected?.value ? selected.label : placeholder

    const toggle = () => setOpenDropdown(isOpen ? null : name)
    const select = (val) => { handleChange(name, val); setOpenDropdown(null) }

    return (
      <div style={{ position: 'relative', userSelect: 'none' }}>
        <div onClick={toggle} style={{
          ...inputStyle,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          cursor: 'pointer',
          borderColor: isOpen ? 'var(--gold-dim)' : 'var(--gray-light)',
          color: value ? 'var(--cream)' : 'var(--gray)',
        }}>
          <span>{displayLabel}</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}>
            <path d="M2 4l4 4 4-4" stroke="var(--gold-dim)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {isOpen && (
          <div style={{
            position: 'absolute', top: 'calc(100% + 2px)', left: 0, right: 0, zIndex: 100,
            background: '#1a1a1a', border: '1px solid var(--gold-dim)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          }}>
            {options.map(opt => (
              <div key={opt.value} onClick={() => select(opt.value)} style={{
                padding: '0.75rem 1rem', cursor: 'pointer',
                fontSize: '0.85rem', fontFamily: 'DM Sans, sans-serif',
                color: opt.value === value ? 'var(--gold)' : opt.value === '' ? 'var(--gray)' : 'var(--cream)',
                background: opt.value === value ? 'rgba(180,140,60,0.12)' : 'transparent',
                borderLeft: opt.value === value ? '2px solid var(--gold)' : '2px solid transparent',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { if (opt.value !== value) { e.currentTarget.style.background = 'rgba(180,140,60,0.07)'; e.currentTarget.style.color = 'var(--cream)' } }}
              onMouseLeave={e => { if (opt.value !== value) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = opt.value === '' ? 'var(--gray)' : 'var(--cream)' } }}
              >{opt.label}</div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <GoldenConfetti active={confetti} />

      <section
        id="contact"
        style={{ padding: '8rem 2rem', background: 'var(--black-soft)' }}
        onClick={e => { if (!e.target.closest('[data-dropdown]')) setOpenDropdown(null) }}
      >
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            fontWeight: 300, marginBottom: '0.75rem', color: 'var(--cream)',
          }}>
            Let's create something <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>together</span>
          </h2>

          <p style={{ fontSize: '0.9rem', color: 'var(--gray)', marginBottom: '3rem', lineHeight: 1.7 }}>
            Collabs, campaigns & long-term partnerships — let's chat.
          </p>

          {sent ? (
            <div style={{
              padding: '3rem', border: '1px solid var(--gold-dim)',
              textAlign: 'center',
              animation: 'fadeUp 0.6s ease forwards',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✦</div>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem', color: 'var(--gold)', marginBottom: '0.5rem',
              }}>Message received!</p>
              <p style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>
                I'll get back to you within 48 hours.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Row 1 */}
              <div className="form-grid">
                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input name="name" value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    required placeholder="John Doe" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
                    onBlur={e => e.target.style.borderColor = 'var(--gray-light)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input name="email" type="email" value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    required placeholder="you@brand.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
                    onBlur={e => e.target.style.borderColor = 'var(--gray-light)'}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="form-grid">
                <div>
                  <label style={labelStyle}>Company / Agency</label>
                  <input name="company" value={form.company}
                    onChange={e => handleChange('company', e.target.value)}
                    placeholder="Acme Inc." style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
                    onBlur={e => e.target.style.borderColor = 'var(--gray-light)'}
                  />
                </div>
                <div data-dropdown>
                  <label style={labelStyle}>Collaboration Type</label>
                  <CustomSelect name="type" value={form.type} options={typeOptions} placeholder="Select type" />
                </div>
              </div>

              {/* Budget */}
              <div data-dropdown>
                <label style={labelStyle}>Budget Range</label>
                <CustomSelect name="budget" value={form.budget} options={budgetOptions} placeholder="Select budget" />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Tell me about your idea</label>
                <textarea name="message" value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  required rows={5}
                  placeholder="What would you like to create together?"
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                  onFocus={e => e.target.style.borderColor = 'var(--gold-dim)'}
                  onBlur={e => e.target.style.borderColor = 'var(--gray-light)'}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  padding: '1rem 2.5rem',
                  background: loading ? 'var(--gold-dim)' : 'var(--gold)',
                  color: 'var(--black)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                  fontFamily: 'Tenor Sans, sans-serif',
                  fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase',
                  alignSelf: 'flex-start', transition: 'all 0.3s',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}
                onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)' } }}
                onMouseLeave={e => { e.currentTarget.style.background = loading ? 'var(--gold-dim)' : 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {loading ? (
                  <>
                    <span style={{
                      width: 14, height: 14, border: '2px solid var(--black)',
                      borderTopColor: 'transparent', borderRadius: '50%',
                      display: 'inline-block', animation: 'spin 0.7s linear infinite',
                    }} />
                    Sending...
                  </>
                ) : 'Send My Message ✦'}
              </button>
            </div>
          )}
        </div>

        <style>{`
          .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          @media (max-width: 600px) {
            .form-grid { grid-template-columns: 1fr !important; }
            #contact { padding: 5rem 1.25rem !important; }
            #contact button { width: 100%; justify-content: center; }
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>
    </>
  )
}