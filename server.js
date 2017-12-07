const http = require('http')
const express = require('express')
const nodemailer = require('nodemailer')
const parser = require('body-parser')
const util = require('util')
const validator = require('express-validator')
const cors = require('cors')
require('dotenv').config()

const corsOptions = {
  origin: 'http://localhost:8000',
}

const app = express()
app.set('port', process.env.PORT || 8080)
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use(validator())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  },
})

app.options('/email/send', cors(corsOptions))
app.post('/email/send', cors(corsOptions), (req, res) => {
  const body = req.body

  req.checkBody('email', 'Please enter valid email address').isEmail()

  req.getValidationResult().then((result) => {
    if (!result.isEmpty()) {
      const responseObj = { status: 'error', data: 'Please enter a valid email address.' }
      res.status(200).send(JSON.stringify(responseObj))
    } else {
      const mailOptions = {
        from: `"${body.name}" <${body.email}>`,
        to: process.env.EMAIL_RECEIVER,
        subject: `Kontakt - ${body.email}`,
        html: body.message,
      }

      const responseObj = { status: 'success', data: 'Message sent! I will get back to you soon.' }
      res.status(200).send(JSON.stringify(responseObj))

      // transporter.sendMail(mailOptions, (error, info) => {
      //   if (error) console.log(error)
      //   if (info) console.log(info)

      //   const responseObj = { status: 'success', data: 'message sent' }
      //   res.status(200).send(JSON.stringify(responseObj))
      // })
    }
  })
})

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`)
})
