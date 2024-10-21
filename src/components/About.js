import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage1 from '../assets/about1.jpg';  // First image
import aboutImage2 from '../assets/about2.jpg';  // Second image

function About() {
  return (
    <div className="about-section">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="about-title">About SafeTrade</h2>
            <p className="about-text">
              SafeTrade is a secure and reliable platform that ensures safe online transactions. Our goal is to provide both buyers and sellers with peace of mind, knowing their transactions are protected every step of the way.
              {/* SafeTrade is a trusted platform dedicated to ensuring secure online transactions for both buyers and sellers. Our mission is to create a safe, transparent environment where users can trade with confidence. */}
            </p>
            <p className="about-text">
              With verified sellers and secure payments, SafeTrade makes online trading easy and worry-free. Whether you’re buying or selling, you can trust SafeTrade to deliver a seamless experience.
              {/* By verifying sellers and securing payments, SafeTrade takes the worry out of online trading. Whether you’re buying or selling, our platform guarantees a seamless, protected experience every step of the way. */}
            </p>
          </Col>
          <Col md={6}>
            <div className="about-images">
              <img src={aboutImage1} alt="Handshake" className="about-image" />
              <img src={aboutImage2} alt="Secure Transaction" className="about-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
