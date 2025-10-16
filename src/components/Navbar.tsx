"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [mounted, sections]);

  return (
    <div className="nav-shell">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`nav-inner ${isScrolled ? 'outline-accent' : ''}`}
      >
        <div className="nav-brand">
          <span className="availability-dot" aria-hidden="true"></span>
          <div>
            <div>Brian Ogero</div>
            <span>Full-Stack Developer</span>
          </div>
        </div>

        <div className="nav-links">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                const element = document.getElementById(section);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

      </motion.nav>
    </div>
  );
};

export default Navbar;
