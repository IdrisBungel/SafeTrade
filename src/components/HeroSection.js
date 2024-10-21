import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="hero-title">Welcome to SafeTrade</h1>
            <p className="hero-subtitle">Your trusted platform for secure transactions.</p>
            <Button variant="light" href="#signup" className="hero-btn">Get Started</Button>
          </Col>
          <Col md={6} className="text-center">
            {/* Optionally, we can add an image representing trust, security, or transactions */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
