import Modal from './modal.js'
const modal = Modal()

const deleteBtn = document.querySelectorAll('.icon-delete')
const confirmBtn = document.querySelector('.button.delete')
const prodLink = document.querySelectorAll('.products__card--view')

// Open modal and set route to form action when delete button is clicked
deleteBtn.forEach(btn => {
  btn.addEventListener('click', handleClick)
})

prodLink.forEach(link => {
  const itemCode = link.dataset.id
  link.setAttribute('href', `/produto/${itemCode}`)
})

function handleClick(event) {
  const modalForm = document.querySelector('.modal form')
  // get data-id value in DOM for each target of click event
  const itemCode = event.target.dataset.id

  // Set URL route to modal form action attribute
  modalForm.setAttribute('action', `/todos-os-produtos/${itemCode}`)

  modal.openModal()
}
