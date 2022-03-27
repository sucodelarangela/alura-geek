// import express
const express = require('express')

// saving all route functionalities that Express has
const route = express.Router()

// defining get routes
route.get('/', (req, res) => res.render('index'))
route.get('/produto', (req, res) => res.render('product'))
route.get('/login', (req, res) => res.render('login'))
route.get('/todos-os-produtos', (req, res) => res.render('all-products'))
route.get('/admin', (req, res) => res.render('admin'))

// defining post routes
// Example: route.post('/todos-os-produtos/:code/:action')
// It also requires a password but it will not be posted on the url

// exporting the routes
module.exports = route
