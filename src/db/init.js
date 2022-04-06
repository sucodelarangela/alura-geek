const Database = require('./config.js')

const initDb = {
  async init() {
    // Receives database info
    const db = await Database()

    // Create tables inside database sqlite file
    await db.exec(`CREATE TABLE admin (
      userLogin TEXT,
      password TEXT
    )`)

    await db.exec(`CREATE TABLE products (
      id INTEGER,
      image BLOB,
      name TEXT,
      price MONEY,
      description TEXT,
      category TEXT,
      altText TEXT
    )`)

    await db.run(`INSERT INTO admin (
      userLogin,
      password
    ) VALUES (
      "admin@email.com",
      "12345aZ"
    )`)

    // Closes the connection to the database
    await db.close()
  }
}

// Initialize tha database
initDb.init()
