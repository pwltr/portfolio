import React from 'react'
import { useSpring, animated } from 'react-spring'
import { graphql } from 'gatsby'

export default function Post({ data }) {
  const { markdownRemark: post } = data
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props}>
      <div className="page-post">
        <div className="section section--blog">
          <div className="container">
            <div className="post__titleContainer section-title-container">
              <h1 className="post__title section-title">{post.frontmatter.title}</h1>
            </div>

            <div className="post__categoryContainer">
              {/* Category: */}
              <span className="post__category">{post.frontmatter.category}</span>
            </div>

            <div className="post__content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        category
      }
    }
  }
`
