import React from 'react'
import Link from 'gatsby-link'
import MdkeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right'

const Work = () => (
  <div className="section section--work">
    <div className="section-title-container">
      <h1 className="section-title">Work</h1>
    </div>

    <div className="work-display">
      <div className="wd-item">
        A
      </div>

      <div className="wd-item">
        B
      </div>
    </div>

    <span className="icon-show-more">
      <MdkeyboardArrowRight />
    </span>

    <Link
      to="/work/"
      className="show-more"
    >
      View All Work.
    </Link>
  </div>
)

export default Work
