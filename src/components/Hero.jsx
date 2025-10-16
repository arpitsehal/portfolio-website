import React, { useEffect, useState } from 'react';
import '../App.css';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="home" className="hero-section" aria-label="Hero Section: Introduction and Social Links">
      <div className={`hero-content glass-card hero-animate${animate ? ' hero-animate-in' : ''}`}>
        <h1 className={animate ? 'hero-fade hero-fade-in' : 'hero-fade'}>Hi, I'm <span className="pistachio-text">Arpit Kumar</span></h1>
        <h2 className={animate ? 'hero-fade hero-fade-in hero-fade-delay1' : 'hero-fade hero-fade-delay1'}>Aspiring Web Developer</h2>
        <p className={animate ? 'hero-fade hero-fade-in hero-fade-delay2' : 'hero-fade hero-fade-delay2'}>I build sleek, responsive web and desktop apps using React, Electron, ExpressJS, and MongoDB. Passionate about clean code, intuitive UI/UX, and solving real-world problems.</p>
        <a href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-hero-goto" target="_blank" rel="noopener noreferrer">
          <button className={animate ? 'pistachio-bg hero-btn-animate hero-btn-animate-in' : 'pistachio-bg hero-btn-animate'} aria-label="Download CV">Download CV</button>
        </a>
        <div className="social-links" style={{ marginTop: '1.5rem' }} aria-label="Social Media Links">
          <a href="https://linkedin.com/in/arpitsehal" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/arpitsehal" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://x.com/_axpiit?t=txfOTWnnCPLWiC1E8HtI3g&s=09" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/sehal_arpit?igsh=NGthcG9jeGEyczVt" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
