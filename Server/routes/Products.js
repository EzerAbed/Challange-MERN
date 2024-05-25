const router = require("express").Router()

//import the conrollers
const { getAll, createNewProduct } = require('../controllers/Products')

//GET requests
router.get("/", getAll)

//POST requests
router.post("/", createNewProduct)

//PUT requests

//DELETE requests

module.exports = router