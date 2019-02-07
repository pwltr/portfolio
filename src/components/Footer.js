import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaLightbulb, FaRegLightbulb } from 'react-icons/fa'

const toggleNightMode = () => document.body.classList.toggle('theme--dark')

const NavBar = () => (
  <div className="footer">
    <div className="social-links">
      <a
        className="social-link social-github"
        href="https://github.com/backdot"
        target="_blank">
        <FaGithub />
      </a>
      <a
        className="social-link social-linkedin"
        href="https://linkedin.com/in/philipp-walter"
        target="_blank">
        <FaLinkedin />
      </a>
      <a
        className="social-link social-twitter"
        href="https://twitter.com/@_backdot"
        target="_blank">
        <FaTwitter />
      </a>
    </div>
    <button
      className="btn-darkMode"
      onClick={toggleNightMode}>
      <FaRegLightbulb className="lightbulb--off" />
      <FaLightbulb className="lightbulb--on" />
      Toggle Day/Night
    </button>
  </div>
)

export default NavBar
