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

//get all messages 
const getAllMessages = async (req,res) => {
    try{
        let messages = await messageSchema.find()
        res.status(200).json(messages)
    }catch(error){
        res.status(500).json({ message : "Unexpected Server Error" })
    }
}

//delete message by id 
const deleteMessageById = async (req, res) => {
    const messageId = req.params.id;
    try {
        const deletedMessage = await messageSchema.findByIdAndDelete(messageId);
        if (!deletedMessage) {
            return res.status(404).json({ message: `Item with id: ${messageId} not found. Please verify your information and retry.` });
        }
        res.json(deletedMessage);
    } catch (error) {
        res.status(500).json({ message: "Server Error!!" });
    }
};

module.exports = {createNewMessage,
    getAllMessages,
    deleteMessageById
}
