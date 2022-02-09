import React from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import SEO from './SEO'
import NavBar from './Navbar'
import Footer from './Footer'
import '../styles/index.scss'

function App({ children }) {
  return (
    <>
      <SEO />
      <MuiThemeProvider>
        <div id="wrapper" className="wrapper">
          <NavBar />
          <div id="content">
            <div className="main-container">{children}</div>
            <Footer />
          </div>
        </div>
      </MuiThemeProvider>
    </>
  )
}

App.propTypes = {
  children: PropTypes.object,
}

export default App
