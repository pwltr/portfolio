import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Content from './Content'

import '../styles/index.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Philipp Walter - Fullstack Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <MuiThemeProvider>
      <Content>
        {children()}
      </Content>
    </MuiThemeProvider>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
