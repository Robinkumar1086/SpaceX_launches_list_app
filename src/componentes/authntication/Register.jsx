// Signup.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, setError, clearError } from '../../Store/authslice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const handleSignup = () => {
    // Simulate backend registration (can be replaced with real API calls)
    if (username && email && password) {
      const newUser = { username, email, password };
      dispatch(register(newUser));
      dispatch(clearError());
      navigate('/login');
    } else {
      dispatch(setError('Please fill in all fields'));
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
