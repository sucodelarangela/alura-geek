// import database
const Database = require('../db/config.js')

module.exports = {
  async enter(req, res) {
    const db = await Database()
    const email = req.body.email
    const password = req.body.password

    const userInfo = db.get(`SELECT * FROM admin WHERE userLogin = "${email}"`)

    userInfo.then(user => {
      if (user === undefined) {
        res.redirect('/login-error')
      } else if (user.password !== password) {
        res.redirect('/login-error')
      } else {
        res.redirect('/todos-os-produtos')
      }
    })
  }
}
