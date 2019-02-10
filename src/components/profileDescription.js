import React from 'react'
import { withPrefix } from 'gatsby'

const ProfileDescription = () => (
  <div className="section section--profileDescription">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">
          About me
        </h2>
      </div>

      <p className="section-text">
        My name is Philipp Walter and I'm a professional web developer since 2015.
      </p>

      <div className="profile-callout">
        {/* <div className="profile-co__text">You can also</div> */}
        {/* <div className="profile-co__delimiter">or maybe</div> */}
        <a className="profile-co__btn" href={withPrefix('/cv-philippwalter.pdf')} target="_blank" rel="noopener">
          Download my resume
        </a>
      </div>

      <p className="section-text">
        I learn something new every day which has led to my toolbox getting ever larger.
        <br />
        Below is a list of the tools I currently love to use.
      </p>
    </div>
  </div>
)

export default ProfileDescription
