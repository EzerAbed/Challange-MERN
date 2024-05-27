const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    fullname: { 
        type: String,
        required: true 
    },
    phonenbr: {
        type: Number,
        required: true
    },
    adress: {
        type: String, 
        required: true
    },
    city: { 
        type: String,
        required: true 
    },
    governorate: {
        type: String, 
        required: true
    },
    paimentMethod: {
        type: String, 
        required: true
    },
    cardNumber: {
        type: String 
    },
    password: {
        type: String 
    },
});

module.exports = mongoose.model('Payment', paymentSchema);