import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun } from 'react-icons/fa'

const toggleNightMode = () => document.body.classList.toggle('theme--dark')

const Footer = () => (
  <div className="footer">
    <div className="footer-logo">
      <img src="/logo.png" alt="Logo" />
    </div>
    <div className="footer-content">
      <div className="social-links">
        <a className="social-link social-github" href="https://github.com/pwltr" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          className="social-link social-linkedin"
          href="https://linkedin.com/in/philipp-walter"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a className="social-link social-twitter" href="https://twitter.com/@_pwltr" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>

      <button className="btn-darkMode" type="button" onClick={toggleNightMode}>
        <FaMoon className="lightbulb--off" />
        <FaSun className="lightbulb--on" />
        Day / Night
      </button>
    </div>
  </div>
)

export default Footer
