module.exports = {
  index(req, res) {
    const itemCode = req.params.code // gets parameter from form action route variable
    const password = req.body.password // gets password typed on password input on modal

    console.log(itemCode, password) // show data on console for verifying if everything is working
  }
}
