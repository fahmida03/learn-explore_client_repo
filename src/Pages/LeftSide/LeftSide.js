import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSide.css'

const LeftSide = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/all-courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='leftside'>
            <h3>Courses</h3>
            <hr />
            {
                courses.map(course => <p
                    key={course.id}>
                    <Link to={`/course/${course.id}`}>
                        {course.name} </Link></p>)
            }
        </div>
    );
};

export default LeftSide;