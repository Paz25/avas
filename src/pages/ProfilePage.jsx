import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Button, Form, Card, Modal } from 'react-bootstrap';
import ChangePasswordModal from '../components/ChangePasswordModal';

import '../styles/Profile.css';

const ProfilePage = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState({ type: '', address: '' });
  
  // Sample user data - you would likely fetch this from an API
  const [userData, setUserData] = useState({
    fullName: 'Kaisar Simatupang',
    phoneNumber: '0813 4428 9836',
    emailAddress: 'kaisarsimaa18@gmail.com',
    birthDate: '-',
    addresses: [
      {
        type: 'Home',
        address: 'Jalan Dr. Sutomo No.16, Yogyakarta, Indonesia'
      },
      {
        type: 'Office',
        address: 'Jalan Dr. Sutomo No.16, Yogyakarta, Indonesia'
      }
    ],
    profilePicture: '/src/assets/images/PP.png'
  });
  
  // Create a copy of user data for editing
  const [editedUserData, setEditedUserData] = useState({...userData});

  // Modal handlers
  const handleOpenPasswordModal = () => setShowPasswordModal(true);
  const handleClosePasswordModal = () => setShowPasswordModal(false);
  
  const handleOpenAddressModal = () => setShowAddressModal(true);
  const handleCloseAddressModal = () => {
    setShowAddressModal(false);
    setNewAddress({ type: '', address: '' });
  };
  
  // Edit handlers
  const handleEditClick = () => {
    setIsEditing(true);
    setEditedUserData({...userData});
  };
  
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedUserData({...userData});
  };
  
  const handleSaveEdit = () => {
    setUserData({...editedUserData});
    setIsEditing(false);
    // Here you would typically send the updated data to your backend API
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({
      ...editedUserData,
      [name]: value
    });
  };
  
  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = [...editedUserData.addresses];
    updatedAddresses[index] = {
      ...updatedAddresses[index],
      [field]: value
    };
    
    setEditedUserData({
      ...editedUserData,
      addresses: updatedAddresses
    });
  };
  
  const handleNewAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: value
    });
  };
  
  const handleAddAddress = () => {
    // Validate the new address
    if (!newAddress.type.trim() || !newAddress.address.trim()) {
      // You might want to show an error message here
      return;
    }
    
    // Add the new address to the user data
    const updatedAddresses = [...editedUserData.addresses, newAddress];
    
    setEditedUserData({
      ...editedUserData,
      addresses: updatedAddresses
    });
    
    // If not in edit mode, also update the main user data
    if (!isEditing) {
      setUserData({
        ...userData,
        addresses: [...userData.addresses, newAddress]
      });
    }
    
    // Close the modal and reset new address form
    handleCloseAddressModal();
  };
  
  const handleRemoveAddress = (index) => {
    const updatedAddresses = [...editedUserData.addresses];
    updatedAddresses.splice(index, 1);
    
    setEditedUserData({
      ...editedUserData,
      addresses: updatedAddresses
    });
  };

  return (
    <Container className="pt-5">
      <Row className="pt-5 justify-content-center">
        <Col md={12} lg={10}>
          <Card className="border-0">
            <Card.Body>
              <Row>
                {/* Left Section */}
                <Col md={5} className="order-1 mb-4 mb-md-0 d-flex flex-column align-items-center">
                  <div className="position-relative mb-4">
                    <div 
                      className="rounded-circle overflow-hidden" 
                      style={{ width: '150px', height: '150px', margin: '0 auto' }}
                    >
                      <img 
                        src={userData.profilePicture} 
                        alt="Profile" 
                        className="w-100 h-100 object-fit-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/150';
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="d-grid gap-2 w-100" style={{ maxWidth: '250px' }}>
                    <Button variant="" className="mb-2 profile-buttons">Change Photo</Button>
                    <Button 
                      variant="" 
                      className="mb-2 profile-buttons"
                      onClick={handleOpenPasswordModal}
                    >
                      Change Password
                    </Button>
                    {!isEditing ? (
                      <Button 
                        variant="" 
                        className="mb-2 profile-buttons"
                        onClick={handleEditClick}
                      >
                        Edit Profile
                      </Button>
                    ) : null}
                    <Button variant="success" className="mb-2" style={{ backgroundColor: '#66754C'}}>Log out</Button>
                  </div>
                </Col>
                
                {/* Right Section */}
                <Col md={7} className="order-2">
                  {/* Save/Cancel buttons for edit mode */}
                  {isEditing && (
                    <div className="d-flex justify-content-end mb-3">
                      <Button 
                        variant="outline-danger" 
                        className="me-2"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </Button>
                      <Button 
                        variant="success" 
                        style={{ backgroundColor: '#66754C'}}
                        onClick={handleSaveEdit}
                      >
                        Save Changes
                      </Button>
                    </div>
                  )}
                  
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold" style={{ fontFamily: 'Poppins'}}>Full name</Form.Label>
                      {isEditing ? (
                        <Form.Control 
                          type="text" 
                          name="fullName"
                          value={editedUserData.fullName} 
                          onChange={handleInputChange}
                        />
                      ) : (
                        <Form.Control 
                          type="text" 
                          value={userData.fullName} 
                          readOnly 
                          className="bg-light"
                        />
                      )}
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold" style={{ fontFamily: 'Poppins'}}>Phone number</Form.Label>
                      {isEditing ? (
                        <Form.Control 
                          type="text" 
                          name="phoneNumber"
                          value={editedUserData.phoneNumber} 
                          onChange={handleInputChange}
                        />
                      ) : (
                        <Form.Control 
                          type="text" 
                          value={userData.phoneNumber} 
                          readOnly 
                          className="bg-light"
                        />
                      )}
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold" style={{ fontFamily: 'Poppins'}}>Email address</Form.Label>
                      {isEditing ? (
                        <Form.Control 
                          type="email" 
                          name="emailAddress"
                          value={editedUserData.emailAddress} 
                          onChange={handleInputChange}
                        />
                      ) : (
                        <Form.Control 
                          type="email" 
                          value={userData.emailAddress} 
                          readOnly 
                          className="bg-light"
                        />
                      )}
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold" style={{ fontFamily: 'Poppins'}}>Birth Date</Form.Label>
                      {isEditing ? (
                        <Form.Control 
                          type="date" 
                          name="birthDate"
                          value={editedUserData.birthDate !== '-' ? editedUserData.birthDate : ''} 
                          onChange={handleInputChange}
                        />
                      ) : (
                        <Form.Control 
                          type="text" 
                          value={userData.birthDate} 
                          readOnly 
                          className="bg-light"
                        />
                      )}
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Form.Label className="fw-bold mb-0" style={{ fontFamily: 'Poppins'}}>Your Address</Form.Label>
                      </div>
                      
                      <div className="mt-2">
                        {(isEditing ? editedUserData.addresses : userData.addresses).map((address, index) => (
                          <Card key={index} className={`mb-2 ${!isEditing ? 'bg-light' : ''} border-0`}>
                            <Card.Body>
                              {isEditing ? (
                                <div>
                                  <div className="d-flex justify-content-between mb-2">
                                    <Form.Group className="mb-2 flex-grow-1 me-2">
                                      <Form.Label className="small">Address Type</Form.Label>
                                      <Form.Control 
                                        type="text" 
                                        value={address.type} 
                                        onChange={(e) => handleAddressChange(index, 'type', e.target.value)}
                                      />
                                    </Form.Group>
                                    <Button 
                                      variant="outline-danger" 
                                      size="sm"
                                      className="align-self-end mb-2"
                                      onClick={() => handleRemoveAddress(index)}
                                    >
                                      <i className="bi bi-trash"></i>
                                    </Button>
                                  </div>
                                  <Form.Group>
                                    <Form.Label className="small">Address</Form.Label>
                                    <Form.Control 
                                      as="textarea" 
                                      rows={2}
                                      value={address.address} 
                                      onChange={(e) => handleAddressChange(index, 'address', e.target.value)}
                                    />
                                  </Form.Group>
                                </div>
                              ) : (
                                <div className="d-flex justify-content-between align-items-center">
                                  <div>
                                    <div className="fw-bold" style={{ fontFamily: 'Poppins'}}>{address.type}</div>
                                    <div className="text-muted small">{address.address}</div>
                                  </div>
                                  <i className="bi bi-chevron-right text-muted"></i>
                                </div>
                              )}
                            </Card.Body>
                          </Card>
                        ))}
                      </div>
                      
                      <div className="d-grid mt-3">
                        <Button 
                          variant="light" 
                          className="text-success"
                          onClick={handleOpenAddressModal}
                        >
                          Add Address
                        </Button>
                      </div>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Change Password Modal */}
      <ChangePasswordModal 
        show={showPasswordModal} 
        handleClose={handleClosePasswordModal} 
      />
      
      {/* Add Address Modal */}
      <Modal show={showAddressModal} onHide={handleCloseAddressModal} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: 'Poppins' }}>Add New Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Address Type</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Home, Office, etc."
                name="type"
                value={newAddress.type}
                onChange={handleNewAddressChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                placeholder="Enter your address"
                name="address"
                value={newAddress.address}
                onChange={handleNewAddressChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleCloseAddressModal}>
            Cancel
          </Button>
          <Button 
            variant="success" 
            onClick={handleAddAddress}
            style={{ backgroundColor: '#66754C'}}
          >
            Add Address
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProfilePage;