import React from 'react'
import { useSpring, animated } from 'react-spring'

import Contact from '../containers/contact'

export default () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-contact">
        <Contact />
      </div>
    </animated.div>
  )
}
