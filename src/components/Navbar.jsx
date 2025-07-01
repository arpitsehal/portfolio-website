import React, { useState, useEffect } from 'react';
import '../App.css';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`navbar glass-card${animate ? ' navbar-animate' : ''}`}>
      <div className="logo pistachio-text">Your Name</div>
      <div className="nav-links">
        <a href="#home" className={active === 'home' ? 'active' : ''} onClick={() => setActive('home')}>Home</a>
        <a href="#about" className={active === 'about' ? 'active' : ''} onClick={() => setActive('about')}>About</a>
        <a href="#skills" className={active === 'skills' ? 'active' : ''} onClick={() => setActive('skills')}>Skills</a>
        <a href="#experience" className={active === 'experience' ? 'active' : ''} onClick={() => setActive('experience')}>Experience</a>
        <a href="#education" className={active === 'education' ? 'active' : ''} onClick={() => setActive('education')}>Education</a>
        <a href="#projects" className={active === 'projects' ? 'active' : ''} onClick={() => setActive('projects')}>Projects</a>
        <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={() => setActive('contact')}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;