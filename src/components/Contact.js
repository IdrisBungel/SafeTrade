import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div className="contact-section">
      <Container>
        <Row>
          {/* Contact Information Card */}
          <Col md={5}>
            <Card className="contact-card">
              <Card.Body>
                <h2>Contact Information</h2>
                <p>Feel free to reach out via email, phone, or visit our office:</p>
                <ul className="contact-details">
                  <li><strong>Email:</strong> support@safetrade.com</li>
                  <li><strong>Phone:</strong> +44 123 456 7890</li>
                  <li><strong>Location:</strong> 123 SafeTrade St, Hatfield, UK</li>
                  <li><strong>Hours:</strong> Mon-Fri, 9am - 6pm</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form Card */}
          <Col md={7}>
            <Card className="contact-card">
              <Card.Body>
                <h2>Get in Touch</h2>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group controlId="formMessage">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="send-btn">Send Message</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
