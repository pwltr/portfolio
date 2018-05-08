import React, { Component } from 'react'
import { ContactForm } from '../components/ContactForm'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submitted: null,
    }
  }

  render() {
    return (
      <div className="section section--contact">
        <div className="container">
          <div className="section-title-container">
            <h2 className="section-title">Contact</h2>
          </div>

          <div>
            <div className="form-container form-container--contact">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
