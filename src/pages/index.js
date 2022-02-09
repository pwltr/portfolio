import React from 'react'
import { useSpring, animated } from 'react-spring'

import Introduction from '../components/introduction'

function HomePage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-home">
        <Introduction />
        {/* <Work /> */}
        {/* <Contact /> */}
      </div>
    </animated.div>
  )
}

export default HomePage
