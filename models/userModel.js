const db = require('../config/db');
const User = {};
User.create = (user, callback) => {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [user.username, user.email, user.password], callback);
};

User.findByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
};

module.exports = User;