import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="background-shapes">
        <div className="shape shape-circle shape1"></div>
        <div className="shape shape-blob shape2"></div>
        <div className="shape shape-circle shape3"></div>
        <div className="shape shape-blob shape4"></div>
      </div>
      <Navbar />
      <div className="sections">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;