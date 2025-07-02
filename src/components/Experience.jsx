import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const experiences = [
  {
    id: 1,
    role: 'Software Developer & Engineer Intern',
    company: 'Yug Yatra Retail (OPC) Pvt. Ltd.',
    duration: 'Jun 2025 - Aug 2025',
    description: 'Working on Real World Projects using web technologies and tools like React , ExpressJS , MongoDB , VS code , GitHub '
  },
  {
    id: 2,
    role: 'Open Source Contributor',
    company: 'Social Summer of Codes',
    duration: 'Jun 2025 - Present',
    description: 'Collaborating with team members to troubleshoot issues and implement effective resolutions in open source.'
  },
  
];

const Experience = () => {
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
    <section ref={sectionRef} id="experience" className="experience-section">
      <div className={`glass-card hero-animate${animate ? ' hero-animate-in' : ''}`}>
        <h2 className={animate ? 'hero-fade hero-fade-in' : 'hero-fade'}>Work <span className="pistachio-text">Experience</span></h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className={animate ? `timeline-item hero-fade hero-fade-in hero-fade-delay${idx+1}` : `timeline-item hero-fade hero-fade-delay${idx+1}`}>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4 className="pistachio-text">{exp.company}</h4>
                <span className="duration">{exp.duration}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;