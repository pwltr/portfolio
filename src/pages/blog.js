import React from 'react'
import { useSpring, animated } from 'react-spring'

import Blog from '../containers/blog'

export default ({ data }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-blog">
        <Blog posts={data} />
      </div>
    </animated.div>
  )
}

export const postsQuery = graphql`
  query BlogIndex {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
