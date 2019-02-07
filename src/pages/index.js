import React from "react"
import Layout from "../components/layout"
import Introduction from '../containers/introduction'
import Work from '../containers/work'
import Contact from '../containers/contact'

export default () => (
  <Layout>
    <div className="page-home">
      <Introduction />
      <Work />
      <Contact />
    </div>
  </Layout>
)