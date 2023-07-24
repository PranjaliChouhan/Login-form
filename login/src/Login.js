import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaUserCircle,FaLock,FaGithubSquare} from "react-icons/fa";
import {AiFillFacebook,AiFillGoogleSquare, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);

    }
    const handlePasswordChange=(e)=>{
       setPassword(e.target.value);
    }
    const handleShowPassword = () => {
      setShowPassword(!showPassword); 
    };
     
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Submitted form:', { email, password });
        setEmail('');
        setPassword('');
    }

    return (
        <>
          <div className="container-fluid vh-100 d-flex ">
            <div className="login-form p-4 rounded-lg bg-transparent">
              <div className="card">
                
                  <h2 className="text-center mb-4">Login</h2>
                 
    
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
                        type={showPassword ? 'text' : 'password'} // Use type="password" instead of type="text"
                        id="password"
                        className="form-control bg-transparent"
                        value={password}
                        placeholder="Enter Password"
                        onChange={handlePasswordChange}
                        required
                      />
                      <span className="eye-icon" onClick={handleShowPassword}>
                  {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                </span>
                    </div>
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
                        Login
                      </button>
                      <p className="option">Or</p>
                    </div>
                  </form>
                  
                  <div className="card-header">
                    <div className="d-flex justify-content-center social_icon">
                    <span>
                    <AiFillFacebook size={30} />
                    </span>
                    <span>
                   < AiFillGoogleSquare size={30}/>
                    </span>
                    <span>
                    <FaGithubSquare size={30}/>
                    </span>
                  </div>
                </div>
                </div>
                <div className="card-footer">
                   <div className="d-flex justify-content-center links">
                            Don't have an account?<Link to="/signup">Sign Up</Link>
                    </div>
                   <div className="d-flex justify-content-center">
                        <Link to="/ForgotPassword">Forgot your password?</Link>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default Login;