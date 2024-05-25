const mongoose = require("mongoose");
const { text } = require("express");
const { type } = require("../validation/contact");

const productCartSchema = mongoose.Schema({
    productName : {
        type : String,
    },
    images:{
        type: [String],
    },
    price: {
        type: Number,
    },
    rating:{
        type:String,
    },
    quantity:{
        type  :String,
    }
})

module.exports = mongoose.model('product',productCartSchema);