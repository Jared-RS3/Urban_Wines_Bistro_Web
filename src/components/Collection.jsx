import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, Environment } from '@react-three/drei'
import * as THREE from 'three'

const WINES = [
  {
    id: 1, name: 'Reserve Cabernet Sauvignon', badge: 'Flagship Red', origin: 'Durbanville, WO',
    vintage: 2021, price: 'R 385', notes: 'Dark plum, blackcurrant and cedar. Full-bodied with silky tannins and a long, warming finish.',
    pairings: 'Lamb chops · Aged cheddar · Dark chocolate',
    alcohol: '14.5%', temp: '16–18 °C', color: '#3a0810',
  },
  {
    id: 2, name: 'Blanc de Blancs Chardonnay', badge: 'Crisp White', origin: 'Durbanville, WO',
    vintage: 2023, price: 'R 265', notes: 'Citrus blossom, green apple and light vanilla oak. Fresh acidity with a creamy mid-palate.',
    pairings: 'Grilled fish · Brie · Summer salads',
    alcohol: '13.2%', temp: '8–10 °C', color: '#c6a020',
  },
  {
    id: 3, name: 'Cellar Master\'s Shiraz', badge: 'Signature Red', origin: 'Durbanville, WO',
    vintage: 2020, price: 'R 420', notes: 'Spicy pepper, dark berry and smoked meat. Rich, velvety texture with hints of violet and mocha.',
    pairings: 'Slow-cooked ribs · Blue cheese · Dark spice dishes',
    alcohol: '14.8%', temp: '16–18 °C', color: '#5A0F1C',
  },
  {
    id: 4, name: 'Rosé de Terroir', badge: 'Dry Rosé', origin: 'Durbanville, WO',
    vintage: 2024, price: 'R 195', notes: 'Strawberry, white peach and rose petal. Bone dry with vibrant acidity and an elegant, lingering finish.',
    pairings: 'Tapas · Salmon tartare · Fresh summer fruits',
    alcohol: '12.8%', temp: '6–8 °C', color: '#c05070',
  },
  {
    id: 5, name: 'Golden Reserve Chenin Blanc', badge: 'Premium White', origin: 'Durbanville, WO',
    vintage: 2022, price: 'R 310', notes: 'Honey, guava and orange blossom with a lively palate and beautifully balanced sweetness.',
    pairings: 'Mild curry · Prawn dishes · Soft cheeses',
    alcohol: '13.5%', temp: '8–10 °C', color: '#c6900a',
  },
  {
    id: 6, name: 'Urban Merlot', badge: 'Everyday Red', origin: 'Durbanville, WO',
    vintage: 2022, price: 'R 180', notes: 'Ripe plum, cherry and subtle earthiness. Smooth, approachable tannins with a gentle oak finish.',
    pairings: 'Pasta · Roast chicken · Semi-hard cheeses',
    alcohol: '13.8%', temp: '15–17 °C', color: '#6a1020',
  },
]

/* ── Mini 3D bottle in card ── */
function MiniBottle({ wineColor }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.5
  })
  return (
    <group ref={ref} scale={0.55} position={[0, -0.3, 0]}>
      <mesh>
        <cylinderGeometry args={[0.22, 0.24, 1.8, 24]} />
        <meshStandardMaterial color="#1a3a1a" roughness={0.05} metalness={0.1} transparent opacity={0.85} />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.19, 0.21, 0.75, 24]} />
        <meshStandardMaterial color={wineColor} roughness={0.05} transparent opacity={0.7} emissive={wineColor} emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[0, 0.97, 0]}>
        <cylinderGeometry args={[0.1, 0.19, 0.25, 20]} />
        <meshStandardMaterial color="#1a3a1a" roughness={0.05} metalness={0.1} transparent opacity={0.85} />
      </mesh>
      <mesh position={[0, 1.12, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.22, 20]} />
        <meshStandardMaterial color="#1a3a1a" roughness={0.05} metalness={0.1} transparent opacity={0.85} />
      </mesh>
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.08, 16]} />
        <meshStandardMaterial color="#C6A75E" roughness={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[0, 1.32, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.12, 16]} />
        <meshStandardMaterial color="#8B6914" roughness={0.85} />
      </mesh>
      {/* label */}
      <mesh position={[0, 0.3, 0.23]}>
        <planeGeometry args={[0.34, 0.4]} />
        <meshStandardMaterial color="#F5F0E8" roughness={0.6} />
      </mesh>
    </group>
  )
}

