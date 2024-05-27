const mongoose = require("mongoose")
const userSchema = require("./SignUp.js")
const productSchema = require("./Products.js")

const { type } = require("../validation/contact.js")


//definition of the orders database schema
const ordersSchema = mongoose.Schema({
    idCustumer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },

    idProduct : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Product', 
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

    status : {
        type : Boolean,
        default : false
    },

    createdAt : {
        type : Date ,
        default : Date.now
    }

})

const orders = mongoose.model('orders', ordersSchema)
module.exports = orders
