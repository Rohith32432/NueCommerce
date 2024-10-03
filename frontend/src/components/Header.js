import React from 'react';

const Header = ({ onLogout }) => {
  return (
    <header>
      <h1>E-Commerce Platform</h1>
      <button onClick={onLogout}>Logout</button>
    </header>
  );
};

export default Header;
