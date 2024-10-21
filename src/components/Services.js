import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCheckCircle, faHandshake } from '@fortawesome/free-solid-svg-icons';  // Import icons

function Services() {
  return (
    <div className="services-section">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card className="service-card">
              <Card.Body>
                <FontAwesomeIcon icon={faShieldAlt} className="service-icon" />
                <Card.Title>Secure Transactions</Card.Title>
                <Card.Text>
                  We hold payments securely until both parties are satisfied with the trade.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Body>
                <FontAwesomeIcon icon={faCheckCircle} className="service-icon" />
                <Card.Title>Verified Sellers</Card.Title>
                <Card.Text>
                  All sellers on our platform are verified to ensure authenticity and trust.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card">
              <Card.Body>
                <FontAwesomeIcon icon={faHandshake} className="service-icon" />
                <Card.Title>Dispute Resolution</Card.Title>
                <Card.Text>
                  Our team is here to help resolve any issues quickly and efficiently.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
