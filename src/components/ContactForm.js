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
      errors: {},
      submitted: false,
      responseText: ''
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
    .then((res) => {
      if (res.status === 'success') {
        this.setState({
          submitted: true,
          responseText: res.data
        })
      } else {
        this.setState({
          submitted: false,
          responseText: res.data
        })
      }
    })
    .catch((error) => console.error(error))
  }

  render() {
    const { name, email, message, errors, submitted, responseText } = this.state

    if (submitted) {
      return (
        <div className="form-status form-status--success">
          <span>{responseText}</span>
        </div>
      )
    } else {
      return (
        <div>
          {responseText.length > 0 &&
            <div className="form-status form-status--error">
              <span>{responseText}</span>
            </div>
          }
          <form className="form form--contact">
            <TextField
              className="form-field"
              name="name"
              value={name}
              hintText="Your Name"
              floatingLabelText="Your Name"
              style={styles.inputStyle}
              floatingLabelStyle={styles.floatingLabelStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
              errorText={errors.name}
              onChange={this.onChange}
            />
            <TextField
              className="form-field"
              name="email"
              value={email}
              hintText="Your Email"
              floatingLabelText="Your Email"
              style={styles.inputStyle}
              floatingLabelStyle={styles.floatingLabelStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
              errorText={errors.email}
              onChange={this.onChange}
            />
            <TextField
              multiLine
              className="form-field"
              name="message"
              value={message}
              hintText="Your Message"
              floatingLabelText="Your Message"
              style={styles.inputStyle}
              floatingLabelStyle={styles.floatingLabelStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
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
        </div>
      )
    }
  }
}

const styles = {
  inputStyle: {
    color: "#cfd7df",
    display: "block",
    width: "100%",
  },
  floatingLabelStyle: {
    color: "#cfd7df",
  },
  underlineStyle: {
    backgroundColor: "#cfd7df",
  }
}

export { ContactForm }
