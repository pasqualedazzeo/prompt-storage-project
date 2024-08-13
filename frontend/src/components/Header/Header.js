import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Prompt Storage</div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#signup" className="cta-button">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;