import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons'; // Importing icons
import LoginModal from './LoginModal'; // Assuming this is your Login Modal

function HeroSection() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="hero-title">Welcome to SafeTrade</h1>
            <p className="hero-subtitle">Buy, Sell, and Trade with Complete Confidence.</p>
            
            {/* Instructional Text */}
            <p className="hero-instruction">
              New to SafeTrade? <strong>Get started</strong> or <strong>log in</strong> below:
            </p>

            {/* Buttons with Icons */}
            <div className="hero-buttons">
              <Button variant="light" href="/signup" className="hero-btn me-2">
                <FontAwesomeIcon icon={faUserPlus} className="me-2" /> Get Started
              </Button>
              <Button variant="primary" onClick={() => setShowLoginModal(true)} className="hero-btn">
                <FontAwesomeIcon icon={faSignInAlt} className="me-2" /> Login To Your Account
              </Button>
            </div>
          </Col>
          
          <Col md={6} className="text-center">
            {/* Optionally, you can add an image here */}
          </Col>
        </Row>

        {/* Login Modal */}
        <LoginModal show={showLoginModal} handleClose={() => setShowLoginModal(false)} />
      </Container>
    </div>
  );
}

export default HeroSection;