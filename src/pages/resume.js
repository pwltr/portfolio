import React from 'react'
import { useSpring, animated } from 'react-spring'

function ResumePage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-resume">
        <div className="section section--resume">
          <div className="container">
            <div className="section-title-container">
              <h2 className="section-title">View my resume</h2>
            </div>

            <p className="section-text">
              <div className="resume-download">
                <a
                  className="resume-download__btn"
                  href="https://pwltr.github.io/resume/public/cv-philippwalter-en.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  English Version
                </a>

                <a
                  className="resume-download__btn"
                  href="https://pwltr.github.io/resume/public/cv-philippwalter-de.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  German Version
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default ResumePage
