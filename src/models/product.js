const mongoose = require('mongoose')
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

productSchema.plugin(mongoosePaginate)

//registro do novo model
mongoose.model('Product', productSchema)