import React from 'react'

function Skills() {
  return (
    <div className="section section--skills">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills__grid">
          <div className="skills__gridItem">
            <div className="name">
              <h3>Soft Skills</h3>
            </div>
            <ul className="keywords">
              <li>Mentored Junior Developers and taught best practices</li>
              <li>Advised customers in technical meetings and online communications</li>
              <li>Wrote documentation to ease developer onboarding</li>
            </ul>
          </div>
          <div className="skills__gridItem">
            <div className="name">
              <h3>Hard Skills</h3>
            </div>
            <ul className="keywords">
              <li>Helped design Frontend architecture to improve project maintainability</li>
              <li>
                Delivered clean, high-quality, maintainable and reusable frontend code running customer facing
                applications using custom written backend
              </li>
              <li>Worked closely with designers, backend developers and testers</li>
              <li>Took ownership of features from design to implementation and testing to deployment</li>
              <li>Continually evaluated emerging technologies and shared them with the team</li>
              <li>Optimized internal documentation and processes</li>
              <li>Introduced infrastructure and organizational tools to the team</li>
              <li>Ensured the technical feasibility of UI/UX designs</li>
              <li>Followed an agile development process with short release cycles and highly frequent deployments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
