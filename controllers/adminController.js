const Admin=require('../models/adminModel');
const adminController = {};
adminController.register = async (req, res) => {
    const { category, title, author,publish_date,content,actual_content_link } = req.body;
    Admin.create({category, title, author,publish_date,content,actual_content_link }, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Short added successfully!' });
    });
};
adminController.getUser = (req, res) => {
    const userId = req.user.category;
    User.findById(userId, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'category not found' });
        }
        res.json(results[0]);
    });
};
module.exports = adminController;