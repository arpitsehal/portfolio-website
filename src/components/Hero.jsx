import React, { useEffect, useState } from 'react';
import '../App.css';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className={`hero-content glass-card hero-animate${animate ? ' hero-animate-in' : ''}`}>
        <h1 className={animate ? 'hero-fade hero-fade-in' : 'hero-fade'}>Hi, I'm <span className="pistachio-text">Your Name</span></h1>
        <h2 className={animate ? 'hero-fade hero-fade-in hero-fade-delay1' : 'hero-fade hero-fade-delay1'}>Your Profession</h2>
        <p className={animate ? 'hero-fade hero-fade-in hero-fade-delay2' : 'hero-fade hero-fade-delay2'}>A brief introduction about yourself and what you do.</p>
        <button className={animate ? 'pistachio-bg hero-btn-animate hero-btn-animate-in' : 'pistachio-bg hero-btn-animate'}>Download CV</button>
        <div className="social-links" style={{ marginTop: '1.5rem' }}>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;