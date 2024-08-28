import React from 'react';
import axios from '../api/axios';


const CourseDetailPage = ({ course }) => {

    const handleEnroll = ()=>{

        const token = localStorage.getItem('token');

        axios.post(`/courses/${course._id}/enroll`, {},{
            headers: { Authorization: `Bearer ${token}` }
        })

        .then(response => alert('Enrolled successfully'))
        .catch(error => console.error(error));
        

    }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <button onClick={handleEnroll} className="bg-blue-500 text-white p-2 rounded">Enroll</button>
    </div>
   )
}

export default CourseDetailPage