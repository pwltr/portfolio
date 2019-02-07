import React from 'react'
import Layout from "../components/layout"
import WorkDescription from '../containers/workDescription'
import Work from '../containers/work'

export default () => (
  <Layout>
    <div className="page-work">
      <WorkDescription />
      <Work />
    </div>
  </Layout>
)
