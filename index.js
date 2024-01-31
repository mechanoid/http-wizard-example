// import * as url from 'url';
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import express from 'express'
// import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from "body-parser"
// import { resolve } from "path"

const app = express()
app.set('view engine', 'pug')
// app.use(helmet())
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/assets', express.static('assets'))

export default config => {
  console.log(config)

  app.get('/', (req, res) => {
    res.render('index')
  })

  app.post('/step1', (req, res) => {
    const { date } = req.body
    res.render('step1', { date })
  })

  app.post('/', (req, res) => {
    const { date, begin, end } = req.body
    res.render('created', { date, begin, end })
  })

  return app
}
