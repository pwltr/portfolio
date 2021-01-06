import React from 'react'

const Stack = () => (
  <div className="section section--stack">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">
          Stack
        </h2>
      </div>

      <div className="stack__grid">
        <div className="stack__gridItem">
          <div className="name">
            <h3>Frontend</h3>
          </div>
          <ul className="keywords">
            <li>TypeScript</li>
            <li>React &amp; React Native</li>
            <li>GraphQL</li>
            <li>CSS-in-JS</li>
            <li>Webpack</li>
          </ul>
        </div>
        <div className="stack__gridItem">
          <div className="name">
            <h3>Backend</h3>
          </div>
          <ul className="keywords">
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>TypeORM</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="stack__gridItem">
          <div className="name">
            <h3>Tools</h3>
          </div>
          <ul className="keywords">
            <li>Docker</li>
            <li>TravisCI</li>
            <li>Manjaro Linux / MacOS</li>
          </ul>
        </div>
        <div className="stack__gridItem">
          <div className="name">
            <h3>Design</h3>
          </div>
          <ul className="keywords">
            <li>Adobe Illustrator</li>
            <li>Sketch</li>
            <li>Invision</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Stack
