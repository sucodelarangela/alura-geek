export function validate(input) {
  if (input.validity.valid) {
    input.classList.remove('error')
  } else {
    input.classList.add('error')
  }

  if (input.value.length < input.maxLength) {
    input.classList.remove('error')
  } else {
    input.classList.add('error')
  }
}
