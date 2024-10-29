const Plant = require('../models/plant');

exports.getPlants = async (req, res) => {
    try {
        const plants = await Plant.find(req.query);
        res.status(200).json(plants);
    } catch (error) {
        res.status(500).json({ error: "Error fetching plants" });
    }
};

exports.addPlant = async (req, res) => {
    try {
        const { name, description, stockQuantity, category, price, imageURL, sellerID } = req.body;
        const plant = new Plant(name, description, stockQuantity, category, price, imageURL, sellerID);

        await plant.save();
        res.status(201).json({ message: "Plant added successfully", plant });
    } catch (error) {
        res.status(500).json({ error: "Error adding plant" });
    }
};

exports.updatePlant = async (req, res) => {
    try {
        const plantID = req.params.id;
        const updatedData = req.body;
        const updatedPlant = await Plant.updateById(plantID, updatedData);

        if (updatedPlant) {
            res.status(200).json({ message: "Plant updated successfully", updatedPlant });
        } else {
            res.status(404).json({ error: "Plant not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error updating plant" });
    }
};

exports.deletePlant = async (req, res) => {
    try {
        const plantID = req.params.id;
        const result = await Plant.deleteById(plantID);

        if (result) {
            res.status(200).json({ message: "Plant deleted successfully" });
        } else {
            res.status(404).json({ error: "Plant not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error deleting plant" });
    }
};
