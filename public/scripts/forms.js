import {validate, checkLength} from './validation.js'

const loginInputs = document.querySelectorAll('[data-type]')

loginInputs.forEach(input => {
  input.addEventListener('blur', event => {
    validate(event.target)
  })
})

const contactInputs = document.querySelectorAll('[data-type="contact"]')

contactInputs.forEach(input => {
  input.addEventListener('keyup', event => {
    checkLength(event.target)
  })
})

contactInputs.forEach(input => {
  input.addEventListener('blur', () => {
    input.classList.remove('error')
  })
})
