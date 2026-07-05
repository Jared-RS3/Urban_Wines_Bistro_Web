import { useState } from 'react'

/* ── Rich Instagram post data – Modern Wines Bistro ── */
const POSTS = [
  {
    id: 1,
    size: 'large',   // spans 2×2
    category: 'Wine',
    emoji: '🍷',
    bg: 'radial-gradient(ellipse at 40% 30%, #3a0810 0%, #1a0408 60%, #0d0d0d 100%)',
    accent: '#7B1123',
    caption: 'Our Reserve Cabernet — poured slow, savoured slower. The 2021 vintage is everything.',
    tag: '#UrbanWinesCabernet',
    likes: '1.2k',
    visual: 'wine-pour',
  },
  {
    id: 2,
    size: 'normal',
    category: 'Bistro Plate',
    emoji: '🧀',
    bg: 'linear-gradient(135deg, #1c1408 0%, #2a1e0a 50%, #1a1208 100%)',
    accent: '#C6A75E',
    caption: 'Artisan charcuterie for two 🥩 Aged gouda, prosciutto, fig preserve & house-baked crostini.',
    tag: '#UrbanBistro',
    likes: '847',
    visual: 'cheese',
  },
  {
    id: 3,
    size: 'normal',
    category: 'Coffee',
    emoji: '☕',
    bg: 'linear-gradient(135deg, #120d08 0%, #1e160a 50%, #120c06 100%)',
    accent: '#8B6014',
    caption: 'Single-origin espresso from our in-house roast. Because mornings deserve more.',
    tag: '#UrbanCoffee',
    likes: '632',
    visual: 'coffee',
  },
  {
    id: 4,
    size: 'normal',
    category: 'Cocktails',
    emoji: '🍸',
    bg: 'radial-gradient(ellipse at 60% 40%, #1a0a20 0%, #100812 60%, #0d0d0d 100%)',
    accent: '#9B4ECC',
    caption: 'The Urban Noir — smoky mezcal, blackcurrant shrub, fresh thyme & a splash of Durbanville Rosé.',
    tag: '#SignatureCocktails',
    likes: '921',
    visual: 'cocktail',
  },
  {
    id: 5,
    size: 'normal',
    category: 'Ambiance',
    emoji: '🕯️',
    bg: 'radial-gradient(ellipse at 50% 70%, #1a0c04 0%, #0e090a 70%, #0d0d0d 100%)',
    accent: '#C6A75E',
    caption: 'Friday evenings at Modern Wines. Candlelight, a glass of Shiraz, and nowhere else to be.',
    tag: '#UrbanVibes',
    likes: '1.5k',
    visual: 'candle',
  },
  {
    id: 6,
    size: 'normal',
    category: 'Small Plates',
    emoji: '🫒',
    bg: 'linear-gradient(135deg, #0e1208 0%, #161e0c 50%, #0e1208 100%)',
    accent: '#6B8C3A',
    caption: 'Warm olives, lemon zest & rosemary — the perfect aperitivo moment before your first pour.',
    tag: '#BistroStarters',
    likes: '503',
    visual: 'olives',
  },
  {
    id: 7,
    size: 'normal',
    category: 'Wine Flight',
    emoji: '✨',
    bg: 'radial-gradient(ellipse at 30% 60%, #2a0c14 0%, #1a0808 50%, #0d0d0d 100%)',
    accent: '#C6A75E',
    caption: 'The Heritage Flight — three expressions, one story. Cab Franc · Shiraz · Merlot.',
    tag: '#WineFlight',
    likes: '1.1k',
    visual: 'flight',
  },
  {
    id: 8,
    size: 'normal',
    category: 'Brunch',
    emoji: '🥂',
    bg: 'linear-gradient(135deg, #1a1408 0%, #241c08 50%, #1a1208 100%)',
    accent: '#D4A84B',
    caption: 'Saturday brunch done right. Smashed avocado, poached eggs & a glass of our Blanc de Blancs. 🥂',
    tag: '#UrbanBrunch',
    likes: '2.1k',
    visual: 'brunch',
  },
  {
    id: 9,
    size: 'normal',
    category: 'Dessert',
    emoji: '🍫',
    bg: 'radial-gradient(ellipse at 50% 30%, #1a0810 0%, #120608 60%, #0d0d0d 100%)',
    accent: '#7B4828',
    caption: 'Dark chocolate fondant, red wine reduction & a scoop of salted caramel. Pairs with our Reserve.',
    tag: '#BistroEats',
    likes: '778',
    visual: 'dessert',
  },
  {
    id: 10,
    size: 'normal',
    category: 'Flat White',
    emoji: '☕',
    bg: 'linear-gradient(135deg, #14100a 0%, #1e180c 50%, #14100a 100%)',
    accent: '#C6A75E',
    caption: 'Latte art that\'s almost too pretty to drink. Almost. Our barista @urban_coffee does this daily.',
    tag: '#UrbanCoffeeArt',
    likes: '693',
    visual: 'latte',
  },
  {
    id: 11,
    size: 'normal',
    category: 'Tapas',
    emoji: '🥩',
    bg: 'linear-gradient(135deg, #140a08 0%, #1e100a 50%, #140808 100%)',
    accent: '#8B3A1E',
    caption: 'Beef tataki, ponzu glaze & micro herbs. Small plate, big impression. Available Friday–Sunday.',
    tag: '#TapaMenu',
    likes: '934',
    visual: 'tataki',
  },
  {
    id: 12,
    size: 'normal',
    category: 'Sunset',
    emoji: '🌅',
    bg: 'radial-gradient(ellipse at 50% 80%, #3a1408 0%, #1a0c08 50%, #0d0d0d 100%)',
    accent: '#E8843A',
    caption: 'Golden hour in Durbanville. There\'s no better backdrop for a glass of our Golden Chenin. 🌅',
    tag: '#DurbanvilleVibes',
    likes: '3.2k',
    visual: 'sunset',
  },
]

