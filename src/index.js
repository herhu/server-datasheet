import http from 'http'
import path from 'path'
import express from 'express'
import initialize from './initialize'
import api from './api'
import dotenv from 'dotenv'

dotenv.config()

const hbs = require('express-handlebars')

const app = express()
app.server = http.createServer(app)
app.engine('.hbs', hbs({
  extname: '.hbs',
  defaultLayout: 'default'
}))
app.set('view engine', '.hbs')

// enable cross origin requests explicitly in development
if (process.env.NODE_ENV === 'development') {
  const cors = require('cors')
  console.log('Enabling CORS in development...')
  app.use(cors())
}

const config = process.env

initialize(controller => {
  app.use(
    '/v1',
    api({
      config,
      controller
    })
  )

  app.use(express.static(path.join(__dirname, 'public')))

  app.server.listen(process.env.PORT || 4040, () => {
    console.log('===========================================')
    console.log(`Server running on port ${app.server.address().port}`)
  })
})

export default app
