import React from 'react'
import Link from 'gatsby-link'
import MdkeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right'

const Work = () => (
  <div className="section section--work">
    <div className="container">
      <div className="section-title-container">
        <h1 className="section-title">Work</h1>
      </div>

      <div className="work-display">
        <div className="wd-item">
          <img className="wd-item-img" src="https://picsum.photos/g/200/300?image=0" alt=""/>
        </div>

        <div className="wd-item">
          <img className="wd-item-img" src="https://picsum.photos/g/200/300?image=0" alt=""/>
        </div>

        <div className="wd-item">
          <img className="wd-item-img" src="https://picsum.photos/g/200/300?image=0" alt=""/>
        </div>
      </div>

      <span className="icon-circle">
        <div className="icon icon-show-more">
          <MdkeyboardArrowRight />
        </div>
      </span>

      <Link
        to="/work/"
        className="show-more"
      >
        View All Work.
      </Link>
    </div>
  </div>
)

export default Work
