import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const Contact = () => {
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
    <section ref={sectionRef} id="contact" className="contact-section">
      <div className={`glass-card hero-animate${animate ? ' hero-animate-in' : ''}`}>
        <h2 className={animate ? 'hero-fade hero-fade-in' : 'hero-fade'}>Contact <span className="pistachio-text">Me</span></h2>
        <div className="contact-container">
          <div className={animate ? 'contact-info hero-fade hero-fade-in hero-fade-delay1' : 'contact-info hero-fade hero-fade-delay1'}>
            <h3>Get in Touch</h3>
            <p>
              Feel free to reach out for collaborations or just a friendly hello.
              I'll try my best to get back to you!
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <i className="fas fa-envelope"></i>
                <span>your.email@example.com</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-phone"></i>
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Your City, Country</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className={animate ? 'contact-form hero-fade hero-fade-in hero-fade-delay2' : 'contact-form hero-fade hero-fade-delay2'}>
            <iframe 
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
              width="100%" 
              height="1000" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Google Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;