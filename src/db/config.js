// importing sqlite and sqlite3
const sqlite3 = require('sqlite3')
// const sqlite = require('sqlite')
// even though we can import sqlite as above, we do not need to import all its funcionalities because we're going to use only the "open" function. To import only this function, we declare the funcion name as the const name, but between {}, like this:
const {open} = require('sqlite')

module.exports = () =>
  open({
    filename: './src/db/alurageek.sqlite',
    driver: sqlite3.Database
  })
