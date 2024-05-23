const userSchema = require('../models/SignUp')

//Creating a new user
const createNewUser = async (req, res) =>{
    try{
        const newUser = await userSchema.create(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        if(error.code == 11000 && error.keyPattern.username){
            res.status(400).json({message : "The Username Already exists !"})
        } else if (error.code == 11000 && error.keyPattern.email){
            res.status(400).json({message : "This Email has already been used !"})
        } else {
            res.status(500).json({message : "Unexpected error cought during the creation"})
        }
    }
}

//exporting all functions 
module.exports = {
    createNewUser,
}
