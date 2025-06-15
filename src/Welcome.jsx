import React, { useEffect, useState } from 'react';
import './Welcome.css';

function Welcome() {
  const [username, setUsername] = useState('Guest');

  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  return (
    <div className="welcome-container">
      <h2>Welcome, {username}!</h2>
      <p>You have successfully registered.</p>
    </div>
  );
}

export default Welcome;
