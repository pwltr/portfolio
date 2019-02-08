import React from 'react'
import { useSpring, animated } from 'react-spring'

export default () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-404">
        <div className="section section--blog">
          <div className="container">
            <div className="section-title-container">
              <h2 className="section-title">NOT FOUND</h2>
            </div>

            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </div>
      </div>
    </animated.div>
  )
}