/* ── Visual abstract for each card type ── */
function PostVisual({ visual, accent, emoji }) {
  const shapes = {
    'wine-pour': (
      <div style={{ position: 'relative', width: 80, height: 90 }}>
        <div style={{ width: 28, height: 70, background: `linear-gradient(to bottom, transparent, ${accent}cc)`, borderRadius: '0 0 14px 14px', margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: 0, left: '20%', width: '60%', height: '35%', background: accent, borderRadius: '50% 50% 14px 14px', opacity: 0.9 }} />
        </div>
        <div style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', width: 50, height: 3, borderRadius: 2, background: `${accent}66` }} />
      </div>
    ),
    'cheese': <div style={{ fontSize: 36, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>🧀🥩🫙</div>,
    'coffee': <div style={{ fontSize: 36, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>☕</div>,
    'cocktail': <div style={{ fontSize: 36, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>🍸✨</div>,
    'candle': <div style={{ fontSize: 36, filter: 'drop-shadow(0 4px 16px rgba(198,167,94,0.4))' }}>🕯️🍷</div>,
    'olives': <div style={{ fontSize: 36, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>🫒🌿</div>,
    'flight': (
      <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
        {['60%', '80%', '45%'].map((h, i) => (
          <div key={i} style={{ width: 12, height: h, background: ['#5A0F1C','#7B1123','#3a0810'][i], borderRadius: '6px 6px 0 0', opacity: 0.85 + i * 0.05 }} />
        ))}
      </div>
    ),
    'brunch': <div style={{ fontSize: 36, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>🥂🥑</div>,
    'dessert': <div style={{ fontSize: 36, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>🍫🍷</div>,
    'latte': <div style={{ fontSize: 36, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>☕🎨</div>,
    'tataki': <div style={{ fontSize: 36, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>🥩🌿</div>,
    'sunset': <div style={{ fontSize: 36, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>🌅🍾</div>,
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: 40 }}>
      {shapes[visual] || <span>{emoji}</span>}
    </div>
  )
}

/* ── Single Instagram card ── */
function PostCard({ post }) {
  const [liked, setLiked] = useState(false)
  const isLarge = post.size === 'large'

  return (
    <div
      className={`ig-card${isLarge ? ' ig-card--large' : ''}`}
      style={{ '--accent': post.accent }}
    >
      {/* Background */}
      <div className="ig-card-bg" style={{ background: post.bg }} />

      {/* Accent glow */}
      <div className="ig-card-glow" style={{ background: `radial-gradient(circle at 50% 50%, ${post.accent}22, transparent 70%)` }} />

      {/* Visual */}
      <div className="ig-card-visual">
        <PostVisual visual={post.visual} accent={post.accent} emoji={post.emoji} />
      </div>

      {/* Hover overlay */}
      <div className="ig-card-overlay">
        <div className="ig-card-overlay-inner">
          <span className="ig-cat-badge" style={{ borderColor: `${post.accent}66`, color: post.accent }}>
            {post.category}
          </span>
          <p className="ig-caption">{post.caption}</p>
          <span className="ig-tag">{post.tag}</span>
          <div className="ig-actions">
            <button
              className="ig-like-btn"
              onClick={() => setLiked(l => !l)}
              style={{ color: liked ? '#E8393A' : 'rgba(245,245,245,0.7)' }}
            >
              {liked ? '❤️' : '🤍'} {liked ? parseInt(post.likes) + 1 : post.likes}
            </button>
            <span className="ig-handle">@urban_wines</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Lifestyle() {
  return (
    <section className="section section-dark" id="lifestyle" style={{ paddingBottom: 0 }}>
      <div className="bg-vine-line" style={{ top: 0 }} />

      {/* Cinematic lifestyle hero – CSS only, no 3D */}
      <div className="lifestyle-hero">
        <div className="lifestyle-bg lifestyle-bg--css">
          {/* Animated wine-red orbs */}
          <div className="ls-orb ls-orb--1" />
          <div className="ls-orb ls-orb--2" />
          <div className="ls-orb ls-orb--3" />
        </div>

        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'radial-gradient(ellipse at center, transparent 25%, rgba(13,13,13,0.8) 100%)',
          pointerEvents: 'none',
        }} />

        <div className="lifestyle-content">
          <p className="section-label reveal" style={{ letterSpacing: '0.38em' }}>The Experience</p>
          <h2 className="reveal reveal-delay-1">
            More than Wine.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>A Lifestyle.</em>
          </h2>
          <div className="divider reveal reveal-delay-2" style={{ margin: '1.5rem auto' }} />
          <p className="reveal reveal-delay-2" style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>
            Wine, coffee, cocktails & curated small plates — Modern Wines Bistro is Durbanville's
            most intimate gathering place.
          </p>
          <div className="ls-tag-row reveal reveal-delay-3">
            {['🍷 Wine Tastings', '☕ Specialty Coffee', '🍸 Cocktails', '🧀 Bistro Plates', '🌿 Small Plates'].map(t => (
              <span key={t} className="ls-pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Instagram Feed ── */}
      <div className="container" style={{ paddingTop: '5rem', paddingBottom: '6rem' }}>
        <div className="ig-header reveal">
          <div>
            <p className="section-label" style={{ marginBottom: '0.4rem' }}>Follow Us</p>
            <a
              href="https://www.instagram.com/urban_wines/"
              target="_blank"
              rel="noopener noreferrer"
              className="ig-handle-link"
            >
              @urban_wines
            </a>
          </div>
          <a
            href="https://www.instagram.com/urban_wines/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ fontSize: '0.65rem', padding: '0.65rem 1.6rem' }}
          >
            Follow on Instagram
          </a>
        </div>

        {/* Bistro category pills */}
        <div className="ig-cats reveal reveal-delay-1">
          {[
            { label: 'All', icon: '✦' },
            { label: 'Wine', icon: '🍷' },
            { label: 'Coffee', icon: '☕' },
            { label: 'Cocktails', icon: '🍸' },
            { label: 'Food', icon: '🍽️' },
            { label: 'Ambiance', icon: '🕯️' },
          ].map((c, i) => (
            <span key={i} className="ig-cat-pill">{c.icon} {c.label}</span>
          ))}
        </div>

        <div className="ig-grid">
          {POSTS.map((post, i) => (
            <div key={post.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="ig-footer reveal">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            Visit us in Durbanville — where every visit is a new discovery.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/urban_wines/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.65rem' }}>
              View Full Feed
            </a>
            <button className="btn btn-primary" style={{ fontSize: '0.65rem' }} onClick={() => document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Table
            </button>
          </div>
        </div>
      </div>

      <div className="bg-vine-line" style={{ bottom: 0 }} />
    </section>
  )
}
