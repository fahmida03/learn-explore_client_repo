import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const PerCourse = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>vbfbb</h2>
            {
                courses.map(course => <CourseDetails
                    key={course.course_id}
                    course = {course}
                    ></CourseDetails>)
            }
        </div>
    );
};

export default PerCourse;