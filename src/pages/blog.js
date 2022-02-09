import React from 'react'
import { useSpring, animated } from 'react-spring'
import { graphql } from 'gatsby'

import BlogOverview from '../components/blogOverview'

function BlogPage({ data }) {
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            title
            date
            category
          }
        }
      }
    }
  }
`

export default BlogPage
