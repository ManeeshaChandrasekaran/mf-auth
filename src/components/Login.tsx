import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, RootState } from 'host/store';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const username = useSelector((state: RootState) => state.user.username);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      const userEmail = email.split('@')[0];
      
      // Simple role assignment logic - you can modify this as needed
      // For demo purposes: admin@example.com becomes admin, others become users
      const role = email.toLowerCase().includes('admin') ? 'admin' : 'user';
      
      dispatch(login({ username: userEmail, role }) as any);
      console.log('Login successful for:', email, 'with role:', role);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isLoggedIn) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Welcome back, {username}!</h2>
        <p>You are successfully logged in.</p>
        <button onClick={handleLogout} style={{ padding: '10px 20px', marginTop: '10px' }}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;