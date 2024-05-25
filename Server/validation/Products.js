const Joi = require('joi')

//define the validation for the images 
const imageSchema = Joi.object({
    url: Joi.string()
    .required(),
    is_primary: Joi.boolean()
    .default(false)
})

//define the Products database validation 
const productSchema = Joi.object({
    name: Joi.string()
    .trim()
    .required(),

    category : Joi.string()
    .trim()
    .required(),

    description: Joi.string()
    .trim()
    .required(),

    price: Joi.number()
    .required(),

    images: Joi.array()
    .items(imageSchema),

    stock_quantity: Joi.number()
    .default(0),

    rating: Joi.number()
    .min(0)
    .max(5)
    .default(0.0),

    reviews_count: Joi.number()
    .default(0),

});

module.exports = productSchema