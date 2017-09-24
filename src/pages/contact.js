import React, { Component } from 'react'
import { ContactForm } from '../components/ContactForm'
import { trim, $c } from '../utils'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submitted: null,
    }
  }

  render() {
    let submitted

    return (
      <div className="section section--contact">
        <div className="section-title-container">
          <h1 className="section-title">Contact</h1>
        </div>
        <div>
          <div className="">
            <ContactForm />
          </div>
          {submitted}
        </div>
      </div>
    )
  }
}

export default Contact
