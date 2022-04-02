// import database
const Database = require('../db/config.js')

module.exports = {
  index(req, res) {
    const itemCode = req.params.code // gets parameter from form action route variable
    const password = req.body.password // gets password typed on password input on modal

    console.log(itemCode, password) // show data on console for verifying if everything is working
  },

  enter(req, res) {},

  async create(req, res) {
    const db = await Database()

    let productId = 0
    let isId = true

    while (isId) {
      // While the id number is equal to existing id in database, generates a new random number to the id
      for (var i = 0; i < 7; i++) {
        i == 0
          ? (productId = Math.floor(Math.random() * 10).toString())
          : (productId += Math.floor(Math.random() * 10).toString())
      }

      // Verify if id number exists by selecting id in database
      const productsIdList = await db.all(`SELECT id FROM products`)
      isId = productsIdList.some(
        productIdNumber => productIdNumber === productId
      ) // if values are equal, returns true and generate a new number

      // If id number is different from database (return false)
      if (!isId) {
        // Insert new id into database
        await db.run(/* Insert function */)
      }
    }

    await db.close()

    // res.redirect()
  }
}
