import { useState, useEffect, useRef } from 'react'
import ParticleCanvas from './ParticleCanvas'

const DOWNLOADS = [
  { label: 'Wine List 2025',    file: '/downloads/urban-wines-wine-list-2025.pdf',   icon: '🍷' },
  { label: 'Tasting Menu',      file: '/downloads/urban-wines-tasting-menu.pdf',     icon: '🍽️' },
  { label: 'Bistro Food Menu',  file: '/downloads/urban-wines-bistro-menu.pdf',      icon: '🧀' },
  { label: 'Events Calendar',   file: '/downloads/urban-wines-events-2025.pdf',      icon: '📅' },
]

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <section className="hero" id="hero">

      {/* ── Full-screen video background ── */}
      <video
        className="hero-video"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Cinematic colour grading overlays */}
      <div className="hero-grade-top"    />
      <div className="hero-grade-bottom" />
      <div className="hero-grade-sides"  />
      <div className="hero-vignette"     />

      {/* Spotlight beam */}
      <div className="spotlight" />

      {/* Floating dust particles */}
      <ParticleCanvas />

      {/* ── Centered text overlay ── */}
      <div className="hero-overlay">
        <p className="hero-eyebrow">Durbanville · Since 2015</p>

        <h1 className="hero-headline">
          Refined Taste.<br />
          <em>Urban Soul.</em>
        </h1>

        <div className="hero-divider" />

        <p className="hero-sub">
          Premium wines curated in the heart of Durbanville.<br />
          Bold character. Timeless elegance.
        </p>

        <div className="hero-buttons">
          {/* Download dropdown */}
          <div className="hero-dl-wrap" ref={menuRef}>
            <button
              className="btn btn-primary hero-dl-trigger"
              onClick={() => setMenuOpen(o => !o)}
              aria-expanded={menuOpen}
            >
              Explore Collection
              <span className={`hero-dl-caret${menuOpen ? ' open' : ''}`}>▾</span>
            </button>

            {menuOpen && (
              <div className="hero-dl-menu">
                <p className="hero-dl-heading">Download</p>
                {DOWNLOADS.map(({ label, file, icon }) => (
                  <a
                    key={label}
                    className="hero-dl-item"
                    href={file}
                    download
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="hero-dl-icon">{icon}</span>
                    <span className="hero-dl-label">{label}</span>
                    <span className="hero-dl-arrow">↓</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <button
            className="btn btn-outline"
            onClick={() => document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Visit Us
          </button>
        </div>
      </div>

      {/* <div className="hero-scroll">Scroll</div> */}
    </section>
  )
}
