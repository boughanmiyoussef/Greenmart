const { v4: uuidv4 } = require('uuid');

class Order {
    constructor(userID, productID, quantity, orderDate, status) {
        this.orderID = uuidv4();
        this.userID = userID;
        this.productID = productID;
        this.quantity = quantity;
        this.orderDate = orderDate;
        this.status = status; // Status of the order (e.g., 'pending', 'completed', 'canceled')
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    updateStatus(newStatus) {
        this.status = newStatus;
        this.updatedAt = new Date();
    }

    updateTimestamp() {
        this.updatedAt = new Date();
    }
}

module.exports = Order;
