import React, { useState, useEffect } from 'react';
import '../App.css';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <nav className={`navbar glass-card${animate ? ' navbar-animate' : ''}`} aria-label="Main Navigation">
      <div className="logo pistachio-text">Arpit Kumar</div>
      <div className="nav-links" role="menubar">
        <a href="#home" className={active === 'home' ? 'active' : ''} onClick={() => setActive('home')} role="menuitem" tabIndex="0">Home</a>
        <a href="#about" className={active === 'about' ? 'active' : ''} onClick={() => setActive('about')} role="menuitem" tabIndex="0">About</a>
        <a href="#skills" className={active === 'skills' ? 'active' : ''} onClick={() => setActive('skills')} role="menuitem" tabIndex="0">Skills</a>
        <a href="#experience" className={active === 'experience' ? 'active' : ''} onClick={() => setActive('experience')} role="menuitem" tabIndex="0">Experience</a>
        <a href="#education" className={active === 'education' ? 'active' : ''} onClick={() => setActive('education')} role="menuitem" tabIndex="0">Education</a>
        <a href="#certifications" className={active === 'certifications' ? 'active' : ''} onClick={() => setActive('certifications')} role="menuitem" tabIndex="0">Certifications</a>
        <a href="#projects" className={active === 'projects' ? 'active' : ''} onClick={() => setActive('projects')} role="menuitem" tabIndex="0">Projects</a>
        <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={() => setActive('contact')} role="menuitem" tabIndex="0">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;