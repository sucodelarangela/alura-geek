const Database = require('./config.js')

const initDb = {
  async init() {
    const db = await Database()

    await db.exec(`CREATE TABLE admin (
      userLogin TEXT,
      password TEXT
    )`)

    await db.exec(`CREATE TABLE products (
      id INTEGER PRIMARY KEY,
      image BLOB,
      name TEXT,
      price MONEY,
      description TEXT,
      category TEXT,
      altText TEXT
    )`)

    await db.close()
  }
}

initDb.init()
