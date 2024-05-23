const Joi = require('joi');

// Define the validation schema for signup
const signUpSchema = Joi.object({
  username: Joi.string()
  .min(3)
  .max(30)
  .required(),

  email: Joi.string()
  .email()
  .required(),

  password: Joi.string()
  .min(8)
  .required()
});

//exporting the validation schema 
module.exports = signUpSchema
