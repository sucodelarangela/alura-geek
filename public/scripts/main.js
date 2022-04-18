import Modal from './modal.js'
import ProductId from './product-id.js'

const modal = Modal()
const productId = ProductId()

const deleteBtn = document.querySelectorAll('.icon-delete')
const confirmBtn = document.querySelector('.button.delete')
const prodLink = document.querySelectorAll('.products__card--view')
const addProduct = document.querySelector('.add')

// Open modal and set route to form action when delete button is clicked
deleteBtn.forEach(btn => {
  btn.addEventListener('click', handleClick)
})

prodLink.forEach(link => {
  const itemCode = link.dataset.id
  link.setAttribute('href', `/produto&id=${itemCode}`)
})

function handleClick(event) {
  const modalForm = document.querySelector('.modal form')
  // get data-id value in DOM for each target of click event
  const itemCode = event.target.dataset.id

  // Set URL route to modal form action attribute
  modalForm.setAttribute('action', `/todos-os-produtos/${itemCode}`)

  modal.openModal()
}

// Set new product id when creating a new product
addProduct.addEventListener('click', event => {
  productId.setId()
})
