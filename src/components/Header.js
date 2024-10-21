import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';  // Importing the logo

function Header() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#bfbfbf' }} variant="light" sticky="top"> {/* Ash color background */}
      <Container>
        {/* Logo and Brand Name */}
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="SafeTrade Logo"
            width="60" // Adjust the size as needed
            height="50"
            className="d-inline-block align-center"
          />{' '}
          SafeTrade
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" style={{ color: 'black' }}>About Us</Nav.Link>
            <Nav.Link href="#services" style={{ color: 'black' }}>Services</Nav.Link>
            <Nav.Link href="#contact" style={{ color: 'black' }}>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-dark" href="#signup" className="me-2">Sign Up</Button>
            <Button variant="dark" href="#login">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;