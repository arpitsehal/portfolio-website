import React, { useEffect, useRef, useState } from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "Deloitte Australia - Technology Job Simulation",
    issuer: "Deloitte",
    date: "June 2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_9Wg2EFceZjK6J4XtS_1749211023794_completion_certificate.pdf",
  },
  {
    title: "Pragyan 2025",
    issuer: "NIT Tiruchirappalli",
    date: "March 2025",
    link: "https://drive.google.com/file/d/1k6vfombV02pY7ZOuqGkwQWuY8iwhu8k2/view?usp=sharing",
  },
  {
    title: "Samsung Galaxy AI Treasure Hunt",
    issuer: "Samsung",
    date: "June 2025",
    link: "https://drive.google.com/file/d/10FX7C0sjQiNHoDTg5C5N5eujGqE6aFFS/view?usp=sharing",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "November 2024",
    link: "https://badgr.com/public/assertions/-pIUES-tRFCdOPyhsE0LTQ",
  },
];

const Certifications = () => {
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
    <section id="certifications" className="certifications-section" ref={sectionRef} aria-labelledby="certifications-heading">
      <div className={`glass-card hero-animate${animate ? ' hero-animate-in' : ''}`}>
        <h2 id="certifications-heading" className={animate ? 'hero-fade hero-fade-in' : 'hero-fade'}>
          My <span className="pistachio-text">Certifications</span>
        </h2>
        <div className="certifications-list">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={
                animate
                  ? `cert-card cert-fade cert-fade-in cert-fade-delay${idx + 1}`
                  : `cert-card cert-fade cert-fade-delay${idx + 1}`
              }
              tabIndex="0"
              aria-label={`Certification: ${cert.title} from ${cert.issuer}, awarded ${cert.date}`}
            >
              <h3>{cert.title}</h3>
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              <p><strong>Date:</strong> {cert.date}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" aria-label={`View certificate for ${cert.title}`}>View Certificate</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 