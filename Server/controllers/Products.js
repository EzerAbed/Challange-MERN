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

//Get the products with the best raiting
const getBestProducts = async (req,res) => {
    try{
        const bestProducts = await productSchema.find({ rating : 5 }).sort({ rating : -1 })
        res.status(200).json(bestProducts)
    }catch(error){
        res.status(500).json({ message : "Internal Server Error !" })
    }
}

//Get the Newest Products
const getNewestProudct =  async (req, res) => {
    try {
        const newProducts = await productSchema.find().sort({ createdAt: -1 }).limit(5); 
        res.json(newProducts);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error !"});
    }
};

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

//get products from a specific cathegory
const getProductByCategory = async (req,res)=>{
    let cat = req.params.category
    try{
        let products = await productSchema.find({category:cat})
        res.status(200).json(products)
    }catch(e){
        return res.status(400).json({message:"no product with category " + cat+" or error finding products"} )
    }
}

//get the searched products
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

//delete a product
const deleteProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await productSchema.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: `Item with id: ${productId} not found. Please verify your information and retry.` });
        }
        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//update a product
const upadatProduct = async (req, res) => {
    const productId = req.params.id;

    // Validate the request body
    const { error, value } = productValidation.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    // Destructure the validated values
    const { name, category, description, price, images, stock_quantity, rating, reviews_count } = value;

    try {
        // Find the product by ID
        const product = await productId.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Update the product's informations
        product.name = name
        product.category = category
        product.description = description
        product.price = price
        product.images = images
        product.stock_quantity = stock_quantity
        product.rating = rating
        product.reviews_count = reviews_count
        product.modifiedAt = Date.now

        // Save the updated product
        const updatedProduct = await product.save();

        // Return the updated product information 
        res.json({
            id: updatedProduct._id,
            name: updatedProduct.name,
            category: updatedProduct.category,
            price : updatedProduct.price,
            images : updatedProduct.images,
            rating : updatedProduct.rating,
            reviews_count : updatedProduct.reviews_count
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

//update product's rating
const upadatProductsRating = async (req, res) => {
    const productId = req.params.id;
    const newRating = parseFloat(req.body.rating);

    try {
        const product = await productSchema.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        product.rating = ((product.rating * product.reviews_count) + newRating) / (product.reviews_count + 1);
        product.reviews_count += 1;
        product.modifiedAt = Date.now();

        const updatedProduct = await product.save();

        res.json({
            id: updatedProduct._id,
            name: updatedProduct.name,
            category: updatedProduct.category,
            price: updatedProduct.price,
            images: updatedProduct.images,
            rating: updatedProduct.rating,
            reviews_count: updatedProduct.reviews_count
        });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};



module.exports = {
    getAll,
    createNewProduct,
    getBestProducts,
    getNewestProudct,
    getProductByCategory,
    getProductBySearch, 
    deleteProductById, 
    upadatProduct, 
    upadatProductsRating
}
