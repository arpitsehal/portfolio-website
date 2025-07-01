import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of your project and what technologies you used.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A brief description of your project and what technologies you used.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A brief description of your project and what technologies you used.',
    tags: ['JavaScript', 'Firebase', 'CSS'],
    link: '#'
  },
];

const Projects = () => {
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
    <section ref={sectionRef} id="projects" className="projects-section">
      <div className={`glass-card hero-animate${animate ? ' hero-animate-in' : ''}`}>
        <h2 className={animate ? 'hero-fade hero-fade-in' : 'hero-fade'}>My <span className="pistachio-text">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={project.id} className={animate ? `project-card hero-fade hero-fade-in hero-fade-delay${idx+1}` : `project-card hero-fade hero-fade-delay${idx+1}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="pistachio-bg">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link pistachio-text">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;