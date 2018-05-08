import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export default function Post({ data }) {
  const { markdownRemark: post } = data

  return (
    <div className="page-post">
      <div className="section section--blog">
        <div className="container">
          <div className="section-title-container">
            <h1 className="section-title">
              {post.frontmatter.title}
            </h1>
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
