import React from 'react'
import BlogItem from '../components/BlogItem'

const BlogOverview = ({ posts }) => (
  <div className="section section--blog">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">Blog</h2>
      </div>

      <div>
        {posts.allMarkdownRemark.edges.map((post, index) => (
          <BlogItem
            key={index}
            to={post.node.frontmatter.path}
          >
            <h3>{post.node.frontmatter.title}</h3>
            {/* <p>test</p> */}
            <div>{post.node.frontmatter.date}</div>
          </BlogItem>
        ))}
      </div>
    </div>
  </div>
)

export default BlogOverview
