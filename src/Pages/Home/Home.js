import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import working from '../../Assets/Brand/working.jpg';
import pencil from '../../Assets/Brand/pencil.jpg';
import devices from '../../Assets/Brand/devices.jpg';
import data from '../../Assets/get/data.png';
import business from '../../Assets/get/business.png'
import com from '../../Assets/get/com.jpg';
import health from '../../Assets/get/health.png';
import language from '../../Assets/get/language.jpg';
import math from '../../Assets/get/math.jpg';
import phy from '../../Assets/get/phy.jpg';
import social from '../../Assets/get/Social.jpg';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='w-75 mx-auto h-25 mt-5'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src={working}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src={pencil}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src={devices}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='get w-75 mx-auto mt-5 mb-5'>
                <h1 className='text-center mb-4'>Get Courses</h1>
                <div className='row mb-5 g-2'>
                    <div className='get-div col-lg-3 d-flex'>
                        <img src={data}
                            alt=""
                        />
                        <div className='ms-3'>
                            <h6>Data Science</h6>
                            <p>400 courses</p>
                        </div>
                    </div>
                    <div className='get-div col-lg-3 d-flex'>
                        <img src={business}
                            alt=""
                        />
                        <div className='ms-3'>
                            <h6>Business</h6>
                            <p>350 courses</p>
                        </div>
                    </div>
                    <div className='get-div col-lg-3 d-flex'>
                        <img src={com}
                            alt=""
                        />
                        <div className='ms-3'>
                            <h6>Computer Science</h6>
                            <p>430 courses</p>
                        </div>
                    </div>
                    <div className='get-div col-lg-3 d-flex'>
                        <img src={health}
                            alt=""
                        />
                        <div className='ms-3'>
                            <h6>Health</h6>
                            <p>310 courses</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='get-div col-lg-3 d-flex p-2'>
                        <img src={social}
                            alt=""
                        />
                        <div className='ms-3'>
                            <h6>Social Science</h6>
                            <p>220 courses</p>
                        </div>
                    </div>
                    <div className='get-div col-lg-3 d-flex'>
                        <img src={phy}
                            alt=""
                        />
                        <div className='ms-3'>
                            <h6>Physical Science</h6>
                            <p>120 courses</p>
                        </div>
                    </div>
                    <div className='get-div col-lg-3 d-flex'>
                        <img src={language}
                            alt=""
                        />
                        <div className='ms-3'>
                            <h6>Language Learning</h6>
                            <p>320 courses</p>
                        </div>
                    </div>
                    <div className='get-div col-lg-3 d-flex'>
                        <img src={math}
                            alt=""
                        />
                        <div className='ms-3'>
                            <h6>Math and Logic</h6>
                            <p>210 courses</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;