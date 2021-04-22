const mongoose = require('mongoose')


//importação do model criado
const Product = mongoose.model('Product')


//métoddo para exportar a regra de negócio
module.exports = {

    // método que irá listar todos os objetos extraídos do banco de dados
    async index(req, res){

        // aqui utilizamos uma query para a requisição onde retornará a página que queremos exibir
        const { page = 1 } = req.query
        
        //o método paginate irá buscar no objeto Product (model) todas as informações para a const products, limitando a exibição a 10 ocorrências
        const products = await Product.paginate({}, {page, limit: 10 } )

        // retorna em forma de response o objeto para em formato de json
        return res.json(products)
    },
    
    //método que retornará apenas um objeto a ser referenciado pelo id nos parâmetros da requisição
    async show(req, res){
        //o método findById() receberá id pelo parâmetro da requisição
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
        //o método findByIdAndUpdate ira idientificar o objeto pelo id passado no parâmetro da requisição e o atualizará pelo conteúdo no corpo da requisição. o terceiro parâmtro informa que será retornado o objeto já alterado
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(product)
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id)

        return res.send()
    }
}