import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimeDivider from './components/AnimeDivider';
import './App.css';

function App() {
  return (
    <div className="App relative min-h-screen bg-black">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-gray-800/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)] animate-pulse"></div>
      </div>
      
      <Navbar />
      <main className="pt-16 lg:pl-64">
        <Hero />
        {/* <AnimeDivider /> */}
        <About />
        {/* <AnimeDivider /> */}
        <Skills />
        {/* <AnimeDivider /> */}
        <Projects />
        {/* <AnimeDivider /> */}
        <Certifications />
        {/* <AnimeDivider /> */}
        <Experience />
        {/* <AnimeDivider /> */}
        <Achievements />
        {/* <AnimeDivider /> */}
        <Contact />
        {/* <AnimeDivider /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
