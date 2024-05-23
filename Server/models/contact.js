const mongoose = require("mongoose");
const { type } = require("../validation/contact");
const { text } = require("express");

const messageSchema = mongoose.Schema({
    name : {
        type : String,
        required:true,
        trim:true
    },
    mail:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    message:{
        type:text,
        required: true,
        unique: true,
        trim: true
    }
})


const Message = mongoose.model('Message',messageSchema)
module.exports = Message;