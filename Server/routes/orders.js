const router = require("express").Router()

//Importing controllers
const { getAllOrders, createOrder, deleteOrderById, getOrderByUserId } = require("../controllers/orders")

//GET requests
router.get("/", getAllOrders)
router.get("/:id", getOrderByUserId)

//POST requests
router.post("/", createOrder)

//PUT requests

//DELETE requests
router.delete("/:id", deleteOrderById)

module.exports = router
