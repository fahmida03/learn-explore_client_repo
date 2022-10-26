import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';

const Courses = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <LeftSide></LeftSide>
                </div>
                <div className='col-9'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Courses;