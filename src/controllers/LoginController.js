// import database
const Database = require('../db/config.js')

module.exports = {
  async enter(req, res) {
    const db = await Database()
    const email = req.body.email
    const password = req.body.password

    db.get(`SELECT * FROM admin WHERE userLogin = "${email}"`).then(user => {
      if (user.password == password) {
        res.redirect('/todos-os-produtos')
      } else {
        console.log('error')
      }
    })
  }
}
