import React from 'react'

import Blog from '../containers/blog'

const BlogPage = ({ data }) => (
  <div className="page-blog">
    <Blog posts={data} />
  </div>
)

export default BlogPage

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
