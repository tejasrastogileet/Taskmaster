import React from 'react'
import './component-styles.css'

const testimonials = [
  {quote:'GoTasks helped our team stay aligned and ship faster. The interface is delightful.', name:'Aisha Khan', role:'Product Manager at TechCorp'},
  {quote:'A beautifully minimal app — fast and reliable. I love the analytics.', name:'Marco Silva', role:'Founder at Sprintly'},
  {quote:'Secure, simple, and effective. The perfect balance of features and clarity.', name:'Lena Park', role:'Design Lead at BrightCo'}
]

function Stars(){
  return (
    <div className="stars">★★★★★</div>
  )
}

export default function Testimonials(){
  return (
    <div className="testimonials">
      <h2 className="section-title">Trusted by teams</h2>
      <div className="test-grid">
        {testimonials.map((t,i)=> (
          <div key={i} className="test-card">
            <Stars />
            <p className="test-quote">"{t.quote}"</p>
            <p className="test-person">{t.name}</p>
            <p className="test-role">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
