import { useRef, useState } from 'react'

const VIDEO_SLOTS = [
  {
    id: 1,
    tag: 'Behind the Vines',
    title: 'Harvest Season',
    desc: 'Follow our team through the annual grape harvest — from picking to pressing.',
    src: null, // Replace with: '/videos/harvest.mp4'
  },
  {
    id: 2,
    tag: 'In the Cellar',
    title: 'The Art of Blending',
    desc: 'Watch our cellar master craft the reserve blend — patience, precision, passion.',
    src: null, // Replace with: '/videos/blending.mp4'
  },
  {
    id: 3,
    tag: 'From Vine to Glass',
    title: 'Terroir Stories',
    desc: 'The cool Durbanville breezes, the rich clay soils — a journey from earth to bottle.',
    src: null, // Replace with: '/videos/terroir.mp4'
  },
  {
    id: 4,
    tag: 'Lifestyle',
    title: 'An Evening at Urban Wines',
    desc: 'Candle-lit tastings, curated pours, and conversation that flows as freely as the wine.',
    src: null, // Replace with: '/videos/evening.mp4'
  },
]

function VideoCard({ slot }) {
  const videoRef = useRef()
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    if (!videoRef.current) return
    if (playing) { videoRef.current.pause(); setPlaying(false) }
    else { videoRef.current.play(); setPlaying(true) }
  }

  return (
    <div className="video-card">
      <div className="video-placeholder">
        {slot.src ? (
          <video ref={videoRef} src={slot.src} loop preload="metadata" playsInline />
        ) : (
          /* Animated placeholder with cinematic dark aesthetic */
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, #0e0e0e 0%, #1a0808 40%, #0d0d0d 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
          }}>
            {/* Animated wine-pour shimmer lines */}
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                left: `${15 + i * 16}%`,
                top: 0,
                width: '1px',
                height: '100%',
                background: `linear-gradient(to bottom, transparent, rgba(${90 + i * 15},${9 + i * 5},${20 + i * 8},0.3), transparent)`,
                animation: `shimmerLine 2.${i}s ease-in-out ${i * 0.4}s infinite`,
              }} />
            ))}
            <div style={{
              width: '4px',
              height: '40%',
              background: 'linear-gradient(to bottom, rgba(198,167,94,0.15), rgba(123,17,35,0.5), transparent)',
              borderRadius: '2px',
              position: 'absolute',
              top: 0,
              left: '50%',
              animation: 'pourDrop 2s ease-in-out infinite',
            }} />
            <style>{`
              @keyframes shimmerLine {
                0%,100% { opacity: 0.2; transform: scaleY(0.8); }
                50% { opacity: 0.7; transform: scaleY(1.1); }
              }
              @keyframes pourDrop {
                0% { height: 20%; opacity: 0; }
                50% { height: 55%; opacity: 1; }
                100% { height: 20%; opacity: 0; }
              }
            `}</style>
          </div>
        )}

        {/* Play button */}
        <button className="play-btn" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? '⏸' : '▶'}
        </button>

        {!slot.src && (
          <p className="video-empty-msg">Drop your video file here · {slot.src || 'src/videos/' + slot.title.toLowerCase().replace(/\s+/g, '-') + '.mp4'}</p>
        )}
      </div>

      <div className="video-info">
        <span className="video-tag">{slot.tag}</span>
        <h3>{slot.title}</h3>
        <p>{slot.desc}</p>
      </div>
    </div>
  )
}

export default function Videos() {
  return (
    <section className="section section-charcoal" id="experience">
      <div className="bg-vine-line" style={{ top: 0 }} />
      <div className="container">
        <div className="videos-header">
          <p className="section-label reveal">Visual Stories</p>
          <h2 className="reveal reveal-delay-1">
            Beyond the <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Bottle</em>
          </h2>
          <p className="reveal reveal-delay-2" style={{ maxWidth: 540, margin: '1rem auto 0', textAlign: 'center' }}>
            Step inside our world — the vineyards, the cellars, the tastings.
            Drop your branded video files into <code style={{ color: 'var(--gold)', fontFamily: 'monospace', fontSize: '0.8rem' }}>public/videos/</code> to bring each slot to life.
          </p>
        </div>

        <div className="videos-grid">
          {VIDEO_SLOTS.map((slot, i) => (
            <div key={slot.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <VideoCard slot={slot} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-vine-line" style={{ bottom: 0 }} />
    </section>
  )
}
