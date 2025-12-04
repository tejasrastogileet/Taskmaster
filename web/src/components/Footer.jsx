import React from 'react'
import './component-styles.css'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="brand-footer">GoTasks</div>
          <p className="brand-desc">The future of task management is here. Organize, track, and achieve more.</p>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>API</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Documentation</li>
              <li>Community</li>
              <li>Status</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
