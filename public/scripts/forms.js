import {validate, checkLength} from './validation.js'

const loginInputs = document.querySelectorAll('[data-type]')

loginInputs.forEach(input => {
  // check if input is price type and, if so, import Simple Mask Money according to its documentation
  if (input.dataset.type === 'price') {
    SimpleMaskMoney.setMask(input, {
      // afterFormat(e) {
      //   console.log('afterFormat', e)
      // },
      // allowNegative: false,
      // beforeFormat(e) {
      //   console.log('beforeFormat', e)
      // },
      // negativeSignAfter: false,
      prefix: 'R$ ',
      // suffix: '',
      fixed: true,
      fractionDigits: 2,
      decimalSeparator: ',',
      thousandsSeparator: '.',
      cursor: 'move'
    })
  }

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
