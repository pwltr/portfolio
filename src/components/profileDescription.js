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

      <div className="section-text">
        <p>
          My name is Philipp Walter and I'm a professional web developer since 2015.
          <br />
          I'm specialized in frontend development but also quite familiar with server side technologies.
          I like solving complex problems while working with people who are experts in their field.
          <br /><br />
          In the past I have been freelancing and have also done agency work which has introduced me to many different web development solutions (some of which should not be repeated).
          I try to keep the big picture in mind while also being able to deep-dive into seemingly miniscule problems.
        </p>

        <div className="profile-callout">
          {/* <div className="profile-co__text">You can</div> */}
          {/* <div className="profile-co__delimiter">or maybe</div> */}
          <a className="profile-co__btn" href={withPrefix('/cv-philippwalter-de.pdf')} target="_blank" rel="noopener">
            Download my resume
          </a>
        </div>

        <p>
          I learn something new every day and that has led to my toolbox getting ever larger.
          <br />
          Below is a list of the technologies I currently love to use.
        </p>
      </div>
    </div>
  </div>
)

export default ProfileDescription
