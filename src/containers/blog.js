import React, { Component } from 'react'
import Link from 'gatsby-link'

const Blog = ({ posts }) => (
  <div className="section section--blog">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">Blog</h2>
      </div>

      <div>
        {posts.allMarkdownRemark.edges.map((post, index) => (
          <dd key={index}>
            <Link to={`${post.node.frontmatter.path}`}>
              {post.node.frontmatter.title}
            </Link>
          </dd>
        ))}
      </div>
    </div>
  </div>
)

export default Blog
