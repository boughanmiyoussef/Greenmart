const OrderItem = require('../models/order_items');

exports.addItemToOrder = async (req, res) => {
    try {
        const { orderID, plantID, quantity, price } = req.body;
        const orderItem = new OrderItem(orderID, plantID, quantity, price);

        await orderItem.save();
        res.status(201).json({ message: "Item added to order", orderItem });
    } catch (error) {
        res.status(500).json({ error: "Error adding item to order" });
    }
};

exports.getOrderItems = async (req, res) => {
    try {
        const orderID = req.params.orderId;
        const items = await OrderItem.findByOrderId(orderID);

        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: "Error fetching order items" });
    }
};
