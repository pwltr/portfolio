const http = require('http')
const express = require('express')
const nodemailer = require('nodemailer')
const parser = require('body-parser')
const util = require('util')
const validator = require('express-validator')
const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:8000'
}

const app = express()
app.set('port', process.env.PORT || 8080)
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use(validator())

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, // secure:true for port 465, secure:false for port 587
  secure: true,
  auth: {
    user: 'philipp.walter2@gmail.com',
    pass: 'jmwpruamjhpptkkl',
  },
})

app.options('/email/send', cors())
app.post('/email/send', cors(), (req, res) => {
  const body = req.body

  req.checkBody('name', 'Please enter name').notEmpty()
  req.checkBody('email', 'Please enter email address').notEmpty()
  req.checkBody('email', 'Please enter valid email address').isEmail()
  req.checkBody('message', 'Please enter messaage').notEmpty()

  req.getValidationResult().then((result) => {
    if (!result.isEmpty()) {
      const arrResponse = { status: 'error', data: util.inspect(result.array()) }
      res.status(200).send(JSON.stringify(arrResponse))
    } else {
      const mailOptions = {
        from: `${body.name} - ${body.email}`,
        to: 'philipp.walter2@gmail.com',
        subject: 'Contact - Personal Website',
        html: body.message,
      }

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error)
        if (info) console.log(info)
        const arrResponse = { status: 'success', data: 'message sent' }
        res.status(200).send(JSON.stringify(arrResponse))
      })
    }
  })
})

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`)
})
