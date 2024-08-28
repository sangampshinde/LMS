const asyncHandler = require('express-async-handler');
const User = require('../models/User.js');

// Get user profile
const getUserProfile = asyncHandler(async (req, res) => {

    const user = req.user;

    if (user) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        });
    }else {
        res.status(404);
        throw new Error('User not found');
    }
});


// Get all users
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);

});


module.exports = { getUserProfile, getUsers };