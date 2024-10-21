import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheckCircle, faHandshake } from '@fortawesome/free-solid-svg-icons';  // Import icons

function Services() {
  return (
    <div id="services" className="services-section">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4 service-card shadow-sm" style={{ backgroundColor: '#ffebee' }}> {/* Light red background for this card */}
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faLock} className="service-icon" /> {/* Lock Icon */}
                <Card.Title>Secure Transactions</Card.Title>
                <Card.Text>We hold payments securely until both parties are satisfied with the trade.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 service-card shadow-sm" style={{ backgroundColor: '#e8f5e9' }}> {/* Light green background */}
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faCheckCircle} className="service-icon" /> {/* Check Circle Icon */}
                <Card.Title>Verified Sellers</Card.Title>
                <Card.Text>All sellers on our platform are verified to ensure authenticity.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 service-card shadow-sm" style={{ backgroundColor: '#e3f2fd' }}> {/* Light blue background */}
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faHandshake} className="service-icon" /> {/* Handshake Icon */}
                <Card.Title>Dispute Resolution</Card.Title>
                <Card.Text>If there's a problem, our dispute team is here to help resolve it quickly.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;