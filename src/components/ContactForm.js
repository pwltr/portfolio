import React, { Component } from 'react'
import TextField from "material-ui/TextField"
import FloatingActionButton from "material-ui/FloatingActionButton"
import FaSend from 'react-icons/lib/fa/paper-plane'

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
      errors: {}
    }
  }

  validate() {
    const { name, email, message } = this.state
    const errors = {}

    if (name === '') {
      errors.name = 'name required'
    }

    if (email.indexOf('@') === -1) {
      errors.email = 'valid email required'
    }

    if (message === '') {
      errors.message = 'message required'
    }

    this.setState({ errors })

    if (Object.keys(errors).length === 0) {
      this.setState({ errors: {} })
      return true
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = () => {
    if (this.validate()) {
      this.sendFormData(this.state)

      this.setState({
        name: '',
        email: '',
        message: '',
        errors: {}
      })
    }
  }

  sendFormData(data) {
    fetch('http://localhost:8080/email/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data, null, '')
    })
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson)
      if (resJson.success) {
        this.setState({ submitted: true })
      }
      else this.setState({ submitted: false })
    })
    .catch((error) => console.error(error))
  }

  render() {
    const { name, email, message, errors } = this.state

    return (
      <form className="form form--contact">
        <TextField
          type="text"
          className="form-field"
          name="name"
          value={name}
          hintText="Your Name"
          floatingLabelText="Your Name"
          style={inputStyle}
          errorText={errors.name}
          onChange={this.onChange}
        />
        <TextField
          type="text"
          className="form-field"
          name="email"
          value={email}
          hintText="Your Email"
          floatingLabelText="Your Email"
          style={inputStyle}
          errorText={errors.email}
          onChange={this.onChange}
        />
        <TextField
          type="textarea"
          className="form-field"
          name="message"
          value={message}
          hintText="Your Message"
          floatingLabelText="Your Message"
          style={inputStyle}
          errorText={errors.message}
          onChange={this.onChange}
        />
        <FloatingActionButton
          className="btn form-btn"
          onClick={this.onSubmit}
          backgroundColor="#141417"
        >
          <FaSend className="form-btn-icn" />
        </FloatingActionButton>
      </form>
    )
  }
}

const inputStyle = {
  "display": "block",
}

export { ContactForm }
