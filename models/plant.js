const { v4: uuidv4 } = require('uuid');

class Plant {
    constructor(name, species, price, description, quantity, sellerId, imageUrl) {
        this.plantID = uuidv4();
        this.name = name;
        this.species = species;
        this.price = price;
        this.description = description;
        this.quantity = quantity; 
        this.sellerId = sellerId;
        this.imageUrl = imageUrl;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    updateTimestamp() {
        this.updatedAt = new Date();
    }

    static isValidPrice(price) {
        return price > 0;
    }

    static isValidQuantity(quantity) {
        return Number.isInteger(quantity) && quantity >= 0;
    }
}

module.exports = Plant;
