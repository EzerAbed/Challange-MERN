const router = require("express").Router()

//import the conrollers
const { getAll, createNewProduct,getProductByCategory, getProductBySearch } = require('../controllers/Products')

//GET requests
router.get("/", getAll)

router.get("/:category",getProductByCategory)

router.get("/search/:searchQuery",getProductBySearch)

//POST requests
router.post("/", createNewProduct)


//PUT requests

//DELETE requests

module.exports = router