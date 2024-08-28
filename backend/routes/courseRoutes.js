const express = require('express');
const router = express.Router();

const { createCourse, getCourses, getCourseById, updateCourse, deleteCourse, } = require('../controllers/courseController.js');
const { protect, admin } = require('../middleware/authMiddleware.js');

// Public routes
router.route('/').get(getCourses);
router.route('/:id').get(getCourseById);

// Protected routes (Instructor only)
router.route('/').post(protect, createCourse);
router.route('/:id').put(protect, updateCourse).delete(protect, deleteCourse);

module.exports = router;


