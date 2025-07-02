import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Node.js', level: 80 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Python', level: 70 },
];

// Partitioned skill categories
const languages = [
  { name: 'C/C++', level: 80 },
  { name: 'JavaScript', level: 85 },
];
const frameworks = [
  { name: 'ReactJS', level: 90 },
  { name: 'ElectronJS', level: 75 },
  { name: 'ExpressJS', level: 80 },
];
const tools = [
  { name: 'MySQL', level: 80 },
  { name: 'Excel', level: 85 },
  { name: 'PowerPoint', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Postman', level: 70 },
];
const softSkills = [
  { name: 'Report Building', level: 80 },
  { name: 'Excellent Communication', level: 85 },
  { name: 'Team Leading', level: 75 },
];
const platforms = [
  { name: 'VS Code', level: 90 },
  { name: 'Git', level: 85 },
  { name: 'GitHub', level: 85 },
  { name: 'Canva', level: 80 },
];

const Skills = () => {
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
    <section ref={sectionRef} id="skills" className="skills-section">
      <div className={`glass-card hero-animate${animate ? ' hero-animate-in' : ''}`}>
        <h2 className={animate ? 'hero-fade hero-fade-in' : 'hero-fade'}>My <span className="pistachio-text">Skills</span></h2>
        <div className="skills-row">
          <div className="skills-category">
            <h3>Languages</h3>
            {languages.map((skill, index) => (
              <div key={skill.name} className={animate ? `skill-item hero-fade hero-fade-in hero-fade-delay${index+1}` : `skill-item hero-fade hero-fade-delay${index+1}`}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress pistachio-bg" 
                    style={{ width: animate ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-category">
            <h3>Frameworks / Libraries</h3>
            {frameworks.map((skill, index) => (
              <div key={skill.name} className={animate ? `skill-item hero-fade hero-fade-in hero-fade-delay${index+1}` : `skill-item hero-fade hero-fade-delay${index+1}`}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress pistachio-bg" 
                    style={{ width: animate ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-category">
            <h3>Tools</h3>
            {tools.map((skill, index) => (
              <div key={skill.name} className={animate ? `skill-item hero-fade hero-fade-in hero-fade-delay${index+1}` : `skill-item hero-fade hero-fade-delay${index+1}`}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress pistachio-bg" 
                    style={{ width: animate ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-category">
            <h3>Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <div key={skill.name} className={animate ? `skill-item hero-fade hero-fade-in hero-fade-delay${index+1}` : `skill-item hero-fade hero-fade-delay${index+1}`}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress pistachio-bg" 
                    style={{ width: animate ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-category">
            <h3>Platforms</h3>
            {platforms.map((skill, index) => (
              <div key={skill.name} className={animate ? `skill-item hero-fade hero-fade-in hero-fade-delay${index+1}` : `skill-item hero-fade hero-fade-delay${index+1}`}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress pistachio-bg" 
                    style={{ width: animate ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;