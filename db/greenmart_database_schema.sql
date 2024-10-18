-- Create the GreenMart database
CREATE DATABASE IF NOT EXISTS greenmart;
USE greenmart;

-- User
CREATE TABLE IF NOT EXISTS users (
    userID VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_type ENUM('buyer', 'seller') NOT NULL,
    joindate DATE NOT NULL,
    profilepicture VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Plants
CREATE TABLE IF NOT EXISTS plants (
    plantID VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    stockQuantity INT NOT NULL,
    category VARCHAR(255),
    price FLOAT NOT NULL,
    imageURL VARCHAR(255),
    sellerID VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (sellerID) REFERENCES users(userID)
);

-- Orders
CREATE TABLE IF NOT EXISTS orders (
    orderID VARCHAR(255) PRIMARY KEY,
    buyerID VARCHAR(255),
    plantID VARCHAR(255),
    quantity INT NOT NULL,
    orderDate DATE NOT NULL,
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (buyerID) REFERENCES users(userID),
    FOREIGN KEY (plantID) REFERENCES plants(plantID)
);

-- Blogs
CREATE TABLE IF NOT EXISTS blogs (
    blogID VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    authorID VARCHAR(255),
    postdate DATE NOT NULL,
    category VARCHAR(255),
    imageUrl VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (authorID) REFERENCES users(userID)
);

-- Comments
CREATE TABLE IF NOT EXISTS comments (
    commentID VARCHAR(255) PRIMARY KEY,
    blogID VARCHAR(255),
    userID VARCHAR(255), 
    content TEXT,
    dateposted DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (blogID) REFERENCES blogs(blogID),
    FOREIGN KEY (userID) REFERENCES users(userID)
);

-- Order_items
CREATE TABLE IF NOT EXISTS order_items (
    orderItemID VARCHAR(255) PRIMARY KEY,
    orderID VARCHAR(255),
    productID VARCHAR(255),
    quantity INT NOT NULL,
    price FLOAT NOT NULL,
    FOREIGN KEY (orderID) REFERENCES orders(orderID),
    FOREIGN KEY (productID) REFERENCES plants(plantID)
);+