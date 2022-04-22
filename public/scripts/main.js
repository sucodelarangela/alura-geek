import Modal from './modal.js'
import ProductId from './product-id.js'

const modal = Modal()
const productId = ProductId()

const deleteBtn = document.querySelectorAll('.icon-delete')
const prodLink = document.querySelectorAll('.products__card--view')
const addProduct = document.querySelector('.add')
const searchBtn = document.querySelectorAll('.header__search')

// Open search bar on mobile
searchBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.header__input').classList.toggle('show')
    document.querySelector('.header__button').classList.toggle('show')
    document.querySelector('.header__logo').classList.toggle('show')
    document.querySelector('.icon-search').classList.toggle('show')
    document.querySelector('.icon-plus').classList.toggle('show')
  })
})

// Open modal and set route to form action when delete button is clicked
deleteBtn.forEach(btn => {
  btn.addEventListener('click', event => handleClick(event, 'delete'))
})

prodLink.forEach(link => {
  const itemCode = link.dataset.id
  link.setAttribute('href', `/produto&id=${itemCode}`)
})

function handleClick(event, action) {
  event.preventDefault()
  const modalForm = document.querySelector('.modal form')
  // get data-id value in DOM for each target of click event
  const itemCode = event.target.dataset.id

  if (action == 'delete') {
    // Set URL route to modal form action attribute
    modalForm.setAttribute('action', `/todos-os-produtos/${itemCode}/${action}`)
    modal.openModal()
  }
}

// Set new product id when creating a new product
addProduct.addEventListener('click', event => {
  productId.setId()
})
