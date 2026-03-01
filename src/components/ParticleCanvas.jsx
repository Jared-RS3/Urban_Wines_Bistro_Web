import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let W, H

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particle pool
    const count = 70
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * (W || 1200),
      y: Math.random() * (H || 800),
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -(Math.random() * 0.25 + 0.05),
      alpha: Math.random() * 0.4 + 0.05,
      life: Math.random(),
      maxLife: Math.random() * 300 + 150,
      age: 0,
    }))

    const reset = (p) => {
      p.x = Math.random() * W
      p.y = H + 10
      p.vx = (Math.random() - 0.5) * 0.2
      p.vy = -(Math.random() * 0.3 + 0.05)
      p.alpha = Math.random() * 0.45 + 0.05
      p.r = Math.random() * 1.6 + 0.3
      p.age = 0
      p.maxLife = Math.random() * 300 + 150
    }

    const render = () => {
      ctx.clearRect(0, 0, W, H)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.age++

        const progress = p.age / p.maxLife
        const fade = progress < 0.2 ? progress / 0.2 : progress > 0.8 ? (1 - progress) / 0.2 : 1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)

        const isGold = Math.random() > 0.95
        ctx.fillStyle = isGold
          ? `rgba(198,167,94,${p.alpha * fade * 0.7})`
          : `rgba(245,245,245,${p.alpha * fade * 0.5})`
        ctx.fill()

        if (p.age > p.maxLife || p.y < -10) reset(p)
      })

      animId = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
    />
  )
}
