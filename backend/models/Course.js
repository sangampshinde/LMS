const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
    },

    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },

    price: {
        type: Number,
        required: true,
        default: 0,
    },

    content: [ {

        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        videoUrl: {
            type: String,
        },
    
     },

    ],
  }, 
{
    timestamps: true,
});

module.exports = mongoose.model('Course', courseSchema);