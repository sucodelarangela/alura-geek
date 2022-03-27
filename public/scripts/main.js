import Modal from './modal.js'
const modal = Modal()

const deleteBtn = document.querySelectorAll('.icon-delete')

deleteBtn.forEach(btn => {
  btn.addEventListener('click', event => {
    modal.openModal()
  })
})
