import React from 'react'
import { useSpring, animated } from 'react-spring'

import BlogOverview from '../containers/blogOverview'

export default ({ data }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-blog">
        <BlogOverview posts={data} />
      </div>
    </animated.div>
  )
}

export const postsQuery = graphql`
  query BlogIndex {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`
