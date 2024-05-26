const messageSchema = require("../models/contact")
const messagevalidation = require('../validation/contact')


const createNewMessage = async (req, res) =>{
    //verify that the req is as wanted
    let { error, value } = messagevalidation.validate(req.body)
    if (error){
        return res.status(400).json({ message : error.details[0].message })
    }
    try{
        const newMessage = await messageSchema.create(value)
        res.status(201).json(newMessage)
    } catch (e) {
        res.status(500).json("error sending message !!!")
    }
}

module.exports = {createNewMessage,}
