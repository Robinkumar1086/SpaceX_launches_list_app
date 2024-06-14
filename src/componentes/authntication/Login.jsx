// Login.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setError, clearError } from '../../Store/authslice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Extract saveEmail and savePassword using useSelector
  const user = useSelector(state => state.auth.user);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Compare entered email and password with saved credentials
    if (email === user?.email && password === user?.password) {
      dispatch(login());
      dispatch(clearError());
      navigate('/');
    } else {
      dispatch(setError('Invalid email or password'));
      throw new Error('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
      </form>
    </div>
  );
};

export default Login;
