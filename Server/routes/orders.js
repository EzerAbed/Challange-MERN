const router = require("express").Router()

//Importing controllers
const { getAllOrders, createOrder, deleteOrderById } = require("../controllers/orders")

//GET requests
router.get("/", getAllOrders)

//POST requests
router.post("/", createOrder)

//PUT requests

//DELETE requests
router.delete("/:id", deleteOrderById)

module.exports = router