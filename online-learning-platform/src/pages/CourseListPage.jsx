import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

function CourseListPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <div key={course._id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p>{course.description}</p>
            <a href={`/courses/${course._id}`} className="text-blue-500">View Details</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseListPage;
