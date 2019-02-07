import React from 'react'
import Layout from "../components/layout"
import Blog from '../containers/blog'

export default ({ data }) => (
  <Layout>
    <div className="page-blog">
      <Blog posts={data} />
    </div>
  </Layout>
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
