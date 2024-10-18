const { v4: uuidv4 } = require('uuid');

class OrderItem {
    constructor(orderID, productID, quantity, price) {
        this.orderItemID = uuidv4();
        this.orderID = orderID;
        this.productID = productID;
        this.quantity = quantity;
        this.price = price;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    updateOrderItem(newQuantity, newPrice) {
        this.quantity = newQuantity;
        this.price = newPrice;
        this.updatedAt = new Date();
    }
}

module.exports = OrderItem;

