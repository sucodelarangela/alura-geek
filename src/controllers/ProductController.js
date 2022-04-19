// import database
const Database = require('../db/config.js')

module.exports = {
  async index(req, res) {
    const db = await Database()
    const itemCode = req.params.code // gets parameter from form action route variable
    const password = req.body.password // gets password typed on password input on modal
    const action = req.params.action // gets action from form action route variable

    // Verificar se a senha está correta
    const verifyPass = await db
      .get(`SELECT * FROM admin WHERE password = "${password}"`)
      .then(pass => {
        if (pass === undefined) {
          res.redirect('/pass-incorrect')
        } else if (pass.password !== password) {
          res.redirect('/pass-incorrect')
        } else {
          if (action == 'delete') {
            db.run(`DELETE FROM products WHERE id = ${itemCode}`)
          } else if (action == 'edit') {
            console.log('edited')
            // res.redirect(`/room/${roomId}`)
          }
        }
      })
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

    await db.get(`SELECT * FROM products WHERE id = ${roomId}`).then(item => {
      if (item === undefined) {
        db.run(`INSERT INTO products (
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
        db.close()
      } else {
        db.run(
          `UPDATE products SET image = "${file}", name = "${prodName}", price = "${price}", description = "${description}", category = "${category}", altText = "${alt}" WHERE id = ${roomId}`
        )
        db.close()
        res.redirect(`/produto&id=${roomId}`)
      }
    })
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
  },

  async viewAll(req, res) {
    const db = await Database()
    const allProducts = await db.all('SELECT * FROM products')

    res.render('index', {
      page: 'all-products',
      title: 'Produtos',
      button: '<div class="header__button button__void button">Admin</div>',
      products: allProducts
    })
  },

  async openEdit(req, res) {
    const db = await Database()
    const itemCode = req.params.code
    const item = await db.get(`SELECT * FROM products WHERE id = ${itemCode}`)

    res.render('index', {
      page: 'edit',
      title: 'Edição',
      button: '<div class="header__button button__void button">Admin</div>',
      item: item
    })
  }
}
