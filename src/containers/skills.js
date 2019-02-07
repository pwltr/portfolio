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
        <div class="skills__gridItem">
          <div class="name">
            <h4>Frontend</h4>
          </div>
          <ul class="keywords">
            <li>JavaScript ES6+</li>
            <li>TypeScript</li>
            <li>React &amp; React Native</li>
            <li>GraphQL</li>
            <li>Webpack</li>
            <li>SASS</li>
          </ul>
        </div>
        <div class="skills__gridItem">
          <div class="name">
            <h4>Backend</h4>
          </div>
          <ul class="keywords">
            <li>Node.js (Next.js, Express.js)</li>
            <li>PostgreSQL</li>
            <li>TypeORM</li>
            <li>PHP (Laravel)</li>
            <li>Docker</li>
            <li>Git</li>
          </ul>
        </div>
        <div class="skills__gridItem">
          <div class="name">
            <h4>Stacks</h4>
          </div>
          <ul class="keywords">
            <li>Next.js / GraphQL / TypeORM / PostgreSQL</li>
            <li>JAM Stack für Blogs u. Landingpages</li>
          </ul>
        </div>
        <div class="skills__gridItem">
          <div class="name">
            <h4>Design</h4>
          </div>
          <ul class="keywords">
            <li>Adobe Illustrator</li>
            <li>Sketch</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Skills
