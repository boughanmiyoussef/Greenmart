const User = require('../models/user');
const bcrypt = require('bcrypt');

// Register new user
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password, userType } = req.body;
        const user = new User(username, email, password, userType);
        await user.hashPassword();
        await user.saveUser();
        
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmail(email);

        if (user && await user.verifyPassword(password)) {
            res.status(200).json({ message: "Login successful", user });
        } else {
            res.status(401).json({ error: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error logging in user" });
    }
};

exports.getUserProfile = async (req, res) => {
    try {
        const userID = req.params.id;
        const user = await User.findById(userID);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error fetching user profile" });
    }
};
