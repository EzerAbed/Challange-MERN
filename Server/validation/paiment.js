const Joi = require('joi');

const paymentSchema = Joi.object().keys({
  fullname: Joi.string().required(),
  phonenbr: Joi.number().required(),
  adress: Joi.string().required(),
  city: Joi.string().required(),
  governorate: Joi.string().required(),
  paimentMethod: Joi.string().required(),
  cardNumber: Joi.string(),
  password: Joi.string(),
});

module.exports = paymentSchema;