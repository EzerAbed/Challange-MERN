const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

//definition of the Database Schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Hashing the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const User = mongoose.model('User', userSchema);
module.exports = User;
