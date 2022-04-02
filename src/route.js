// import express
const express = require('express')
// import ProductController
const ProductController = require('./controllers/ProductController.js')
const LoginController = require('./controllers/LoginController')

// saving all route functionalities that Express has
const route = express.Router()

// defining get routes
route.get('/', (req, res) => res.render('index', {page: 'main', title: 'Home'}))
route.get('/produto/:code', (req, res) =>
  res.render('index', {page: 'product', title: 'Produto'})
)
route.get('/login', (req, res) =>
  res.render('index', {page: 'login', title: 'Login'})
)
route.get('/todos-os-produtos', (req, res) =>
  res.render('index', {page: 'all-products', title: 'Produtos'})
)
route.get('/admin', (req, res) =>
  res.render('index', {page: 'admin', title: 'Administrador'})
)

// defining post routes
// Implicitly, the .index is receiving (req, res) inside ProductController.js
route.post('/todos-os-produtos/:code', ProductController.index) // to delete/edit buttons
// It also requires a password but it will not be posted on the url
route.post('/produto/:code', ProductController.index) // to open product page
route.post('/todos-os-produtos', LoginController.enter) // to validate login

// exporting the routes
module.exports = route
