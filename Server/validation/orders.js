const Joi = require("joi")

//define validation schema
const orderValidation = Joi.object({
    idCustumer: Joi.string()
    .required(),

    idProduct: Joi.string()
    .required(),

    quantity: Joi.number()
    .integer()
    .min(1)
    .required(),

    price: Joi.number()
    .greater(0)
    .required(),

    status : Joi.boolean(),

    createdAt: Joi.date()
})

module.exports = orderValidation
