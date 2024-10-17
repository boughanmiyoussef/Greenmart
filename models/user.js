const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

class User {
    constructor(username, email, password, userType, joinDate, profilePicture) {
        this.userID = uuidv4();
        this.username = username;
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.joinDate = joinDate;
        this.profilePicture = profilePicture;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    async hashPassword() {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    async verifyPassword(inputPassword) {
        return await bcrypt.compare(inputPassword, this.password);
    }

    updateTimestamp() {
        this.updatedAt = new Date();
    }

    static isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
}

module.exports = User;
