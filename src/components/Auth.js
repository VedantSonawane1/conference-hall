import React from 'react';

const Auth = () => {
  const handleLogin = () => {
    // Redirect to OAuth endpoint
    window.location.href = '/oauth';
  };

  return (
    <div className="text-center">
      <button 
        onClick={handleLogin} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Auth;
