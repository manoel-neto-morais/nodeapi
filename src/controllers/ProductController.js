const mongoose = require('mongoose')


//importação do model criado
const Product = mongoose.model('Product')


//métoddo para exportar a regra de negócio
module.exports = {

    // método que irá listar todos os objetos extraídos do banco de dados
    async index(req, res){

        const { page = 1 } = req.query
        
        //o método find() irá buscar no objeto Product (model) todas as informações para a const products
        const products = await Product.paginate({}, {page, limit: 10 } )

        // retorna em forma de response o objeto para em formato de json
        return res.json(products)
    },
    
    async show(req, res){
        const product = await Product.findById(req.params.id)

        return res.json(product)
    },


    async store(req, res){

        // o método create() recebe o corpo da requisição e salva no banco 
        const product = await Product.create(req.body)

        //retorna para o banco o objeto em formato de json
        return res.json(product)
    }, 

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(product)
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id)

        return res.send()
    }
}