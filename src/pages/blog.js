import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>All Posts:</h1>
    {data.allMarkdownRemark.edges.map((post, index) => (
      <div key={index}>
        <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
      </div>
    ))}
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
