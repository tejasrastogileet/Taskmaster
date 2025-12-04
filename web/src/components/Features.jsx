import React from 'react'
import './component-styles.css'

const features = [
  {title:'Smart Task Management', desc:'Organize tasks with labels, priorities and smart suggestions.'},
  {title:'Deadline Tracking', desc:'Never miss a deadline — reminders and due-date tracking.'},
  {title:'Progress Analytics', desc:'Visualize progress and productivity with clean charts.'},
  {title:'Team Collaboration', desc:'Share lists, assign tasks and communicate clearly.'},
  {title:'Lightning Fast', desc:'Optimized for speed with a minimal and snappy UI.'},
  {title:'Secure & Private', desc:'Your data is encrypted and yours to control.'}
]

function IconPlaceholder(){
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="#1A1A1A" strokeWidth="1.2" fill="none" />
    </svg>
  )
}

export default function Features(){
  return (
    <section className="features">
      <h2 className="section-title">Built For Productivity</h2>
      <p className="section-sub">Powerful features designed to help you focus and ship.</p>

      <div className="features-grid">
        {features.map((f, i) => (
          <article key={i} className="feature-card">
            <div className="feature-icon"><IconPlaceholder/></div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
