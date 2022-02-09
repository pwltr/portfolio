import React from 'react'
import { useSpring, animated } from 'react-spring'

import Contact from '../components/contact'

function ContactPage() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-contact">
        <Contact />
      </div>
    </animated.div>
  )
}

export default ContactPage
