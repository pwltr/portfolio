import React from 'react'
import { useSpring, animated } from 'react-spring'

import Work from '../containers/work'
import WorkDescription from '../components/workDescription'

export default () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-work">
        <WorkDescription />
        <Work />
      </div>
    </animated.div>
  )
}
