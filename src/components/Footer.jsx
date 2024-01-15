import React from 'react'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Record</li>
          <li>Communities</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>For Artists</h4>
        <ul>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Investors</li>
          <li>Vendors</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Useful links</h4>
        <ul>
          <li>Support</li>
          <li>Free Mobile App</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
