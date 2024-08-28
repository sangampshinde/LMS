const asyncHandler = require('express-async-handler');
const Course = require('../models/Course.js');


// @desc    Create a new course
// @route   POST /api/courses
// @access  Private/Instructor

const createCourse = asyncHandler(async(req, res, next)=>{

    const { title, description, price, content } = req.body;

    const course = new Course({
        title,
        description,
        price,
        content,
        instructor: req.user._id,
      });
    
      const createdCourse = await course.save();
      res.status(201).json(createdCourse);
});

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public

const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({}).populate('instructor', 'name');
    res.json(courses);

});

// @desc    Get course by ID
// @route   GET /api/courses/:id
// @access  Public

const getCourseById = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id).populate('instructor', 'name');
    if (course) {
        res.json(course);
    }else{
        res.status(404);
        throw new Error('Course not found');
    }
});

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Private/Instructor

const updateCourse = asyncHandler(async (req, res) => {

    const { title, description, price, content } = req.body;

    const course = await Course.findById(req.params.id);

    if(course){

        if (course.instructor.toString() !== req.user._id.toString()){
            res.status(401);
            throw new Error('Not authorized to update this course');
        }

        course.title = title || course.title;
        course.description = description || course.description;
        course.price = price || course.price;
        course.content = content || course.content;

        const updatedCourse = await course.save();
        res.json(updatedCourse);
    } else{
            res.status(404);
            throw new Error('Course not found');
        }
    
});

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Private/Instructor

const deleteCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (course) {
        if (course.instructor.toString() !== req.user._id.toString()) {
          res.status(401);
          throw new Error('Not authorized to delete this course');
        }
    
        await course.remove();
        res.json({ message: 'Course removed'});

    } else{
    res.status(404);
    throw new Error('Course not found');
  }
});

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
};

