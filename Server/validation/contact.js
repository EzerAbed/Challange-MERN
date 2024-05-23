const Joi = require('joi');

const messageSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    phone: Joi.string().tel().required(),
    mail: Joi.string().mail().required(),
    message: Joi.string().min(3).max(255).required()

});

module.exports = messageSchema