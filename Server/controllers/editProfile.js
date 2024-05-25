const bcrypt = require("bcrypt");
const editValidation = require("../validation/editProfile");
const userSchema = require("../models/SignUp");  

const upadatUserPassword = async (req, res) => {
    const userId = req.params.id;

    // Validate the request body
    const { error, value } = editValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // Destructure the validated values
    const { username, email, password, newPassword } = value;

    try {
        // Find the user by ID
        const user = await userSchema.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verify that the provided old password matches the stored password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'The email or the password is incorrect' });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);

        // Update the user's information
        user.username = username;
        user.email = email;
        user.password = hashedNewPassword;

        // Save the updated user
        const updatedUser = await user.save();

        // Return the updated user information (excluding password for security reasons)
        res.json({
            id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
        });
    } catch (e) {
        res.status(500).json({ message: "An error happened while updating the user's information!" });
    }
};

module.exports = {
    upadatUserPassword
};
