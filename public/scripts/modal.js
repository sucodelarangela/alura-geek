export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelBtn = document.querySelector('.button.cancel')

  // Close modal
  cancelBtn.addEventListener('click', closeModal)

  function openModal() {
    modalWrapper.classList.add('active')
  }

  function closeModal() {
    modalWrapper.classList.remove('active')
  }

  return {openModal, closeModal}
}
