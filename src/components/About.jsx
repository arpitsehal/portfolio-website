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
    <section id="about" className="about-section" ref={sectionRef} aria-label="About Me Section">
      <div className={`glass-card hero-animate${animate ? ' hero-animate-in' : ''}`}>
        <h2 className={animate ? 'hero-fade hero-fade-in' : 'hero-fade'}>About <span className="pistachio-text">Me</span></h2>
        <div className="about-content">
          <div className="about-text">
            <p className={animate ? 'hero-fade hero-fade-in hero-fade-delay1' : 'hero-fade hero-fade-delay1'}>
            I'm Arpit Kumar, a passionate Computer Science student at IK Gujral Punjab Technical University, currently immersed in full-stack development and software engineering. My journey began with C/C++, and since then, I've embraced a range of technologies—JavaScript, ReactJS, ElectronJS, ExpressJS, MongoDB, and MySQL—used to build both web and desktop applications.
            </p>
            <p className={animate ? 'hero-fade hero-fade-in hero-fade-delay2' : 'hero-fade hero-fade-delay2'}>
              <b>Front‑end & UI:</b> I craft intuitive, responsive interfaces with React and Electron.
            </p>
            <p className={animate ? 'hero-fade hero-fade-in hero-fade-delay2' : 'hero-fade hero-fade-delay2'}>
              <b>Back‑end: </b> I engineer robust APIs using ExpressJS, integrating MongoDB and MySQL for efficient data handling.
            </p>
            <p className={animate ? 'hero-fade hero-fade-in hero-fade-delay2' : 'hero-fade hero-fade-delay2'}>
              <b>Project Workflow:</b> From designing database schemas and implementing business logic, to deploying features and documenting results with tools like Postman and Excel.
            </p>
            <p className={animate ? 'hero-fade hero-fade-in hero-fade-delay2' : 'hero-fade hero-fade-delay2'}>
              <b>Teamwork & Communication:</b> I'm a proactive collaborator, skilled at conveying technical ideas clearly and driving group progress.
            </p>
          </div>
          <div className={animate ? 'about-image hero-fade hero-fade-in hero-fade-delay3' : 'about-image hero-fade hero-fade-delay3'}>
            <img src="/arpit.jpg" alt="Arpit Kumar profile" className="about-profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;