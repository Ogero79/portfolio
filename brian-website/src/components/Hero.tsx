'use client';

import { motion } from 'framer-motion';
import { HiArrowDown, HiSparkles } from 'react-icons/hi';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section-wrapper relative">
      <div className="page-shell">
        <div className="grid-lines" aria-hidden="true"></div>
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-copy"
          >
            <span className="pill">
              <HiSparkles size={16} />
              Full-Stack Developer & UX/UI Designer
            </span>
            <h1>
              Building <span className="gradient-text">elegant web experiences</span> with modern technology
            </h1>
            <p>
              I combine full-stack development expertise with UX/UI design skills to create responsive,
              user-friendly applications that solve real problems.
            </p>

            <div className="contact-actions">
              <a href="mailto:brianogero@kabarak.ac.ke" className="button-primary">
                <FiMail size={18} />
                Start a project
              </a>
              <a
                href="/Brian-Ogero-Resume.pdf"
                className="button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                <FiDownload size={18} />
                Download resume
              </a>
            </div>

            <div className="hero-meta">
              {[
                {
                  title: 'Full-Stack Development',
                  detail: 'React, Next.js, Node.js, Python, databases',
                },
                {
                  title: 'UX/UI Design',
                  detail: 'Figma, responsive layouts, user research',
                },
                {
                  title: 'Modern Technologies',
                  detail: 'TypeScript, Tailwind, REST APIs, cloud deployment',
                },
              ].map((item) => (
                <div key={item.title} className="outline-dashed">
                  <strong className="text-sm text-white block mb-1">{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              ))}
            </div>

            <div className="signature-card">
              <HiSparkles size={22} />
              <div>
                <strong className="block text-white">Computer Science Student & Developer</strong>
                <span className="text-xs text-slate-300/80">Building practical solutions with clean code</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-portrait"
          >
            <div className="glow-ring hero-ring">
              <div className="hero-avatar">
                <img src="/myimage.jpg" alt="Brian Ogero" />
              </div>
            </div>

            <div className="hero-floating-badge" style={{ bottom: '-8%', right: '-6%' }}>
              <span className="text-slate-300/70 text-xs uppercase tracking-widest">Connect</span>
              <span className="flex items-center gap-2">
                <a href="https://github.com/Ogero79" className="social-pill" aria-label="GitHub">
                  <FaGithub size={14} />
                </a>
                <a href="https://linkedin.com/in/brian-ogero-07739526a" className="social-pill" aria-label="LinkedIn">
                  <FaLinkedin size={14} />
                </a>
                <a href="#projects" className="social-pill" aria-label="Projects">
                  <FaArrowRight size={14} />
                </a>
              </span>
            </div>

            <button
              onClick={() => scrollToSection('#about')}
              className="ghost-button absolute -bottom-10 left-1/2 -translate-x-1/2"
              aria-label="Scroll to about section"
            >
              Explore more
              <HiArrowDown size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
