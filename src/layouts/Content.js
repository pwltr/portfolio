import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'

class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      test: 'test'
    }
  }

  render() {
    return (
      <div id="wrapper" className="wrapper">
        <NavBar />
        <div id="content">
          <div className="main-container">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Content
