import React, { useState, useEffect } from 'react';
import CourseCard from '../CourseCard/CourseCard';

const AllCourses = () => {
    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        fetch('https://learn-and-explore-server.vercel.app/per-courses')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    return (
        <div className='row row-cols-lg-2 mt-4'>
            {
                allCourses.map(course =><CourseCard
                    key={course.id}
                    course={course}
                    >

                </CourseCard>)
            }
        </div>
    );
};

export default AllCourses;