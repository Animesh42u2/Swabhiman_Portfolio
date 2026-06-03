'use client'
export default function Videos() {
  const reels = [
    {
      label: 'Style Bazaar',
      category: 'Fashion & Lifestyle',
      likes: '4.3K', views: '22.6K', shares: '120',
      url: 'https://www.instagram.com/reel/DYcaTglq8V9/',
      thumb: '/thumbnails/style-bazaar.jpg',
      gradient: 'linear-gradient(135deg, #1a1200 0%, #2a1f00 40%, #1a1608 100%)',
    },
    {
      label: 'Gamers Paradise',
      category: 'Tech & Gaming',
      likes: '1.1K', views: '18.4K', shares: '44',
      url: 'https://www.instagram.com/reel/DXwcziUKM7z/',
      thumb: '/thumbnails/gamers-paradise.jpg',
      gradient: 'linear-gradient(135deg, #0a0e1a 0%, #0d1a2a 40%, #080c14 100%)',
    },
    {
      label: 'Dolby Vision',
      category: 'Tech Review',
      likes: '740', views: '12.1K', shares: '30',
      url: 'https://www.instagram.com/reel/DWFGu2_E53n/',
      thumb: '/thumbnails/dolby-vision.jpg',
      gradient: 'linear-gradient(135deg, #12060a 0%, #1f0a10 40%, #0e0608 100%)',
    },
    {
      label: 'Cars24',
      category: 'Brand Collab',
      likes: '2.8K', views: '22.6K', shares: '95',
      url: 'https://www.instagram.com/reel/DUz0yB0kfFm/',
      thumb: '/thumbnails/cars24.jpg',
      gradient: 'linear-gradient(135deg, #0e0a00 0%, #1f1400 40%, #120e00 100%)',
    },
    {
      label: 'Geek Aire GF6 Fan',
      category: 'Product Review',
      likes: '3.5K', views: '31.5K', shares: '112',
      url: 'https://www.instagram.com/reel/CrLM4IKP8Au/',
      thumb: '/thumbnails/geek-aire-gf6.jpg',
      gradient: 'linear-gradient(135deg, #001a10 0%, #002a1a 40%, #001208 100%)',
    },
    {
      label: 'Viral Video',
      category: 'Trending',
      likes: '1.9K', views: '19.2K', shares: '67',
      url: 'https://www.instagram.com/reel/DCTvSOeN7L5/',
      thumb: '/thumbnails/viral-video.jpg',
      gradient: 'linear-gradient(135deg, #0e0014 0%, #1a0028 40%, #0a0010 100%)',
    },
  ]

  return (
    <section id="videos" style={{ padding: '8rem 2rem', background: 'var(--black-soft)' }}>
      <style>{`
        .reel-card-3d {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(145deg, #1a1608, #0e0c07);
          border: 1px solid rgba(201,168,76,0.2);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s cubic-bezier(0.23,1,0.32,1), border-color 0.4s ease;
          transform-style: preserve-3d;
          box-shadow: 0 4px 15px rgba(0,0,0,0.4), 0 1px 0 rgba(201,168,76,0.08) inset, 0 -1px 0 rgba(0,0,0,0.5) inset;
          text-decoration: none;
        }
        .reel-card-3d:hover {
          transform: translateY(-10px) rotateX(4deg) rotateY(-2deg) scale(1.02);
          border-color: rgba(201,168,76,0.55);
          box-shadow: 0 30px 70px rgba(0,0,0,0.6), 0 10px 30px rgba(201,168,76,0.12), 0 1px 0 rgba(201,168,76,0.15) inset;
        }
        .reel-card-3d:hover .play-ring {
          transform: translate(-50%, -50%) scale(1.12);
          box-shadow: 0 0 0 2px rgba(201,168,76,0.5), 0 0 40px rgba(201,168,76,0.4), 0 0 80px rgba(201,168,76,0.2);
        }
        .reel-card-3d:hover .card-shine { opacity: 1; }
        .reel-card-3d:hover .ig-redirect { opacity: 1; transform: translateY(0); }
        .reel-card-3d:hover .thumb-overlay { opacity: 1; }

        .thumb-wrap {
          width: 100%;
          aspect-ratio: 9/16;
          position: relative;
          overflow: hidden;
        }
        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.6s cubic-bezier(0.23,1,0.32,1);
        }
        .reel-card-3d:hover .thumb-img {
          transform: scale(1.07);
        }
        /* Gold tint overlay on hover */
        .thumb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        /* Bottom fade for text readability */
        .thumb-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,6,2,0.95) 0%, rgba(8,6,2,0.2) 40%, transparent 65%);
          pointer-events: none;
        }
        /* Fallback gradient (shown while image loads or if missing) */
        .thumb-fallback {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .thumb-img { position: relative; z-index: 1; }

        /* Gold frame corners */
        .corner-tl, .corner-tr, .corner-bl, .corner-br {
          position: absolute;
          width: 16px; height: 16px;
          z-index: 4;
        }
        .corner-tl { top: 12px; left: 12px; border-top: 1px solid rgba(201,168,76,0.5); border-left: 1px solid rgba(201,168,76,0.5); }
        .corner-tr { top: 12px; right: 12px; border-top: 1px solid rgba(201,168,76,0.5); border-right: 1px solid rgba(201,168,76,0.5); }
        .corner-bl { bottom: 12px; left: 12px; border-bottom: 1px solid rgba(201,168,76,0.5); border-left: 1px solid rgba(201,168,76,0.5); }
        .corner-br { bottom: 12px; right: 12px; border-bottom: 1px solid rgba(201,168,76,0.5); border-right: 1px solid rgba(201,168,76,0.5); }

        .card-shine {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.6) 30%, rgba(255,220,100,0.9) 50%, rgba(201,168,76,0.6) 70%, transparent 100%);
          opacity: 0.4;
          transition: opacity 0.4s ease;
          z-index: 5;
        }
        .play-ring {
          position: absolute;
          top: 62%; left: 50%;
          transform: translate(-50%, -50%);
          width: 60px; height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, rgba(0,0,0,0.5), rgba(0,0,0,0.3));
          border: 1.5px solid rgba(201,168,76,0.85);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease;
          box-shadow: 0 0 0 1px rgba(201,168,76,0.15), 0 0 24px rgba(201,168,76,0.25), inset 0 1px 0 rgba(255,230,120,0.2);
          z-index: 3;
          backdrop-filter: blur(6px);
        }
        .play-triangle {
          width: 0; height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 18px solid #C9A84C;
          margin-left: 4px;
          filter: drop-shadow(0 0 8px rgba(201,168,76,0.9));
        }
        .ig-redirect {
          position: absolute;
          bottom: 12px; right: 12px;
          display: flex; align-items: center; gap: 4px;
          padding: 5px 10px;
          background: rgba(10,8,5,0.9);
          border: 1px solid rgba(201,168,76,0.35);
          border-radius: 20px;
          font-family: 'Tenor Sans', sans-serif;
          font-size: 0.48rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.75);
          z-index: 4;
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .reel-info-bar {
          padding: 0.9rem 1rem 1rem;
          background: linear-gradient(180deg, #0e0c07 0%, #0a0805 100%);
          border-top: 1px solid rgba(201,168,76,0.1);
          position: relative;
          z-index: 2;
        }
        .reel-info-bar::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.45), transparent);
        }
        .category-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 2px 9px;
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 20px;
          font-family: 'Tenor Sans', sans-serif;
          font-size: 0.48rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.55);
          margin-bottom: 0.45rem;
          background: rgba(201,168,76,0.04);
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'Tenor Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.05em;
        }

        .reels-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.5rem;
          perspective: 1200px;
        }
        @media (max-width: 1100px) {
          .reels-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 680px) {
          .reels-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .reel-card-3d:hover { transform: translateY(-4px) scale(1.01); }
          .reel-info-bar { padding: 0.7rem 0.75rem 0.85rem; }
        }
        @media (max-width: 400px) {
          .reels-grid { grid-template-columns: 1fr 1fr; gap: 0.6rem; }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1rem' }}>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.2 }}>
            Content that <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>connects</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="reels-grid">
          {reels.map((r, i) => (
            <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="reel-card-3d">
              <div className="card-shine" />

              <div className="thumb-wrap">
                {/* Fallback gradient behind image */}
                <div className="thumb-fallback" style={{ background: r.gradient }} />

                {/* Real thumbnail */}
                <img
                  src={r.thumb}
                  alt={r.label}
                  className="thumb-img"
                  onError={e => { e.currentTarget.style.display = 'none' }}
                />

                <div className="thumb-overlay" />
                <div className="thumb-fade" />

                {/* Corner accents */}
                <div className="corner-tl" /><div className="corner-tr" />
                <div className="corner-bl" /><div className="corner-br" />

                {/* Play button */}
                <div className="play-ring">
                  <div className="play-triangle" />
                </div>

                {/* Watch on Instagram badge */}
                <div className="ig-redirect">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(201,168,76,0.7)" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4.5" stroke="rgba(201,168,76,0.7)" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1" fill="rgba(201,168,76,0.7)" />
                  </svg>
                  Watch on Instagram
                </div>
              </div>

              {/* Info bar */}
              <div className="reel-info-bar">
                <div className="category-pill">
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(201,168,76,0.6)', display: 'inline-block', flexShrink: 0 }} />
                  {r.category}
                </div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', fontWeight: 400, color: 'var(--cream)', marginBottom: '0.6rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {r.label}
                </p>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <span className="stat-item" style={{ color: 'rgba(245,235,215,0.4)' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                    </svg>
                    {r.views}
                  </span>
                  <span className="stat-item" style={{ color: 'rgba(201,168,76,0.65)' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {r.likes}
                  </span>
                  <span className="stat-item" style={{ color: 'rgba(245,235,215,0.4)' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    {r.shares}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
