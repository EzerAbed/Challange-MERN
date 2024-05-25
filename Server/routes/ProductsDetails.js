const router = require("express").Router()

//Importing controllers
const { createNewProduct, getAll, getById } = require('../controllers/ProductsDetails')

//GET requests
router.get('/:id', getById)

//POST requests 

//PUT requests

//DELETE requests 


module.exports = router