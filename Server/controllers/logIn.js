const userSchema = require('../models/SignUp')
const bcrypt = require("bcrypt")

//verify that a user that wanna log in exsites
const verifyUserExists = async (req,res) => {
    const { email, password } = req.body
    try{
        //finding user by email
        const user = await userSchema.findOne({ email })
        if(!user){
            return res.status(404).json({ message : 'the email or the password is incorrect' })
        }

        //verify that the password is correct 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'the email or the password is incorrect' });
        }

        res.json({ user: { id: user._id, email: user.email, username: user.username } })
    }catch(error){
        res.status(500).json({message : 'inexpected error happened please try again later'})
    }
}

//exporting all controllers
module.exports = {
    verifyUserExists,
}