
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './imge.png'
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            alt=""
                            width="35"
                            height="35"
                            className="d-inline-block align-top fw-bold"
                        />{' '}
                        Tour
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/home" className="items">Home</Link>
                            <Link to="/events" className="items">Events</Link>
                            <Link to="/admin" className="items">Admin</Link>
                            <Link to="/contact" className="items">Contact</Link>
                            <Link to="/admin" className="items">Admin</Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;