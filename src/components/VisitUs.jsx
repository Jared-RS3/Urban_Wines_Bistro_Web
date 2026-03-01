export default function VisitUs() {
  return (
    <section className="section section-dark" id="visit">
      <div className="bg-vine-line" style={{ top: 0 }} />
      <div className="container">
        <div className="visit-grid">
          <div className="visit-info">
            <p className="section-label reveal">Find Us</p>
            <h2 className="reveal reveal-delay-1">
              Visit Urban Wines<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>in Durbanville</em>
            </h2>
            <div className="divider reveal reveal-delay-1" />
            <p className="reveal reveal-delay-2">
              Experience curated tastings in an intimate, modern cellar setting. Our team will guide you through each pour — from crisp whites to bold reserve reds.
            </p>

            <div className="visit-details reveal reveal-delay-2">
              {[
                {
                  icon: '📍',
                  label: 'Address',
                  value: '14 Tyger Valley Road, Durbanville, Cape Town, 7550',
                },
                {
                  icon: '🕐',
                  label: 'Hours',
                  value: 'Mon–Fri: 10:00–18:00\nSat: 09:00–17:00\nSun: 10:00–15:00',
                },
                {
                  icon: '📞',
                  label: 'Phone',
                  value: '+27 21 976 0000',
                },
                {
                  icon: '✉',
                  label: 'Email',
                  value: 'hello@urbanwines.co.za',
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="visit-detail-row">
                  <span className="visit-icon">{icon}</span>
                  <div>
                    <strong>{label}</strong>
                    <span>{value.split('\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="btn btn-primary reveal reveal-delay-3"
              onClick={() => window.open('mailto:hello@urbanwines.co.za?subject=Tasting%20Booking', '_blank')}
            >
              Book a Tasting
            </button>
          </div>

          <div>
            {/* Map */}
            <div className="map-container reveal reveal-delay-1">
              <iframe
                title="Urban Wines Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26371.65!2d18.6436!3d-33.8293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc56c8e05cf2ed%3A0x8e6d5e5a4a6f8eb5!2sDurbanville%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza&style=feature:all|element:geometry|color:0x1a1a1a&style=feature:water|element:geometry|color:0x0d0d0d&style=feature:road|element:geometry|color:0x2a2a2a"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.7)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Cellar atmosphere image */}
            <div className="cellar-img-wrap reveal reveal-delay-2">
              <img
                src="/cellar.jpg"
                alt="Stone wine cellar with rows of oak barrels"
                className="cellar-img"
              />
              <div className="cellar-img-overlay">
                <span className="cellar-img-tag">Our Cellar</span>
                <p className="cellar-img-quote">
                  "Where time slows, and wine finds its character."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-vine-line" style={{ bottom: 0 }} />
    </section>
  )
}
