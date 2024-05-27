const paymentSchema = require('../models/paiment');
const paymentValidation= require('../validation/paiment')

async function createPayment(req, res) {
  let { error, value } = paymentValidation.validate(req.body)
    if (error){
        return res.status(400).json({ message : error.details[0].message })
    }
    try{
        const payment = await paymentSchema.create(value)
        res.status(201).json(payment)
    } catch (e) {
        res.status(500).json("error  creating payment !!!")
    }
}



module.exports = { createPayment};