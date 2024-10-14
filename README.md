
---

# GreenMart

## Overview

GreenMart is an online marketplace where users can buy and sell plants. The system supports three main roles:

- **Buyer**: Can browse plants, add them to cart, and make purchases.
- **Seller**: Can add, manage, and sell plants.
- **Admin**: Oversees user and product management and handles platform administration.

This project is built using Node.js, Express.js, MySQL, and HTML/CSS for the front-end

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Roles & Permissions](#roles--permissions)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- Buyer and Seller registration and login.
- Admin dashboard for managing users and products.
- Sellers can add and remove plant listings.
- Buyers can purchase and check out products.
- Responsive design for desktop and mobile users.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Frontend**: HTML, CSS
- **Authentication**: JWT for user authentication
- **Styling**: CSS

## Installation

1. Clone the repository:

   ```bash
   "git clone https://github.com/boughanmiyoussef/greenmart.git"
   ```

2. Install the dependencies:

   ```bash
   "cd greenmart"
   ```
   
   ```bash
   "npm install"
   ```

3. Start the server:

   ```bash
   "npm start"
   ```

## Database Setup

1. Create a MySQL database:

   ```sql
   CREATE DATABASE greenmart;
   ```

2. Run database migrations (if applicable) or manually set up the necessary tables for users, products, etc.

## Usage

- **Buyers**: Browse the catalog, add items to cart, and proceed to checkout.
- **Sellers**: Add new plant listings, manage them, and track sales.
- **Admin**: Manage users and products, and monitor platform activities.

## Roles & Permissions

- **Buyer**: Browse, view plant details, add to cart, checkout.
- **Seller**: Add and update plant listings, manage sales.
- **Admin**: View and manage users and products, monitor platform statistics.

## Folder Structure

```
greenmart/
│
├── public/           # Contains static files (HTML, CSS, JS, images)
│   ├── css/          # CSS files
│   ├── js/           # Front-end JavaScript (if applicable)
│   └── index.html    # Main HTML file
│
├── config/           # Database connection and configurations
├── controllers/      # Logic for handling routes (Node.js/Express)
├── models/           # Database models (MySQL)
├── routes/           # API endpoints (Express routes)
└── app.js            # Main server file (Node.js)
```

## API Endpoints

- `POST /register`: Register a new user (Buyer/Seller).
- `POST /login`: Login as Buyer/Seller.
- `GET /plants`: List all available plants (Buyer access).
- `POST /plants`: Add a new plant (Seller access).
- `DELETE /plants/:id`: Remove a plant (Seller access).
- `GET /admin/dashboard`: View platform statistics (Admin access).

## Contributing

1. Fork the repository.
2. Create a new feature branch:

   ```bash
   "git checkout -b feature-name"
   ```

3. Commit your changes:

   ```bash
   "git commit -m 'Add some feature'"
   ```

4. Push to the branch:

   ```bash
   "git push origin feature-name"
   ```

5. Open a pull request.

---