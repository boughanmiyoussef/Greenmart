const { v4: uuidv4 } = require('uuid');

class Blog {
    constructor(userID, title, content) {
        this.blogID = uuidv4();
        this.userID = userID;
        this.title = title;
        this.content = content;
        this.datePosted = new Date();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }


    updateContent(newContent) {
        this.content = newContent;
        this.updatedAt = new Date(); // Update the timestamp
    }

    updateTitle(newTitle) {
        this.title = newTitle;
        this.updatedAt = new Date(); // Update the timestamp
    }

    updateTimestamp() {
        this.updatedAt = new Date();
    }
}

module.exports = Blog;
