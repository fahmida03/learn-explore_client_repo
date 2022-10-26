import React from 'react';

const CourseDetails = ({ course }) => {
    const { title, image, course_description, certification, learning_outcomes, prerequisites } = course
    return (
        <div>
            <h2>{title}</h2>
            <div>{image}</div>
        </div>
    );
};

export default CourseDetails;