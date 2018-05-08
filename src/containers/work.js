import React from 'react'
import Link from 'gatsby-link'
import MdkeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right'

const Work = () => (
  <div className="section section--work">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">
          Work
        </h2>
      </div>

      <div className="work-display">
        <div className="wd-item">
          <img className="wd-item-img" src="https://picsum.photos/g/200/300?image=0" alt="" />
        </div>

        <div className="wd-item">
          <img className="wd-item-img" src="https://picsum.photos/g/200/300?image=0" alt="" />
        </div>

        <div className="wd-item">
          <img className="wd-item-img" src="https://picsum.photos/g/200/300?image=0" alt="" />
        </div>
      </div>

      <Link to="/work/" className="show-more">
        <span className="icon-circle">
          <div className="icon icon-show-more">
            <MdkeyboardArrowRight />
          </div>
        </span>
        View All Work.
      </Link>
    </div>
  </div>
)

export default Work
