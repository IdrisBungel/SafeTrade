import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import LoginModal from './LoginModal';  // Ensure the correct import path for LoginModal

function Header() {
  const [sticky, setSticky] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Navbar expand="lg" className={`header-navbar ${sticky ? 'sticky' : ''}`} variant="light" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="SafeTrade Logo" className="logo-img" />
          <span className="ms-2">SafeTrade</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Ensure all navigation links are always visible */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/#home" className="header-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/#about" className="header-link">About Us</Nav.Link>
            <Nav.Link as={Link} to="/#services" className="header-link">Services</Nav.Link>
            <Nav.Link as={Link} to="/#contact" className="header-link">Contact</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            {/* Login and Sign Up buttons */}
            <Button as={Link} to="/signup" variant="outline-primary" className="me-2 d-lg-inline-block">
              Sign Up
            </Button>
            <Button variant="primary" onClick={() => setShowLoginModal(true)} className="d-lg-inline-block">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
        {/* Login Modal */}
        <LoginModal show={showLoginModal} handleClose={() => setShowLoginModal(false)} />
      </Container>
    </Navbar>
  );
}

export default Header;