const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const cors = require('cors')
const app = express()
const config = require('../nuxt.config.js')
const api = require('./routes/api')

// Import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(cors())
  app.use((req, res, next) => {
    res.append('Cache-Control', 'no-store')
    next()
  })
  // Give nuxt middleware to express
  app.use(express.json())
  app.use('/api', api)
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
