import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Recipe Captions</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/">Features</a>
        <a href="/">Videos</a>
        <a href="/">Captions</a>
        <a href="/">Blog</a>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
