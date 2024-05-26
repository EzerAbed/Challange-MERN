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

const getProductByCategory = async (req,res)=>{
    let cat = req.params.category
    try{
        let products = await productSchema.find({category:cat})
        res.status(200).json(products)
    }catch(e){
        return res.status(400).json({message:"no product with category " + cat+" or error finding products"} )
    }
}
const getProductBySearch = async (req, res) => {
    let searchQuery = req.params.searchQuery;
    try {
        let products = await productSchema.find({
            $or: [
                { name: { $regex: searchQuery, $options: 'i' } },
                { category: { $regex: searchQuery, $options: 'i' } },
                { description: { $regex: searchQuery, $options: 'i' } }
            ]
        }).exec();
        if (products.length === 0) {
            return res.status(400).json({ message: "no product found for the given search query" });
        }
        res.status(200).json(products);
    } catch (e) {
        return res.status(400).json({ message: "error finding products" });
    }
}

module.exports = {
    getAll,
    createNewProduct,
    getProductByCategory,
    getProductBySearch
}