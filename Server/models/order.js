const mongoose = require("mongoose")

//definition of the orders database schema
const ordersSchema = mongoose.Schema({
    idCustumer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true
    },

    idProduct : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'products', 
        required : true
    },

    quantity : {
        type : Number, 
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    createdAt : {
        type : Date ,
        default : Date.now
    }

})

const orders = mongoose.model('orders', ordersSchema)
module.exports = orders