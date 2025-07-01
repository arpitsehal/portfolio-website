import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const About = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className={`glass-card hero-animate${animate ? ' hero-animate-in' : ''}`}>
        <h2 className={animate ? 'hero-fade hero-fade-in' : 'hero-fade'}>About <span className="pistachio-text">Me</span></h2>
        <div className="about-content">
          <div className="about-text">
            <p className={animate ? 'hero-fade hero-fade-in hero-fade-delay1' : 'hero-fade hero-fade-delay1'}>
              Detailed information about yourself, your background, and your passions.
              You can talk about what drives you in your profession and personal life.
            </p>
            <p className={animate ? 'hero-fade hero-fade-in hero-fade-delay2' : 'hero-fade hero-fade-delay2'}>
              Highlight your unique qualities and what makes you stand out from others
              in your field.
            </p>
          </div>
          <div className={animate ? 'about-image hero-fade hero-fade-in hero-fade-delay3' : 'about-image hero-fade hero-fade-delay3'}>
            {/* Replace with your image */}
            <div className="image-placeholder pistachio-bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;