import React from 'react'

const Stack = () => (
  <div className="section section--stack">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">
          Stack
        </h2>
      </div>

      <div className="stack__architecture">
        <div className="name">
          <h3>Architecture</h3>
        </div>
        <p>Depending on project requirements I like to use one of 3 different setups:</p>
        <ul>
          <li>GatsbyJS for static sites, where SEO is important. These could be a Blog or Landingpage, or this portfolio site!</li>
          <li>Next.js for large sites where the data changes a lot. Since Next.js uses Server Side Rendering SEO will not be a problem.</li>
          <li>Create-React-App (CSR) when I just need to consume an API and SEO is not a factor, like a Dashboard.</li>
        </ul>
      </div>

      <div className="stack__grid">
        <div className="stack__gridItem">
          <div className="name">
            <h3>Frontend</h3>
          </div>
          <ul className="keywords">
            <li>JavaScript ES6+</li>
            <li>TypeScript</li>
            <li>React &amp; React Native</li>
            <li>GraphQL</li>
            <li>Webpack</li>
            <li>styled-components</li>
            <li>RxJS</li>
          </ul>
        </div>
        <div className="stack__gridItem">
          <div className="name">
            <h3>Backend</h3>
          </div>
          <ul className="keywords">
            <li>Next.js</li>
            <li>PostgreSQL</li>
            <li>TypeORM</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className="stack__gridItem">
          <div className="name">
            <h3>Tools</h3>
          </div>
          <ul className="keywords">
            <li>Docker</li>
            <li>TravisCI</li>
            <li>Git</li>
            <li>Linux</li>
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
