const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
router.post('/signup', userController.register);
router.post('/login', userController.login);
router.get('/profile', authMiddleware, userController.getUser);

module.exports = router;