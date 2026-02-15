import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  // Determine active section based on route
  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>my portfolio</h1>
          </Link>
        </div>
        
        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={() => handleNavClick('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''}
                onClick={() => handleNavClick('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className={isActive('/skills') ? 'active' : ''}
                onClick={() => handleNavClick('skills')}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={isActive('/projects') ? 'active' : ''}
                onClick={() => handleNavClick('project')}
              >
                Project
              </Link>
            </li>
            <li className="mobile-contact">
              <button className="contact-btn-mobile" onClick={() => setIsMenuOpen(false)}>
                Contact Me
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="contact-dropdown-wrapper">
          <button className="contact-btn contact-btn-desktop" onClick={toggleContact}>
            Contact Me
          </button>
          
          {isContactOpen && (
            <div className="contact-dropdown">
              <a href="https://github.com/tnirjala" target="_blank" rel="noopener noreferrer" className="contact-dropdown-item">
                <img src="/my-portfolio/assets/git-icon.png" alt="GitHub" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/nirjala-thapa-a6a923258/" target="_blank" rel="noopener noreferrer" className="contact-dropdown-item">
                <img src="/my-portfolio/assets/linkedin-icon.png" alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:nirjalathapaaa@gmail.com" className="contact-dropdown-item">
                <img src="/my-portfolio/assets/gmail-icon.png" alt="Gmail" />
                <span>Gmail</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;