const router = require("express").Router()

//import the conrollers
const { getAll, createNewProduct, getBestProducts, getNewestProudct } = require('../controllers/Products')

//GET requests
router.get("/", getAll)
router.get("/bestProducts", getBestProducts)
router.get("/newestProducts", getNewestProudct)

//POST requests
router.post("/", createNewProduct)

//PUT requests

//DELETE requests

module.exports = router
