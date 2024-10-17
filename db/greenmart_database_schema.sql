-- Create the GreenMart database
CREATE DATABASE IF NOT EXISTS greenmart;
USE greenmart;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    userID VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_type ENUM('buyer', 'seller', 'admin') NOT NULL,
    joindate DATE NOT NULL,
    profilepicture VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create the plants table
CREATE TABLE IF NOT EXISTS plants (
    plantID VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(255),
    price FLOAT NOT NULL,
    imageURL VARCHAR(255),
    sellerID VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (sellerID) REFERENCES users(userID)
);

-- Create the orders table
CREATE TABLE IF NOT EXISTS orders (
    orderID VARCHAR(255) PRIMARY KEY,
    buyerID VARCHAR(255),
    plantID VARCHAR(255),
    quantity INT NOT NULL,
    orderDate DATE NOT NULL,
    status VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (buyerID) REFERENCES users(userID),
    FOREIGN KEY (plantID) REFERENCES plants(plantID)
);

-- Create the blogs table
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

-- Create the comments table
CREATE TABLE IF NOT EXISTS comments (
    commentID VARCHAR(255) PRIMARY KEY,
    blogID VARCHAR(255),
    content TEXT,
    dateposted DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (blogID) REFERENCES blogs(blogID)
);
