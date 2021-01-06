import React from 'react'
import Link from 'gatsby-link'

const ProfileDescription = () => (
  <div className="section section--profileDescription">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">About me</h2>
      </div>

      <div className="section-text">
        <p>
          My name is Philipp Walter and I'm a professional web developer from Vienna.
          <br />
          I'm specialized in frontend development but have also been working on the server side for several years now. I like solving
          complex problems while working with people who are experts in their field.
          <br />
          <br />
          In the past I have been freelancing and have also done agency work which has introduced me to many different
          web development solutions (some of which should not be repeated). I try to keep the big picture in mind while
          also being able to deep-dive into seemingly miniscule problems.
        </p>

        <div className="profile-callout">
          <Link to="/resume/" className="profile-co__btn">
            Download my resume
          </Link>
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
