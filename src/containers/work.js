import React from 'react'
import Link from 'gatsby-link'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Work = () => (
  <div className="section section--work">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">
          Work
        </h2>
      </div>

      <div className="work-display">
        <i>Project listing will follow soon</i>
        {/* <div className="wd-item">
          <img className="wd-item-img" src="https://source.unsplash.com/FaPxZ88yZrw/420x420" alt="" />
        </div>

        <div className="wd-item">
          <a className="wd-item-link" href="https://www.addex.org">
            <img className="wd-item-img" src="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=712fa3e4441f895bb401dfa66e6528c3&auto=format&fit=crop&w=420&h=420&q=100" alt="" />
          </a>
        </div>

        <div className="wd-item">
          <img className="wd-item-img" src="https://source.unsplash.com/xdLXPic3Wfk/420x420" alt="" />
        </div> */}
      </div>

      <Link to="/work/" className="show-more">
        <span className="icon-circle">
          <div className="icon icon-show-more">
            <MdKeyboardArrowRight />
          </div>
        </span>
        View all projects
      </Link>
    </div>
  </div>
)

export default Work
