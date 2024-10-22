import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';  // Icons for input fields
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';  // Social icons

function LoginModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* "Login with" Text Above Buttons */}
        <p className="text-center">Login with</p>

        {/* Social Login Buttons */}
        <div className="social-login text-center">
          <Button variant="outline-danger" className="me-2">
            <FontAwesomeIcon icon={faGoogle} className="me-2" />
            Google
          </Button>
          <Button variant="outline-danger">
            <FontAwesomeIcon icon={faFacebookF} className="me-2" />
            Facebook
          </Button>
        </div>

        {/* Separator */}
        <div className="separator my-3">OR</div>

        {/* Slim Login Form with Icons */}
        <Form className="centered-form">
          <Form.Group controlId="formEmail">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope} className="red-icon" />
              </span>
              <Form.Control type="email" placeholder="Enter email" />
            </div>
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} className="red-icon" />
              </span>
              <Form.Control type="password" placeholder="Password" />
            </div>
          </Form.Group>

          {/* Forgot Password Link */}
          <div className="text-end mt-2">
            <a href="#forgot-password" className="forgot-password-link">Forgot password?</a>
          </div>

          <Button variant="danger" type="submit" className="mt-5 w-100 centered-button">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;