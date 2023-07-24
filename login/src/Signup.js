import React, { useState } from 'react';

import { FaUserCircle, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
function isStrongPassword(password) {
  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Check if the password contains both uppercase and lowercase letters
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one digit
  if (!/\d/.test(password)) {
    return false;
  }

  // Check if the password contains at least one special character
  if (!/[!@#$%^&*]/.test(password)) {
    return false;
  }

  return true;
}

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isStrong, setIsStrong] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState('');
  const [error, setError] = useState('');

   const navigate = useNavigate(); // Initialize useNavigate hook
  
   const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsStrong(isStrongPassword(newPassword)); 
  };
  
  const handleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleShowConfirmPassword = () => {
    
    setShowConfirmPassword(!showConfirmPassword); 
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }
    console.log('Submitted form:', { email, password, confirmPassword });
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsStrong(false); 
    setError('');
    navigate('/');
  };

  return (
    
        <>
          <div className="container-fluid vh-100 d-flex ">
            <div className="login-form p-4 rounded-lg bg-transparent">
              <div className="card">
                
                  <h2 className="text-center mb-4">Signup</h2>
                 
    
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group form-group ">
                      <div className="input-group-prepend ">
                        <span className="input-group-text bg-transparent">
                          <FaUserCircle  size={30} />
                        </span>
                      </div>
                      <input
                        type="text"
                        id="email"
                        className="form-control bg-transparent  "
                        value={email}
                        placeholder="Enter Email"
                        onChange={handleEmailChange}
                        required
                      />
                    </div>
                    <div className="input-group form-group">
                      <div className="input-group-prepend  ">
                        <span className="input-group-text bg-transparent">
                        <FaLock  size={30}/>
                        </span>
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className="form-control bg-transparent"
                        value={password}
                        placeholder="Enter Password"
                        onChange={handlePasswordChange}
                        required
                      />
                       <span className="eye-icon" onClick={handleShowPassword}>
                          {showPassword ? <AiFillEyeInvisible size={20}/> : <AiFillEye size={20}/>}
                        </span>
                      </div>
                      {password && (
                      <p style={{ color: isStrong ? 'green' : 'red' }}>
                        {isStrong ? 'Strong Password' : 'Weak Password'}
                       </p>
                       )}
                      <div className="input-group form-group">
                      <div className="input-group-prepend  ">
                        <span className="input-group-text bg-transparent">
                        <FaLock  size={30}/>
                        </span>
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'} 
                        id="password"
                        className="form-control bg-transparent"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                      <span className="eye-icon" onClick={handleShowConfirmPassword}>
                      {showConfirmPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                      </span>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <div className="centered-below">
                        <div className="row align-items-center remember">
                            <div className="col">
                                <input
                                   className="form-check-input bg-transparent"
                                   type="checkbox"
                                   value=""
                                   id="flexCheckDefault"
                                 />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                               Remember Me
                          </label>
                              </div>
                         </div>
                      </div>
                    <div className="form-group">
                      <button className=" login_btn " type="submit">
                        Signup
                      </button>
                      </div>
                  </form>
                  
                 
                </div>
                </div>
                
                </div>
              </div>
            
          
        </>
      );
    };
    
    export default Signup;