const express = require('express')
const app = express()

const router = require('./router')
const cors = require('cors')

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded())
  .use(router)
  .listen(3000, () => console.log('app listening in port 3000'))
