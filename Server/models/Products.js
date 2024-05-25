const mongoose = require("mongoose")

//definition of the images schema
const imageSchema = mongoose.Schema({
    url: { type: String, required: true },
    is_primary: { type: Boolean, default: false }
});

//definition of the database schema
const productSchema = mongoose.Schema({
    name : {
        type : String,
        required: true,
        trim: true
    },

    category : {
        type : String,
        required: true,
        trim: true
    },

    description: { 
        type: String, 
        required: true,
        trim: true 
    },

    price: { 
        type: Number, 
        required: true 
    },

    images: [imageSchema],

    stock_quantity: { 
        type: Number, 
        default: 0 
    },

    rating: { 
        type: Number,
        default: 0.0 
    },

    reviews_count: { 
        type: Number, 
        default: 0 
    },

    createdAt: { 
        type: Date, 
        default: Date.now 
    },

    modifiedAt: { 
        type: Date, 
        default: Date.now 
    },
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product 