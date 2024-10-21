import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Information</h5>
            <ul className="footer-details">
              <li><strong>Email:</strong> support@safetrade.com</li>
              <li><strong>Phone:</strong> +44 123 456 7890</li>
              <li><strong>Location:</strong> 123 SafeTrade St, Hatfield, UK</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Operating Hours</h5>
            <p>Mon-Fri: 9am - 6pm</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>Social media links (optional)</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={12}>
            <p>© 2024 SafeTrade. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
