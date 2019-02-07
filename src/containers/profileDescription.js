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
      Fullstack JavaScript Developer mit Leidenschaft für die Entwicklung und dem Erlernen von Technologien. Ich bin in der Lage ein breites Spektrum an Lösungen umzusetzen und bereit eigenverantwortlich und aktiv zu handeln. Teamarbeit und der gemeinsame Austausch von Ideen sind für mich bei jedem Projekt Vorraussetzung.
        <br /><br />
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
