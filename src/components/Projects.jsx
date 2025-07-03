import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const projects = [
  {
    id: 1,
    title: 'MindMate',
    description: 'MindMate –  A user-friendly AI-powered mental wellness web app that helps users track moods, build healthy habits, and stay motivated. Key features include secure login, daily mood logging with trend graphs, personalized self-care suggestions, gamified streaks & leaderboards, and a supportive community.',
    tags: ['React', 'Tailwind CSS', 'Lucide React', 'React Router', 'Node.js', 'Express', 'SQLite', 'Custom AI Logic', 'JWT', 'bcrypt', 'Axios'],
    link: 'https://github.com/arpitsehal/MindMate'
  },
  {
    id: 2,
    title: 'Lets Study',
    description: 'Let’s Study – A visually aesthetic productivity web app built with React, Tailwind CSS, and JavaScript, designed to make studying feel calm and organized. It features a Pomodoro timer, built-in Lo-fi music, notes section, and habit tracker to help users stay focused, track progress, and build consistent routines. With a soothing UI and responsive design, it transforms study sessions into a productive and mindful experience.',
    tags: ['React', 'Tailwind CSS', 'Lucide React', 'React Router', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/arpitsehal/Lets-Study'
  },
  {
    id: 3,
    title: 'LogViewer & Manager',
    description: 'LogViewer & Manager is a modern, full-stack log management tool built with React and Node.js. It offers real-time monitoring, advanced filtering, a clean responsive UI, and bulk operations. Powered by a fast Vite frontend and a Joi-validated Express backend, it provides intuitive RESTful APIs for creating, retrieving, and managing logs—all in one seamless web interface.',
    tags: ['React', 'Vite', 'Axios', 'CSS3', 'ESLint', 'Node.js', 'Express 5.1.0', 'Joi 17.13.3', 'CORS', 'JSON'],
    link: 'https://github.com/arpitsehal/Evallo-Task'
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
