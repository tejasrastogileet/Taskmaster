import React from 'react'
import './component-styles.css'

export default function Hero(){
  const handleCTAClick = () => {
    const el = document.getElementById('tasks')
    if(el){
      el.scrollIntoView({behavior:'smooth', block:'start'})
    }
  }

  return (
    <header className="hero">
      <div className="hero-bg">
        <div className="glass-shape shape-1" />
        <div className="glass-shape shape-2" />
      </div>

      <div className="container hero-inner">
        <h1 className="hero-title">GoTasks</h1>
        <p className="hero-copy">Smart Task Tracking Built with Go and React. Organize your day, prioritize what matters, and move faster with a simple, beautiful task experience.</p>
        <div className="hero-cta">
          <button className="btn btn-cta" onClick={handleCTAClick}>Get Started <span className="arrow">→</span></button>
        </div>
      </div>
    </header>
  )
}
