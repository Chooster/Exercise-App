const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const morgan = require('morgan')
const User = require('./Models/user')

const app = express()

app.set('port', 9000)
app.use(morgan('dev'))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(session({
  key: 'user_sid',
  secret: 'somerandomstuffs',
  resave: false,
  saveUninitialized: false,
  cooke: {
    expires: 600000
  }
}))

app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCooke('user_sid')
  }
  next()
})

const sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect('/workout')
  } else {
    next()
  }
}
