const productSchema = require('../models/Products')
const productValidation = require('../validation/Products')





//Get product by Id
const getById = async (req, res) => {
    const productId = req.params.id
    try{
        const product = await productSchema.findById(productId)
        if(!product){
            return res.status(404).json({ message : "the product you are looking for does not exist !" })
        }
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({ message : "Internal Server Error" })
    }
}

module.exports = {
    getById
}