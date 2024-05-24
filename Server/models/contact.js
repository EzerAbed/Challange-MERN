const mongoose = require("mongoose");
const { type } = require("../validation/contact");
const { text } = require("express");

const messageSchema = mongoose.Schema({
    name : {
        type : String,
        required:true
    },
    mail:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('message',messageSchema);