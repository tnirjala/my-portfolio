import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h2>Let's built something great together.</h2>
            <p>Open to projects, collaborations and ideas.</p>
          </div>

          <div className="footer-right">
            <h3>Contact Me</h3>
            
            <a href="https://github.com/tnirjala" className="contact-item" target="_blank" rel="noopener noreferrer">
              <span>Github</span>
              <div className="contact-icon github">
                <img src="/assets/git-icon.png" alt="Github" />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/nirjala-thapa-a6a923258/" className="contact-item" target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
              <div className="contact-icon linkedin">
                <img src="/assets/linkedin-icon.png" alt="LinkedIn" />
              </div>
            </a>

            <a href="mailto:nirjalathapaaa@gmail.com" className="contact-item">
              <span>Gmail</span>
              <div className="contact-icon gmail">
                <img src="/assets/gmail-icon.png" alt="Gmail" />
              </div>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 tnirjala</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;