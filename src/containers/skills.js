import React from 'react'

const Skills = () => (
  <div className="section section--skills">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">
          Skills
        </h2>
      </div>

      <div className="skills__grid">
        <div className="skills__gridItem">
          <div className="name">
            <h3>Frontend</h3>
          </div>
          <ul className="keywords">
            <li>JavaScript ES6+</li>
            <li>TypeScript</li>
            <li>React &amp; React Native</li>
            <li>GraphQL</li>
            <li>Webpack</li>
            <li>SASS</li>
          </ul>
        </div>
        <div className="skills__gridItem">
          <div className="name">
            <h3>Backend</h3>
          </div>
          <ul className="keywords">
            <li>Node.js (Next.js, Express.js)</li>
            <li>PostgreSQL</li>
            <li>TypeORM</li>
            <li>PHP (Laravel)</li>
            <li>Docker</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="skills__gridItem">
          <div className="name">
            <h3>Stacks</h3>
          </div>
          <ul className="keywords">
            <li>Next.js / GraphQL / TypeORM / PostgreSQL</li>
            <li>JAM Stack für Blogs u. Landingpages</li>
          </ul>
        </div>
        <div className="skills__gridItem">
          <div className="name">
            <h3>Design</h3>
          </div>
          <ul className="keywords">
            <li>Adobe Illustrator</li>
            <li>Sketch</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Skills
