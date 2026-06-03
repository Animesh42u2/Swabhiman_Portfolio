'use client'
export default function Footer() {
  const socials = [
    {
      label: 'YouTube',
      href: 'https://youtube.com/@mrswabhi6394?si=ApXoGhix2WeyDoRH',
      color: '#FF0000',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF0000">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/mr.swabhi/',
      color: '#E1306C',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="url(#igGrad)">
          <defs>
            <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f09433"/>
              <stop offset="25%" stopColor="#e6683c"/>
              <stop offset="50%" stopColor="#dc2743"/>
              <stop offset="75%" stopColor="#cc2366"/>
              <stop offset="100%" stopColor="#bc1888"/>
            </linearGradient>
          </defs>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/share/18bWp7Zt2X/?mibextid=wwXIfr',
      color: '#1877F2',
      glowColor: 'rgba(24,119,242,0.4)',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:Swabhiman50@gmail.com',
      color: '#EA4335',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#EA4335">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
    },
  ]

  const glowMap = {
    YouTube: 'rgba(255,0,0,0.35)',
    Instagram: 'rgba(220,39,67,0.35)',
    Facebook: 'rgba(24,119,242,0.35)',
    Email: 'rgba(234,67,53,0.35)',
  }

  return (
    <footer style={{
      padding: '3rem 2rem',
      background: 'var(--black)',
      borderTop: '1px solid var(--gray-light)',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1.5rem',
      }}>

        {/* Name */}
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.2rem', fontWeight: 300, color: 'var(--gold)',
          letterSpacing: '0.1em', margin: 0,
        }}>
          Swabhiman Ball
        </p>

        {/* Icons */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="footer-icon"
              style={{
                '--glow': glowMap[s.label],
                width: 42, height: 42,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                textDecoration: 'none',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.12)'
                e.currentTarget.style.boxShadow = `0 8px 24px ${glowMap[s.label]}`
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{
          fontFamily: 'Tenor Sans, sans-serif', fontSize: '0.6rem',
          letterSpacing: '0.1em', color: 'var(--gray)', margin: 0,
        }}>
          © {new Date().getFullYear()} Swabhiman Ball. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer > div {
            flex-direction: column !important;
            text-align: center;
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  )
}