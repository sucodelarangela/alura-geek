// import express
const express = require('express')
const port = process.env.PORT || 3000 // the port will be 3000 or whatever the port of the environment
const route = require('./route') // import the route configured in route.js

// initiate the application with Express
const server = express()
server.set('view engine', 'ejs') // indicates to Node what will be our view engine
server.use(express.static('public')) // allow express to use static content (styles, images, etc)
server.use(route) // indicates that Express must use the route file
server.listen(port, () => console.log(`APP RUNNING ON PORT ${port}`))
