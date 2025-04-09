import React, { useState } from 'react';
import { login, signup } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'; 
import logo from '../../assets/logo.png'; 

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    if (isSignup) {
      await signup(name, email, password);
    } else {
      await login(email, password);
    }
    navigate('/');
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleAuth} className="auth-form">
        <img src={logo} alt="Netflix Logo" className="auth-logo" />
        <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>

        {isSignup && (
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>

        <p onClick={() => setIsSignup(!isSignup)} className="auth-switch">
          {isSignup ? 'Already have an account? Sign In' : 'New to Netflix? Sign Up'}
        </p>
      </form>
    </div>
  );
};

export default Login;







