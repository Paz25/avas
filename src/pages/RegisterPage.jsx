import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    navigate('/LoginPage');
  };

  return (
    <div className="position-relative vh-100 d-flex align-items-center justify-content-center mt-5">
      {/* Background Video Covering Both Sections from Local File */}
      <div className="position-absolute top-0 left-0 w-100 h-100" style={{ maxWidth: '100%', width: '100%', backgroundColor: "black", opacity: "65%"}}>
      </div>
        <video 
          className="position-absolute top-0 left-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: "-1" }}
          autoPlay 
          loop 
          muted
        >
          <source src="/src/assets/video/videoLogin.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    
      
      {/* Registration Section with Responsive Layout */}
      <div className="d-flex justify-content-center align-items-center w-100 w-md-50" style={{ position: "relative", zIndex: "1", backgroundColor: "transparent" }}>
        <div className="p-5 rounded shadow-lg mx-4" style={{ maxWidth: '600px', width: '100%', backgroundColor: "#fff" }}>
          <h2 className="text-center mb-4" style={{ fontWeight: 'bold', fontFamily: 'Abril Fatface', color: '#0D330E' }}>REGIST</h2>
          <p className="text-center mb-4" style={{ fontFamily: 'Poppins' }}>Login with your account</p>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label" style={{ fontFamily: 'Poppins' }}>Full Name</label>
                <input 
                  type="text" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  className="form-control py-2" 
                  placeholder="Full Name" 
                  required 
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label" style={{ fontFamily: 'Poppins' }}>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="form-control py-2" 
                  placeholder="Email Address" 
                  required 
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <label className="form-label" style={{ fontFamily: 'Poppins' }}>Password</label>
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  className="form-control py-2" 
                  placeholder="Password" 
                  required 
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <label className="form-label" style={{ fontFamily: 'Poppins' }}>Confirm Password</label>
                <input 
                  type="password" 
                  name="confirmPassword" 
                  value={formData.confirmPassword} 
                  onChange={handleChange} 
                  className="form-control py-2" 
                  placeholder="Confirm Password" 
                  required 
                />
              </div>
            </div>
            <button type="submit" className="btn w-100 py-2" style={{ backgroundColor: '#0D330E', color: '#fff', fontFamily: 'Poppins' }}>Sign up</button>
          </form>
          <div className="text-center mt-3">
            <span style={{ fontFamily: 'Poppins' }}>Already have an account? <a href="#" onClick={() => navigate('/LoginPage')} className="text-decoration-none">Log in</a></span>
          </div>
        </div>
      </div>

      {/* Right Section - Hidden on Small Screens */}
      <div className="d-none d-md-block w-50 position-relative"></div>
      </div>
  );
};

export default RegisterPage;
