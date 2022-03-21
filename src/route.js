// import express
const express = require('express')

// saving all route functionalities that Express has
const route = express.Router()

//  defining the routes
route.get('/', (req, res) => res.render('index'))

// exporting the routes
module.exports = route
