const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware.js');
const { getUserProfile } = require('../controllers/userController.js');

// Protected route to get user profile
router.get('/profile', protect, getUserProfile);

// Admin route to get all users
// router.get('/', protect, admin, getUsers);


module.exports = router;