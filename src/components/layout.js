import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
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
      <div id="wrapper" className="wrapper">
        <NavBar />
        <div id="content">
          <div className="main-container">{children}</div>
          <Footer />
        </div>
      </div>
    </MuiThemeProvider>
  </React.Fragment>
)

App.propTypes = {
  children: PropTypes.object,
}

export default App
