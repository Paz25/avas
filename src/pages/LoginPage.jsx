import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    navigate('/');
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
      
      {/* Left Section - Hidden on Small Screens */}
      <div className="d-none d-md-block w-50 position-relative"></div>
      
      {/* Login Section with Responsive Layout */}
      <div className="d-flex justify-content-center align-items-center w-100 w-md-50" style={{ position: "relative", zIndex: "1", backgroundColor: "transparent" }}>
        <div className="p-5 rounded shadow-lg mx-4" style={{ maxWidth: '400px', width: '100%', backgroundColor: "#fff" }}>
          <h2 className="text-center mb-4" style={{ fontWeight: 'bold', fontFamily: 'Abril Fatface', color: '#0D330E' }}>LOGIN</h2>
          <p className="text-center mb-4" style={{ fontFamily: 'Poppins' }}>Login with your account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" style={{ fontFamily: 'Poppins' }}>Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="form-control py-2" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ fontFamily: 'Poppins' }}>Password</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                className="form-control py-2" 
                placeholder="Enter your password" 
                required 
              />
            </div>
            <button type="submit" className="btn w-100 py-2" style={{ backgroundColor: '#0D330E', color: '#fff', fontFamily: 'Poppins' }}>Log In</button>
          </form>
          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none" style={{ fontFamily: 'Poppins' }}>Forgot password?</a>
          </div>
          <div className="text-center mt-2">
            <span style={{ fontFamily: 'Poppins' }}>Don't have an account? <a href="/RegisterPage" className="text-decoration-none">Sign up</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
