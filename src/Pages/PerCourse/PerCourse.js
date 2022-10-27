import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const PerCourse = () => {
    const courses = useLoaderData();
    const { course_description, certification, image, title, name, lecture, skill_level, start, details, instructor, learning_outcomes, prerequisites } = courses
    console.log(courses)
    return (
        <div>
            <div className='m-4'>
                <Card className='mx-auto m-3' style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details.start}
                        </Card.Text>

                        <p className='fw-bold'>By: {instructor.name} </p>

                        <p className='fw-bold'>Skill Level: {skill_level}</p>
                        <p><span className='fw-bold'>Description:</span> {details.course_description}</p>
                        <p><span className='fw-bold'>Certification:</span>  {details.certification}</p>
                        <p><span className='fw-bold'>Outcome:</span> {details.learning_outcomes}</p>
                        <p><span className='fw-bold'>Prerequisites:</span> {details.prerequisites}</p>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default PerCourse;