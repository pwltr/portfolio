import React from 'react'
import Link from 'gatsby-link'

const Introduction = () => (
  <div className="section section--introduction">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">
          Philipp Walter
        </h2>
      </div>

      <p className="section-text">
        Hi, I'm Phil! 👋
        <br />
        I'm a JavaScript Developer from Vienna and I love using the web and building on top of it.
        <br /><br />
        At the moment I am <b>looking for a full-time position in Vienna</b> so
        if you want to get in touch, write me an <a href="mailto:philippwalter@pm.me">email</a> or find me on <a href="https://twitter.com/@_backdot" target="_blank" rel="noopener">twitter</a>.
        <br /><br />
        {/* Feel free to take a look at <Link to="/work/">my projects</Link> or find out more <Link to="/profile/">about me.</Link> */}
        Feel free to take a look at my projects or find out more <Link to="/profile/">about me.</Link>
      </p>
    </div>
  </div>
)

export default Introduction
