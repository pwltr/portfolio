import React from 'react'
import BlogItem from './BlogItem'

function BlogOverview({ posts }) {
  return (
    <div className="section section--blog">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Blog</h2>
        </div>

        <div>
          {posts.allMarkdownRemark.edges.map((post, index) => (
            <BlogItem key={index} to={post.node.frontmatter.path}>
              <h3>{post.node.frontmatter.title}</h3>
              <span className="blogItem__category">{post.node.frontmatter.category}</span>
              <div>{post.node.frontmatter.date}</div>
            </BlogItem>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogOverview
