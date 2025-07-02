import React from 'react';

const Footer = () => (
  <footer className="footer-section" aria-label="Footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} Arpit Kumar</span>
      <div className="footer-socials">
        <a href="https://github.com/arpitsehal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/arpitsehal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="2005sehalarpit@gmail.com" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer; 