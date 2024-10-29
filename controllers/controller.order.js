const Order = require('../models/order');

exports.createOrder = async (req, res) => {
    try {
        const { userID, orderItems, totalAmount } = req.body;
        const order = new Order(userID, orderItems, totalAmount);

        await order.save();
        res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
        res.status(500).json({ error: "Error creating order" });
    }
};

exports.getOrder = async (req, res) => {
    try {
        const orderID = req.params.id;
        const order = await Order.findById(orderID);

        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching order" });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const userID = req.params.userId;
        const orders = await Order.findByUserId(userID);

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user orders" });
    }
};

