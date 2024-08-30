import React from 'react';
import './NavBar.css'; // We'll create this CSS file next
// import personalLogo from '/personaLogo.svg'/

const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo-contact-container">
        <div className='logo'>
        <img src='/Logo.svg' alt="Logo" className='logo' />
        </div>
        <a href="#contact" className="contact-link">Contact</a>
      </div>
      <div className="nav-link-container">
        <a href="#about">About</a>
        <a href="#">Resume</a>
      </div>
    </div>
  );
};
export default NavBar;