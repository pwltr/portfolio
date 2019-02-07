import React from 'react'
import Link from 'gatsby-link'

const Introduction = () => (
  <div className="section section--introduction">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">
          Fullstack <br /> Developer
        </h2>
      </div>

      <p className="section-text">
        Hello, my name is Phil. I am a FullStack Javascript Developer based in Vienna.
        <br />
        I have a passion for development and love to learn new technologies. I am able to produce broad range of solutions and always ready to make active decisions. Teamwork and continually exchanging ideas are an essential part of every project.
        <br /><br />
        Feel free to take a look at my latest projects below.
        <span className="show-profile">
          {' '}
          <Link to="/profile/">Also check out my skills.</Link>
        </span>
      </p>
    </div>
  </div>
)

export default Introduction
