const ordersSchema = require('../models/order')
const orderValidation = require('../validation/orders')

//get all orders 
const getAllOrders = async (req, res) => {
    try {
        const orders = await ordersSchema.find().populate('idCustumer idProduct');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Server Error!!" });
    }
};

//get all orders of a specific user  
const getOrderByUserId = async (req, res) => {
    const userId = req.params.id;
    try {
        const userOrders = await ordersSchema.find({ idCustumer: userId }).populate('idProduct');
        if (!userOrders || userOrders.length === 0) {
            return res.status(404).json([]);
        }
        res.status(200).json(userOrders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//create an order
const createOrder = async (req, res) => {
    const { error, value } = orderValidation.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const order = await ordersSchema.create(value);
        res.status(201).json(order);
    } catch (e) {
        res.status(500).json({ message: "Server Error !!" });
    }
};

//delete an order
const deleteOrderById = async (req, res) => {
    const orderId = req.params.id;
    try {
        const deletedOrder = await ordersSchema.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            return res.status(404).json({ message: `Item with id: ${orderId} not found. Please verify your information and retry.` });
        }
        res.json(deletedOrder);
    } catch (error) {
        res.status(500).json({ message: "Server Error!!" });
    }
};

module.exports = {
    getAllOrders,
    getOrderByUserId,
    createOrder,
    deleteOrderById
}