/* ── Modal bottle scene ── */
function ModalBottleScene({ wineColor }) {
  return (
    <>
      <ambientLight intensity={0.1} />
      <spotLight position={[2, 5, 2]} angle={0.4} penumbra={0.8} intensity={60} color="#e8d5a0" />
      <spotLight position={[-2, 2, -1]} angle={0.6} penumbra={1} intensity={20} color="#5A0F1C" />
      <pointLight position={[0, 2, 2]} intensity={8} color="#c6a75e" />
      <Environment preset="night" />
      <Float speed={1.5} floatIntensity={0.6}>
        <MiniBottle wineColor={wineColor} />
      </Float>
    </>
  )
}

/* ── Wine card mini canvas ── */
function CardScene({ wineColor }) {
  return (
    <>
      <ambientLight intensity={0.1} />
      <spotLight position={[2, 4, 2]} angle={0.5} penumbra={0.8} intensity={40} color="#e8d5a0" />
      <pointLight position={[-1, 1, 1]} intensity={6} color="#c6a75e" />
      <Environment preset="night" />
      <Float speed={1} floatIntensity={0.4}>
        <MiniBottle wineColor={wineColor} />
      </Float>
    </>
  )
}

/* ── Wine card ── */
function WineCard({ wine, onOpen }) {
  return (
    <div className="wine-card" onClick={() => onOpen(wine)}>
      <div className="wine-card-label-glow" />
      <div className="wine-card-canvas">
        <Canvas camera={{ position: [0, 0.3, 2.8], fov: 42 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent', width: '100%', height: '200px' }}>
          <CardScene wineColor={wine.color} />
        </Canvas>
      </div>
      <span className="wine-badge">{wine.badge}</span>
      <h3>{wine.name}</h3>
      <p className="wine-origin">{wine.origin} · {wine.vintage}</p>
      <p className="wine-notes">{wine.notes}</p>
      <div className="wine-card-footer">
        <span className="wine-price">{wine.price}</span>
        <button className="wine-more" aria-label="View details">View Details →</button>
      </div>
    </div>
  )
}

/* ── Modal ── */
function WineModal({ wine, onClose }) {
  if (!wine) return null
  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal-inner">
          <div className="modal-header">
            <div>
              <span className="wine-badge">{wine.badge}</span>
              <h2 style={{ marginTop: '0.4rem' }}>{wine.name}</h2>
              <p style={{ marginTop: '0.2rem', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{wine.origin} · {wine.vintage}</p>
            </div>
            <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
          </div>

          <div className="modal-canvas">
            <Canvas camera={{ position: [0, 0.5, 3.5], fov: 40 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent', width: '100%', height: '280px' }}>
              <ModalBottleScene wineColor={wine.color} />
            </Canvas>
          </div>

          <p style={{ lineHeight: '1.9', color: 'var(--text-muted)' }}>{wine.notes}</p>

          <div className="modal-grid">
            <div className="modal-field"><label>Food Pairings</label><p>{wine.pairings}</p></div>
            <div className="modal-field"><label>Alcohol</label><p>{wine.alcohol}</p></div>
            <div className="modal-field"><label>Serve at</label><p>{wine.temp}</p></div>
            <div className="modal-field"><label>Price per bottle</label><p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--gold)' }}>{wine.price}</p></div>
          </div>

          <div className="modal-actions">
            <button className="btn btn-primary" onClick={onClose}>Add to Order</button>
            <button className="btn btn-outline" onClick={onClose}>Continue Exploring</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Collection() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="section section-dark" id="collection">
      <div className="bg-vine-line" style={{ top: 0 }} />
      <div className="container">
        <div className="collection-header">
          <p className="section-label reveal">Our Collection</p>
          <h2 className="reveal reveal-delay-1">Curated <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Excellence</em></h2>
          <p className="reveal reveal-delay-2">
            Handpicked selections from Durbanville's premier estates. Hover to discover — click to explore.
          </p>
        </div>

        <div className="wine-shelf">
          {WINES.map((w, i) => (
            <div
              key={w.id}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
            >
              <WineCard wine={w} onOpen={setSelected} />
            </div>
          ))}
        </div>
      </div>

      {selected && <WineModal wine={selected} onClose={() => setSelected(null)} />}
      <div className="bg-vine-line" style={{ bottom: 0 }} />
    </section>
  )
}
