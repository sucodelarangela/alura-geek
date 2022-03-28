export function validate(input) {
  const inputType = input.dataset.type

  if (input.validity.valid) {
    input.classList.remove('error')
    input.nextElementSibling.innerHTML = ''
  } else {
    input.classList.add('error')
    input.nextElementSibling.innerHTML = showErrorMsg(inputType, input)
  }
}

export function checkLength(input) {
  if (input.value.length < input.maxLength) {
    input.classList.remove('error')
    input.nextElementSibling.innerHTML = ''
  } else {
    input.classList.add('error')
    input.nextElementSibling.innerHTML = 'O limite de caracteres foi alcançado.'
  }
}

const errorTypes = ['valueMissing', 'typeMismatch', 'patternMismatch']

const errorMsgs = {
  email: {
    valueMissing: 'O campo não pode estar vazio.',
    typeMismatch: 'O email digitado não é válido.'
  },
  password: {
    valueMissing: 'O campo não pode estar vazio.',
    patternMismatch:
      'A senha deve conter entre 6 e 12 caracteres e deve incluir, pelo menos, uma letra maiúscula, um número e não deve conter símbolos.'
  },
  contact: {
    valueMissing: ''
  }
}

function showErrorMsg(inputType, input) {
  let message = ''
  errorTypes.forEach(error => {
    if (input.validity[error]) {
      message = errorMsgs[inputType][error]
    }
  })
  return message
}
