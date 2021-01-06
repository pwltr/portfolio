import React from 'react'

const Architecture = () => (
  <div className="section section--architecture">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">
          Architecture
        </h2>
      </div>

      <p>Depending on project requirements I like to use one of 3 different setups:</p>
      <ul>
        <li>GatsbyJS for static sites, where SEO is important. These could be a Blog or Landingpage, or this portfolio site!</li>
        <li>Next.js for large sites where the data changes a lot. Since Next.js uses Server Side Rendering SEO will not be a problem.</li>
        <li>Create-React-App (CSR) when I just need to consume an API and SEO is not a factor, like a Dashboard.</li>
      </ul>
    </div>
  </div>
)

export default Architecture
