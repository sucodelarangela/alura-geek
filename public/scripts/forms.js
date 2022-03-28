import {validate} from './validation.js'

const loginInputs = document.querySelectorAll('[data-type="login"')

loginInputs.forEach(input => {
  input.addEventListener('blur', event => {
    validate(event.target)
  })
})

const contactInputs = document.querySelectorAll('[data-type="contact"')

contactInputs.forEach(input => {
  input.addEventListener('keyup', event => {
    validate(event.target)
  })
})
