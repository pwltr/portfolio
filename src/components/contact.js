import React from 'react'
import { ContactForm } from '../components/ContactForm'

const Contact = () => (
  <div className="section section--contact">
    <div className="container">
      <div className="section-title-container">
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="form-container form-container--contact">
        <ContactForm />
      </div>
    </div>
  </div>
)

export default Contact
