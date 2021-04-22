const mongoose = require('mongoose')
//importação do mongoose-paginate que ajuda a criar paginação na amostra da requisição
const mongoosePaginate = require('mongoose-paginate')



//definião do schema a ser usado no banco
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    description:{
        type: String, 
        required: true
    }, 
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    }
})

//chamada do plugin do mongoose-paginate
productSchema.plugin(mongoosePaginate)

//registro do novo model
mongoose.model('Product', productSchema)