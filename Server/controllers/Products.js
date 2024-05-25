const productSchema = require('../models/Products')
const productValidation = require('../validation/Products')

//Get all product 
const getAll = async (req,res) => {
    try{
        let products = await productSchema.find()
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({ message : "Unexpected Server Error" })
    }
}

//Create a new product
const createNewProduct = async (req,res) => {
    //verify the request is as wanted 
    let { error, value } = productValidation.validate(req.body)
    if (error){
        return res.status(400).json({ message : error.details[0].message })
    }
    try{
        const newProduct = await productSchema.create(req.body)
        res.status(201).json(newProduct)
    }catch(e){
        res.status(500).json({ message : "Unexpected Server Error Happend while creating the new element" })
    }
}

module.exports = {
    getAll,
    createNewProduct
}