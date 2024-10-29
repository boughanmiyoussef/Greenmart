const Comment = require('../models/comment');
exports.addComment = async (req, res) => {
    try {
        const { blogID, userID, content } = req.body;
        const newComment = new Comment(blogID, userID, content);
        await newComment.save();
        res.status(201).json({ message: "Comment added successfully", comment: newComment });
    } catch (error) {
        res.status(500).json({ error: "Error adding comment" });
    }
};

exports.getCommentsByBlog = async (req, res) => {
    try {
        const { blogID } = req.params;
        const comments = await Comment.getByBlogID(blogID);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving comments" });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const { commentID } = req.params;
        await Comment.delete(commentID);
        res.status(200).json({ message: "Comment deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting comment" });
    }
};
