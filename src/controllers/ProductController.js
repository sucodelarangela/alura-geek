module.exports = {
  index(req, res) {
    const itemCode = req.params.code
    const password = req.body.password

    console.log(itemCode, password)
  }
}
