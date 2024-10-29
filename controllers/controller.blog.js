const Blog = require('../models/blog');

exports.createBlog = async (req, res) => {
    try {
        const { title, content, authorID } = req.body;
        const newBlog = new Blog(title, content, authorID);
        await newBlog.save();
        res.status(201).json({ message: "Blog post created successfully", blog: newBlog });
    } catch (error) {
        res.status(500).json({ error: "Error creating blog post" });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.getAll();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving blog posts" });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const { blogID } = req.params;
        const { title, content } = req.body;
        const updatedBlog = await Blog.update(blogID, title, content);
        res.status(200).json({ message: "Blog post updated", blog: updatedBlog });
    } catch (error) {
        res.status(500).json({ error: "Error updating blog post" });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const { blogID } = req.params;
        await Blog.delete(blogID);
        res.status(200).json({ message: "Blog post deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting blog post" });
    }
};
