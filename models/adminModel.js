const db = require('../config/db');
const Admin = {};
Admin.create = (admin, callback) => {
    const query = 'INSERT INTO inshorts (category, title, author,publish_date,content,actual_content_link) VALUES (?, ?, ?,?,?,?)';
    db.query(query, [admin.category, admin.title, admin.author,admin.publish_date,admin.content,admin.actual_content_link], callback);
};
Admin.findById = (category, callback) => {
    const query = 'SELECT * FROM users WHERE category = ?';
    db.query(query, [category], callback);
};

module.exports=Admin;