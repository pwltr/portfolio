import React from 'react'
import { useSpring, animated } from 'react-spring'

import Skills from '../containers/skills'
import Stack from '../containers/stack'
import ProfileDescription from '../components/profileDescription'

export default () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-profile">
        <ProfileDescription />
        <Stack />
        <Skills />
      </div>
    </animated.div>
  ) 
}
