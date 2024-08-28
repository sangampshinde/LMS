const express = require('express');
const router = express.Router();

const { createCourse, getCourses, getCourseById, updateCourse, deleteCourse, } = require('../controllers/courseController.js');