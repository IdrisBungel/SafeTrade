import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div className="contact-section">
      <Container>
        <h2 className="text-center mb-5">Contact Us</h2>
        <Row>
          <Col md={8} className="mx-auto">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
