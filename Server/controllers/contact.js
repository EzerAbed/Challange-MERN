const messageSchema = require("../models/contact")
const messagevalidation = require('../validation/contact')


const createNewMessage = async (req, res) =>{
    //verify that the req is as wanted
    let { error, value } = messagevalidation(req.body)
    if (error){
        return res.status(400).json({ message : error.details[0].message })
    }
    try{
        const newUser = await messageSchema.create(req.body)
        res.status(201).json(newUser)
    } catch (e) {
        res.status(500).json("error sending message !!!")
    }
}

module.exports = {createNewMessage,}
