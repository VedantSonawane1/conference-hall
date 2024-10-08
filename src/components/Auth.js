import React from 'react';
import './Auth.css';  // Import the CSS file5

const Auth = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:8000/oauth';  // Replace with API endpoint to initiate OAuth
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
