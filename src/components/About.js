import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
<div className="about-section">
  <Container>
    <Row>
      <Col md={12}>
        <h2 className="about-title">About SafeTrade</h2>
        <p className="about-text">
          At <strong>SafeTrade</strong> , we ensure both buyers and sellers are fully protected. For buyers, your money is
securely held until you receive confirm the product is as promised. For sellers, SafeTrade
creates a marketplace where you are sure of getting your payment and also benefit from serious,
verified buyers, safeguarding your business from scams and fraudulent transfers. Our platform
distinguishes trustworthy sellers from bad actors, giving you the reputation you deserve.
Verified products, trusted transactions, and secure payments all in one marketplace.</p>

        <p className="about-text">
        <h4>Our Story</h4>
        Founded in 2024, SafeTrade was built to address the growing issues of fraud in online
transactions. We provide a platform where honest sellers are verified and protected, ensuring
safe, transparent, and scam free interactions for both parties.</p>
      </Col>
    </Row>
  </Container>
</div>
  );
}

export default About;