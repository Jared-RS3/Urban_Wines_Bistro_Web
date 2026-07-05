export default function About() {
  return (
    <section className="section section-charcoal" id="about">
      <div className="bg-vine-line" style={{ top: 0 }} />
      <div className="container">
        <div className="about-grid">
          <div className="about-visuals reveal">
            <div className="about-img-wrap">
              <img
                src="/grapes.jpg"
                alt="Dark premium grapes floating against a moody burgundy background"
                className="about-img"
              />
              {/* Subtle gold corner accent */}
              <div className="about-img-corner about-img-corner--tl" />
              <div className="about-img-corner about-img-corner--br" />
            </div>
          </div>
          <div className="about-text">
            <p className="section-label reveal">Our Story</p>
            <h2 className="reveal reveal-delay-1">Crafted with<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Character</em></h2>
            <div className="divider reveal reveal-delay-1" />
            <p className="reveal reveal-delay-2">
              Neighbourhood Wines brings together curated selections from Durbanville's finest vineyards, offering bold reds, crisp whites, and exclusive reserves for true wine lovers.
            </p>
            <p className="reveal reveal-delay-2" style={{ marginTop: '1rem' }}>
              Nestled in the heart of the Cape Winelands, we source only from producers who share our obsession with quality — from the cool-climate slopes that produce our signature reserve Cabernets, to the sun-drenched rows behind our cellar doors.
            </p>
            <div className="about-stats reveal reveal-delay-3">
              <div>
                <span className="stat-num">24+</span>
                <span className="stat-label">Curated Labels</span>
              </div>
              <div>
                <span className="stat-num">8</span>
                <span className="stat-label">Estate Partners</span>
              </div>
              <div>
                <span className="stat-num">11</span>
                <span className="stat-label">Years Growing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-vine-line" style={{ bottom: 0 }} />
    </section>
  )
}
