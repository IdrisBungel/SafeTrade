import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <div className="hero-section">
      <Container>
        <Row>
          <Col md={6} className="my-auto">
            <h1 className="hero-title">Welcome to SafeTrade</h1>
            <p className="hero-text">Your trusted platform for secure transactions.</p>
            <Button variant="light" href="#services" className="hero-btn">Get Started</Button>
          </Col>
          <Col md={6}>
            {/* Uncomment this section and add your image later */}
            {/* <img src="path-to-your-image.jpg" alt="Hero Image" className="img-fluid" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;