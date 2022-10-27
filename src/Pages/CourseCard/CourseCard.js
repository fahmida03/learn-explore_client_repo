import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseCard.css'

const CourseCard = ({ course }) => {
    const { title, image, details, start, instructor, name, lectures, lecture, skill_level } = course
    return (
        <div className='container'>
            <div className='m-4'>
                <Card className='shadow' style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={course.image} />
                    <Card.Body>
                        <Card.Title>{course.title}</Card.Title>
                        <Card.Text>
                            {course.details.start}
                        </Card.Text>
                        <div className='d-flex justify-content-around'>
                            <p className='fw-bold'>By: {course.instructor.name} </p>
                            <p className='fw-bold'>Lecture: {course.lectures.lecture}</p>
                        </div>
                        <p className='text-center fw-bold'>Skill Level: {course.skill_level}</p>

                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CourseCard;