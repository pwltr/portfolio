import React from 'react'
import { useSpring, animated } from 'react-spring'

import Work from '../components/work'
import WorkDescription from '../components/workDescription'

function WorkPage() {
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

export default WorkPage
