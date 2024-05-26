const userSchema = require('../models/SignUp')
const signUpvalidation = require('../validation/SignUp')

//Creating a new user
const createNewUser = async (req, res) =>{
    //verify that the req is as wanted
    let { error, value } = signUpvalidation.validate(req.body)
    if (error){
        return res.status(400).json({ message : error.details[0].message })
    }
    try{
        const newUser = await userSchema.create(req.body)
        res.status(201).json(newUser)
    } catch (e) {
        if(e.code == 11000 && e.keyPattern.username){
            res.status(400).json({message : "The Username Already exists !"})
        } else if (e.code == 11000 && e.keyPattern.email){
            res.status(400).json({message : "This Email has already been used !"})
        } else {
            res.status(500).json({message : "Unexpected error cought during the creation"})
        }
    }
}

//exporting all controllers 
module.exports = {
    createNewUser,
}
