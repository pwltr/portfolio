import React from 'react'
import { withPrefix } from 'gatsby'

const ProfileDescription = () => (
  <div className="section section--profileDescription">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">
          What I do
        </h2>
      </div>

      <p className="section-text">
        I'm a Fullstack JavaScript Developer with a passion for development and learning new technologies. I am able to produce broad range of solutions and always ready to make active decisions. Teamwork and continually exchanging ideas are an essential part of every project.
      </p>

      <div className="profile-callout">
        <div className="profile-co__text">Take a look at my skills below</div>
        <div className="profile-co__delimiter">or maybe</div>
        <a className="profile-co__btn" href={withPrefix('/cv-philippwalter.pdf')}>Download my resume</a>
      </div>
    </div>
  </div>
)

export default ProfileDescription
