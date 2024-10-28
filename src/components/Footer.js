import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';  // Importing social icons
import { faX } from '@fortawesome/free-solid-svg-icons';

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
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
  <h5>Social Media</h5>
  <p className="social-text">Follow us on social media:</p> {/* Text with social-text class */}
  <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faX} />
    </a>
    <a href="https://Instagram.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a href="https://Tiktok.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTiktok} />
    </a>
  </div>
</Col>

        </Row>
        {/* Line separator */}
        <div className="footer-line"></div>
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
