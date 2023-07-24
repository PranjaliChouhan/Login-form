import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
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

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isStrong, setIsStrong] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState('');
  const [error, setError] = useState(''); // Add error state

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsStrong(isStrongPassword(newPassword)); // Check if password is at least 8 characters long
  };

  const handleShowPassword = () => {
  
    setShowPassword(!showPassword); 
   
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleShowConfirmPassword = () => {
    
    setShowConfirmPassword(!showConfirmPassword); 
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    console.log('Submitted form:', { email, password, confirmPassword });
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsStrong(false); // Reset password strength check
    setError('');

    // Redirect to the login page after form submission
    navigate('/');
  };

  return (
    <div className="container-fluid vh-100 d-flex ">
      <div className="login-form p-4 rounded-lg bg-transparent">
        <div className="card">
          <h2 className="text-center mb-4">Forgot Password</h2>

          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-transparent">
                    <MdEmail size={30} />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control bg-transparent"
                  value={email}
                  placeholder="Enter Email"
                  onChange={handleEmailChange}
                  required
                />
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-transparent">
                    <FaLock size={30} />
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
                <div className="input-group-prepend">
                  <span className="input-group-text bg-transparent">
                    <FaLock size={30} />
                  </span>
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
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

              <div className="form-group">
                <button className="login_btn" type="submit">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
