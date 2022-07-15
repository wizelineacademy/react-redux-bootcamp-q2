import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    auth.login(
      user,
      password
    )(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '60%', height: '30%', textAlign: 'center' }}>
        <h2>Welcome to the WizeStore!</h2>
        <form onSubmit={handleLogin}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '70%',
              gap: '16px',
              margin: 'auto',
            }}
          >
            <input
              name="username"
              type="text"
              placeholder="Username"
              autoComplete="username"
              value={user}
              onChange={(event) => {
                setUser(event.target.value);
              }}
            />
            <input
              name="current-password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
