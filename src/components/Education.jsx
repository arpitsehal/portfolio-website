import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'IK Gujral Punjab Technical University',
    year: '2023 - 2027',
    description: 'Data Structures, Algorithms, OOPSWeb Development. CGPA: 7.5/10'
  },
  {
    id: 2,
    degree: 'High School',
    institution: 'New Happy Senior Secondary School',
    year: '2020 - 2022',
    description: 'PCM with Computer Science. Percentage: 72%'
  },
];

const Education = () => {
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
    <section ref={sectionRef} id="education" className="education-section">
      <div className={`glass-card hero-animate${animate ? ' hero-animate-in' : ''}`}>
        <h2 className={animate ? 'hero-fade hero-fade-in' : 'hero-fade'}>My <span className="pistachio-text">Education</span></h2>
        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={edu.id} className={animate ? `timeline-item hero-fade hero-fade-in hero-fade-delay${idx+1}` : `timeline-item hero-fade hero-fade-delay${idx+1}`}>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <h4 className="pistachio-text">{edu.institution}</h4>
                <span className="duration">{edu.year}</span>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;