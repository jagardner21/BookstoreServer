const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const books = require('./books')
const port = 8082

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get(`/api/books`, (req, res) => {
    res.json(books)
})

app.patch(`/api/books/cart/add/:id`, (req, res) => {
    let specBook = books.find(book => book.id == req.params.id)
    specBook.inCart = true
    res.json(books)
})

app.patch(`/api/books/cart/remove/:id`, (req, res) => {
    let specBook = books.find(book => book.id == req.params.id)
    specBook.inCart = false
    res.json(books)
})

app.listen(port, () => { console.log(`Listening on port ${port}`) })