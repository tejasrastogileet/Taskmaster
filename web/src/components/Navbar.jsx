import React from 'react'
import './component-styles.css'

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="brand">GoTasks</div>
        <div className="nav-actions">
          <button className="btn btn-ghost">Login / Signup</button>
        </div>
      </div>
    </nav>
  )
}
