export default function ProductId() {
  const addProduct = document.querySelector('.add')

  let productId = 0

  for (var i = 0; i < 7; i++) {
    i == 0
      ? (productId = Math.floor(Math.random() * 10).toString())
      : (productId += Math.floor(Math.random() * 10).toString())
  }

  function setId() {
    addProduct.setAttribute('href', `/admin/${productId}`)
  }

  return {setId}
}
