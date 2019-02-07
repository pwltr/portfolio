import React from 'react'
import Blog from '../containers/blog'

export default ({ data }) => (
  <div className="page-blog">
    <Blog posts={data} />
  </div>
)

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
