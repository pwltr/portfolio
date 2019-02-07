import React from 'react'
import Layout from "../components/layout"
import ProfileDescription from '../containers/profileDescription'
import Skills from '../containers/skills'

export default () => (
  <Layout>
    <div className="page-profile">
      <ProfileDescription />
      <Skills />
    </div>
  </Layout>
)
