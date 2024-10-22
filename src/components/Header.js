import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import logo from '../assets/logo.png';
import LoginModal from './LoginModal';  // Ensure the correct import path for LoginModal

function Header() {
  const [sticky, setSticky] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`header-navbar ${sticky ? 'sticky' : ''}`} variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={logo} alt="SafeTrade Logo" className="logo-img" />
          <span className="ms-2">SafeTrade</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="header-link">Home</Nav.Link>
            <Nav.Link href="#about" className="header-link">About Us</Nav.Link>
            <Nav.Link href="#services" className="header-link">Services</Nav.Link>
            <Nav.Link href="#contact" className="header-link">Contact</Nav.Link>
          </Nav>
          <Nav>
            {/* Sign Up Button */}
            <Button variant="outline-primary" href="#signup" className="me-2">Sign Up</Button>
            
            {/* Login Button to Trigger Modal */}
            <Button variant="primary" onClick={() => setShowLoginModal(true)}>
              Login
            </Button>

            {/* Render the LoginModal Component */}
            <LoginModal show={showLoginModal} handleClose={() => setShowLoginModal(false)} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
