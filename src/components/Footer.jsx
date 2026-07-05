export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--off-white)', margintop: 0 }}>Modern Wines</h3>
          <p style={{ marginTop: 0 }}>
            Durbanville <span style={{ color: 'var(--gold)' }}>·</span> Est. 2015
          </p>
          <p style={{ marginTop: '1rem' }}>
            Premium curated wines from the Cape Winelands. Refined taste, urban soul.
          </p>
          <div className="social-links" style={{ marginTop: '1.5rem' }}>
            {[['IG', 'https://instagram.com'], ['FB', 'https://facebook.com'], ['TW', 'https://twitter.com'], ['YT', 'https://youtube.com']].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{label}</a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            {[['About', 'about'], ['Collection', 'collection'], ['Experience', 'experience'], ['Visit Us', 'visit'], ['Lifestyle', 'lifestyle']].map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Wines</h4>
          <ul>
            {['Reserve Cabernet', 'Blanc de Blancs', 'Cellar Master Shiraz', 'Rosé de Terroir', 'Golden Chenin', 'Urban Merlot'].map(w => (
              <li key={w}><span>{w}</span></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><span>14 Tyger Valley Road</span></li>
            <li><span>Durbanville, Cape Town</span></li>
            <li><span>7550</span></li>
            <li style={{ marginTop: '1rem' }}>
              <a href="tel:+27219760000">+27 21 976 0000</a>
            </li>
            <li>
              <a href="mailto:hello@urbanwines.co.za">hello@urbanwines.co.za</a>
            </li>
          </ul>
          <button
            className="btn btn-outline"
            style={{ marginTop: '1.5rem', padding: '0.6rem 1.4rem', fontSize: '0.65rem' }}
            onClick={() => scrollTo('visit')}
          >
            Book a Tasting
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Modern Wines, Durbanville. All rights reserved.</span>
        <span>
          <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('hero') }}>Privacy</a>
          {' · '}
          <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('hero') }}>Terms</a>
        </span>
      </div>
    </footer>
  )
}
