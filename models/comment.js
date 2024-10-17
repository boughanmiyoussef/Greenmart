const { v4: uuidv4 } = require('uuid');

class Comment {
    constructor(userID, blogID, content) {
        this.commentID = uuidv4(); // Unique identifier for the comment
        this.userID = userID;
        this.blogID = blogID;
        this.content = content;
        this.datePosted = new Date();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    updateContent(newContent) {
        this.content = newContent;
        this.updatedAt = new Date();
    }

    updateTimestamp() {
        this.updatedAt = new Date();
    }
}

module.exports = Comment;
