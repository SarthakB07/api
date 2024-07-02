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
module.exports = adminController;