import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage1 from '../assets/about1.jpg';  // Adjust the path according to your file structure

import aboutImage2 from '../assets/about3.jpg';  // Adjust the path according to your file
function About() {
  return (
    <div id="about" className="about-section">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="about-title">About SafeTrade</h2>
            <p className="about-text">
              SafeTrade is a secure and reliable platform that ensures safe online transactions. Our goal is to provide both buyers and sellers with peace of mind, knowing their transactions are protected every step of the way.
            </p>
            <p className="about-text">
              With verified sellers and secure payments, SafeTrade makes online trading easy and worry-free. Whether you’re buying or selling, you can trust SafeTrade to deliver a seamless experience.
            </p>
          </Col>
          <Col md={6}>
            <div className="about-images">
              {/* Display two images side-by-side */}
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