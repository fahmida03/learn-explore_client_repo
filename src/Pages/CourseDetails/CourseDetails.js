import React from 'react';

const CourseDetails = ({ course }) => {
    const { title, image, course_description, certification, learning_outcomes, prerequisites, details } = course;
    return (
        <div>
            <h2>{title}</h2>
            <div>{image}</div>
            <h1>{details}</h1>
        </div>
    );
};

export default CourseDetails;