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
        Feel free to take a look at my latest projects below.
        <span className="show-profile">
          {' '}
          <Link to="/profile/">Check out my skills.</Link>
        </span>
      </p>
    </div>
  </div>
)

export default Introduction
