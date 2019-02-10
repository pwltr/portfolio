import React from 'react'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const WorkItem = ({ imageURL }) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <animated.div
      className="wd-item"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {/* <a className="wd-item-link" href="https://www.addex.org">
          <img className="wd-item-img" src="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=712fa3e4441f895bb401dfa66e6528c3&auto=format&fit=crop&w=420&h=420&q=100" alt="" />
        </a> */}
      <img className="wd-item-img" src={imageURL} alt="" />
    </animated.div>
  )
}

export default WorkItem
