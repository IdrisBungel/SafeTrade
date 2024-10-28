import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import CryptoJS from 'crypto-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';  // Icons for input fields

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',  // First name(s)
    surname: '',  // Surname
    phone: '',  // Mandatory phone number
    email: '',
    password: '',
    confirmPassword: '',
    enable2FA: false,  // Two-factor authentication option
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.surname) errors.surname = 'Surname is required';
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) errors.phone = 'Please enter a valid phone number';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) errors.email = 'Please enter a valid email';
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) errors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const encryptedPassword = CryptoJS.AES.encrypt(formData.password, 'secret-key').toString();
      const encryptedData = { ...formData, password: encryptedPassword };
      console.log('Form submitted:', encryptedData);
    }
  };

  return (
    <div>
      <Header />
      <Container className="signup-container mt-5 mb-5">
        <h2 className="text-center mb-4">Create Your SafeTrade Account</h2>
        <Form onSubmit={handleSubmit}>
          <div className="signup-form-row">
            <div className="signup-form-col">
              {/* First Name Input */}
              <Form.Group controlId="formFirstName" className="mb-3">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
                <Form.Label>First Name(s)</Form.Label>
                <div className="input-with-icon">
                  <Form.Control 
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name(s)"
                    value={formData.firstName}
                    onChange={handleChange}
                    isInvalid={!!formErrors.firstName}
                  />
                  
                </div>
                <Form.Control.Feedback type="invalid">{formErrors.firstName}</Form.Control.Feedback>
              </Form.Group>

              {/* Surname Input */}
              <Form.Group controlId="formSurname" className="mb-3">
                <Form.Label>Surname</Form.Label>
                <div className="input-with-icon">
                  <Form.Control 
                    type="text"
                    name="surname"
                    placeholder="Enter your surname"
                    value={formData.surname}
                    onChange={handleChange}
                    isInvalid={!!formErrors.surname}
                  />
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                </div>
                <Form.Control.Feedback type="invalid">{formErrors.surname}</Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="signup-form-col">
              {/* Phone Number Input */}
              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <div className="input-with-icon">
                  <Form.Control 
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    isInvalid={!!formErrors.phone}
                  />
                  <FontAwesomeIcon icon={faPhone} className="input-icon" />
                </div>
                <Form.Control.Feedback type="invalid">{formErrors.phone}</Form.Control.Feedback>
              </Form.Group>

              {/* Email Input */}
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <div className="input-with-icon">
                  <Form.Control 
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!formErrors.email}
                  />
                  <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                </div>
                <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>

          {/* Password Inputs */}
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <div className="input-with-icon">
              <Form.Control 
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!formErrors.password}
              />
              <FontAwesomeIcon icon={faLock} className="input-icon" />
            </div>
            <Form.Control.Feedback type="invalid">{formErrors.password}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <div className="input-with-icon">
              <Form.Control 
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                isInvalid={!!formErrors.confirmPassword}
              />
              <FontAwesomeIcon icon={faLock} className="input-icon" />
            </div>
            <Form.Control.Feedback type="invalid">{formErrors.confirmPassword}</Form.Control.Feedback>
          </Form.Group>

          {/* Two-Factor Authentication */}
          <Form.Group controlId="form2FA" className="mb-3">
            <Form.Check 
              type="checkbox"
              label="Enable Two-Factor Authentication"
              name="enable2FA"
              checked={formData.enable2FA}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">Sign Up</Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
}

export default SignupPage;