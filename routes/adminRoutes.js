const express = require('express');
const router = express.Router();
const adminController=require ('../controllers/adminController');
router.post('/shorts/create', adminController.register);
module.exports = router;