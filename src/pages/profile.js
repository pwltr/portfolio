import React from 'react'
import { useSpring, animated } from 'react-spring'

import Architecture from '../components/architecture'
// import Skills from '../components/skills'
import Stack from '../components/stack'
import ProfileDescription from '../components/profileDescription'

function ProfilePage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-profile">
        <ProfileDescription />
        <Stack />
        <Architecture />
        {/* <Skills /> */}
      </div>
    </animated.div>
  )
}

export default ProfilePage
