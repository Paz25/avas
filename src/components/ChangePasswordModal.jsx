import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

const ChangePasswordModal = ({ show, handleClose }) => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle password validation and update
    console.log('Password data submitted:', passwordData);
    // Reset form
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Body className="py-4 px-5">
        <h2 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Abril Fatface' }}>CHANGE PASSWORD</h2>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Current Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handleChange}
              className="py-3"
              style={{ backgroundColor: '#F0F2EE', fontFamily: 'Poppins' }}
              placeholder="-"
            />
          </Form.Group>
          
          <Form.Group className="mb-4">
            <Form.Label style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>New password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handleChange}
              className="py-3"
              style={{ backgroundColor: '#F0F2EE', fontFamily: 'Poppins' }}
              placeholder="-"
            />
          </Form.Group>
          
          <Form.Group className="mb-4">
            <Form.Label style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>Comfirm new password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handleChange}
              className="py-3"
              style={{ backgroundColor: '#F0F2EE', fontFamily: 'Poppins' }}
              placeholder="-"
            />
          </Form.Group>
          
          <Form.Group className="mb-4">
            <Form.Check 
              type="checkbox"
              id="show-password-checkbox"
              label="Show password"
              onChange={togglePasswordVisibility}
              style={{ fontFamily: 'Poppins'}}
              checked={showPassword}
            />
          </Form.Group>
          
          <div className="d-flex justify-content-end gap-3 mt-5">
            <Button 
              variant="outline-danger" 
              onClick={handleClose}
              className="px-4 py-2"
              style={{ fontFamily: 'Poppins' }}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              style={{ backgroundColor: '#5F7A61', borderColor: '#5F7A61', fontFamily: 'Poppins' }}
              className="px-4 py-2"
            >
              Save Change
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ChangePasswordModal;