//selecting all required elements
const dropArea = document.querySelector('.drag__area')
const dragText = dropArea.querySelector('.drag__area--text')
const input = document.querySelector('.product__image--input')
let file // global variable we'll use inside multiple functions

function showFile() {
  let fileType = file.type //getting selected file type
  let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'] //adding some valid image extensions in array
  if (validExtensions.includes(fileType)) {
    //if user selected file is an image file
    let fileReader = new FileReader() //creating new FileReader object
    fileReader.onload = () => {
      let fileURL = fileReader.result //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="imagem carregada">` //creating an img tag and passing user selected file source inside src attribute
      dropArea.style.padding = 0
      dropArea.innerHTML = imgTag //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file)
  } else {
    alert('O arquivo não possui um formato de imagem válido.')
    dropArea.classList.remove('active')
    dragText.textContent = 'Arraste para adicionar uma imagem para o produto'
  }
}

//If user Drag File Over DropArea
dropArea.addEventListener('dragover', event => {
  event.preventDefault() //preventing from default behaviour
  dropArea.classList.add('active')
  dragText.textContent = 'Solte para carregar o arquivo'
})

//If user leave dragged File from DropArea
dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('active')
  dragText.textContent = 'Arraste para adicionar uma imagem para o produto'
})

//If user drop File on DropArea
dropArea.addEventListener('drop', event => {
  event.preventDefault() //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0]
  showFile() //calling function
})

//If user loads file through input
input.addEventListener('change', () => {
  file = input.files[0]
  dropArea.classList.add('active')
  showFile()
})
