import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LeftSide = () => {
    const courses = useLoaderData();
    console.log(courses)
    // const [courses, setCourses] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/all-courses')
    //     .then(res => res.json())
    //     .then(data => setCourses(data))
    // },[])
    return (
        <div>
            <h2>leftSide: {courses.length} </h2>
            {/* {
                courses.map(course => <p 
                    key={course.id}>
                        <Link to={`/all-courses/${course.id}`}>
                             {course.name} </Link></p>)
            } */}
        </div>
    );
};

export default LeftSide;