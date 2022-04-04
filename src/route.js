// import express
const express = require('express')
// import ProductController
const ProductController = require('./controllers/ProductController.js')
const LoginController = require('./controllers/LoginController')

// saving all route functionalities that Express has
const route = express.Router()

// defining get routes
route.get('/', (req, res) =>
  res.render('index', {
    page: 'main',
    title: 'Home',
    button:
      '<a class="header__button button__void button" href="login">Login</a>'
  })
)
route.get('/produto&id:code', (req, res) =>
  res.render('index', {
    page: 'product',
    title: 'Produto',
    button:
      '<a class="header__button button__void button" href="/login">Login</a>'
  })
)
route.get('/login', (req, res) =>
  res.render('index', {
    page: 'login',
    title: 'Login',
    button: '<div class="header__button button__void button">Login</div>'
  })
)
route.get('/todos-os-produtos', (req, res) =>
  res.render('index', {
    page: 'all-products',
    title: 'Produtos',
    button: '<div class="header__button button__void button">Admin</div>'
  })
)
route.get('/admin/:code', (req, res) =>
  res.render('index', {
    page: 'admin',
    title: 'Administrador',
    button: '<div class="header__button button__void button">Admin</div>'
  })
)
route.get('/login-error', (req, res) =>
  res.render('index', {
    page: 'login-error',
    title: 'Erro de Acesso',
    button:
      '<a class="header__button button__void button" href="login">Login</a>'
  })
)

// defining post routes
// Implicitly, the .index is receiving (req, res) inside ProductController.js
route.post('/todos-os-produtos/:code', ProductController.index) // to delete/edit buttons
// It also requires a password but it will not be posted on the url
route.post('/produto/:code', ProductController.index) // to open product page
route.post('/todos-os-produtos', LoginController.enter) // to validate login
route.post('/admin/:code', ProductController.create) // to create new product id

// exporting the routes
module.exports = route
