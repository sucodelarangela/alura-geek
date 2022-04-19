// import database
const Database = require('../db/config.js')

module.exports = {
  index(req, res) {
    const itemCode = req.params.code // gets parameter from form action route variable
    const password = req.body.password // gets password typed on password input on modal
  },

  async create(req, res) {
    let productId = req.params.code
    let isId = true

    const db = await Database()

    while (isId) {
      // If the id number is equal to existing id in database, keeps generating a new random number to the id
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
        // Insert new id into route address
        res.redirect(`/admin/${productId}`)
      }
    }

    await db.close()
  },

  async open(req, res) {
    const db = await Database()
    const productId = req.params.code
    const product = await db.get(
      `SELECT * FROM products WHERE id = ${productId}`
    )

    const similar = await db.all(
      `SELECT * FROM products WHERE category = "${product.category}" AND id != ${product.id}`
    )

    res.render('index', {
      page: 'product',
      title: 'Produto',
      button:
        '<a class="header__button button__void button" href="/login">Login</a>',
      product: product,
      others: similar
    })
  },

  async save(req, res) {
    const db = await Database()
    const roomId = req.params.code
    const file = req.body.imageSrc
    const prodName = req.body.prodName
    const price = req.body.price
    const description = req.body.description
    const alt = req.body.imgAlt
    const category = req.body.category

    await db.run(`INSERT INTO products (
      id,
      image,
      name,
      price,
      description,
      category,
      altText
    ) VALUES (
      ${roomId},
      "${file}",
      "${prodName}",
      "${price}",
      "${description}",
      "${category}",
      "${alt}"
    )`)

    res.redirect(`/produto&id=${roomId}`)
    await db.close()
  },

  async show(req, res) {
    const db = await Database()
    const starWars = await db.all(
      'SELECT * FROM products WHERE category = "star-wars"'
    )
    const videogames = await db.all(
      'SELECT * FROM products WHERE category = "videogames"'
    )
    const misc = await db.all(
      'SELECT * FROM products WHERE category = "diversos"'
    )

    res.render('index', {
      page: 'main',
      title: 'Home',
      button:
        '<a class="header__button button__void button" href="login">Login</a>',
      starWars: starWars,
      consoles: videogames,
      diversos: misc
    })
  },

  async view(req, res) {
    const db = await Database()
    const category = req.params.category
    const products = await db.all(
      `SELECT * FROM products WHERE category = "${category}"`
    )

    res.render('index', {
      page: 'view-category',
      title: 'Ver Produtos',
      button:
        '<a class="header__button button__void button" href="login">Login</a>',
      productsList: products
    })
  }
}
