import { useState, useEffect } from 'react'

const links = ['About', 'Collection', 'Experience', 'Visit']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a className="nav-logo" href="#hero">
        Urban Wines
        <span>Durbanville · Est. 2015</span>
      </a>

      <ul className="nav-links">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(l) }}>{l}</a>
          </li>
        ))}
      </ul>

      <a
        href="#visit"
        className="nav-cta"
        style={{ display: open ? 'none' : '' }}
        onClick={e => { e.preventDefault(); scrollTo('Visit') }}
      >
        Book Tasting
      </a>

      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        <span style={{ transform: open ? 'rotate(45deg) translate(4px,4px)' : '' }} />
        <span style={{ opacity: open ? 0 : 1 }} />
        <span style={{ transform: open ? 'rotate(-45deg) translate(4px,-4px)' : '' }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(13,13,13,0.97)',
          backdropFilter: 'blur(12px)', zIndex: 999, display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'
        }}>
          <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: '#C6A75E', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{ background: 'none', border: 'none', color: '#F5F5F5', fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', cursor: 'pointer', letterSpacing: '0.05em' }}>{l}</button>
          ))}
          <button onClick={() => scrollTo('Visit')} className="btn btn-primary">Book Tasting</button>
        </div>
      )}
    </nav>
  )
}
