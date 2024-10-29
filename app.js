const express = require('express');
const app = express();

const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const plantRoutes = require('./routes/plant');
const blogRoutes = require('./routes/blog');
const commentRoutes = require('./routes/comment');

// Middleware for parsing JSON
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/plants', plantRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
