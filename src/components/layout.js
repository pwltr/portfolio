import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Content from '../layouts/Content'
import '../styles/index.sass'

const App = ({ children }) => (
  <React.Fragment>
    <Helmet
      title="Philipp Walter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'developer, vienna, javascript, react, nodejs, fullstack, hire, contact' },
      ]}
    />
    <MuiThemeProvider>
      <Content>{children}</Content>
    </MuiThemeProvider>
  </React.Fragment>
)

App.propTypes = {
  children: PropTypes.object,
}

export default App
