const express = require('express')


//utilizando a função Router() do framework express
const routes = express.Router()

//importação do objeto product controller
const ProductController = require('./controllers/ProductController')


//rotas criadas para as operações de CRUD
routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)

routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)


//exportação do objeto routes para ser utilizado no server.js
module.exports = routes