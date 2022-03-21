// import express
const express = require('express')
const port = process.env.PORT || 3000 // the port will be 3000 or whatever the port of the environment

// initiate the application with Express
const server = express()
server.listen(port, () => console.log(`APP RUNNING ON PORT ${port}`))
