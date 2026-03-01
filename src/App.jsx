import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Collection from './components/Collection'
import VisitUs from './components/VisitUs'
import Lifestyle from './components/Lifestyle'
import Videos from './components/Videos'
import Footer from './components/Footer'

function HarvestBanner() {
  return (
    <div className="harvest-banner">
      <div className="harvest-banner-img" />
      <div className="harvest-banner-overlay" />
      <div className="harvest-banner-content">
        <p className="section-label" style={{ marginBottom: '1rem' }}>From Vine to Glass</p>
        <blockquote className="harvest-quote">
          "Every bottle begins with hands in the earth
          <em> — and passion in the pour."</em>
        </blockquote>
      </div>
    </div>
  )
}

function App() {
  // Scroll reveal observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Collection />
      <HarvestBanner />
      <Videos />
      <VisitUs />
      <Lifestyle />
      <Footer />
    </>
  )
}

export default App
