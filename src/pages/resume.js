import React from 'react'
import { withPrefix } from 'gatsby'
import { useSpring, animated } from 'react-spring'

export default () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-resume">
        <div className="section section--resume">
          <div className="container">
            <div className="section-title-container">
              <h2 className="section-title">
                Download my resume
              </h2>
            </div>

            <p className="section-text">
              <div className="resume-download">
                <a className="resume-download__btn" href={withPrefix('/cv-philippwalter-en.pdf')} target="_blank" rel="noopener">
                  English Version
                </a>

                <a className="resume-download__btn" href={withPrefix('/cv-philippwalter-de.pdf')} target="_blank" rel="noopener">
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
