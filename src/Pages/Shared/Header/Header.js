import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import b123 from '../../../Assets/Brand/b123.png'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='head'>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className='header'>
                <Container>
                    <Navbar.Brand href="">
                        <img
                            src={b123}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">Learn <span className="text-warning">& </span>Explore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/home' className='header'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/courses' className='header'>Courses</Link></Nav.Link>
                            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                            <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link><Link to='/login'>Log In</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;