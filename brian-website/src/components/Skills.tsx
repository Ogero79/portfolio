'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  SiDocker,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const capabilityStacks = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, interactive user interfaces with modern JavaScript frameworks and component libraries.',
    highlights: ['React & Next.js applications', 'Responsive design with Tailwind CSS', 'State management and routing'],
  },
  {
    title: 'Backend Development',
    description: 'Creating robust server-side applications, RESTful APIs, and database integration.',
    highlights: ['Node.js & Express APIs', 'Python for backend services', 'SQL & NoSQL databases'],
  },
  {
    title: 'UX/UI Design',
    description: 'Designing user-centered interfaces with focus on usability, accessibility, and visual appeal.',
    highlights: ['Wireframing & prototyping in Figma', 'User research and testing', 'Design systems and consistency'],
  },
];

const toolbelt = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: SiGit },
  { name: 'Figma', icon: SiFigma },
  { name: 'Docker', icon: SiDocker },
];

const Skills = () => {
  return (
    <section id="skills" className="section-wrapper">
      <div className="page-shell">
        <div className="section-heading">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Full-stack development with design thinking</h2>
          <p className="section-subtitle">
            I work across frontend, backend, and UX/UI to create complete solutions. Every project combines clean code with user-centered design to deliver polished results.
          </p>
        </div>

        <div className="skill-matrix">
          {capabilityStacks.map((capability, idx) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="skill-card"
            >
              <span className="tag-badge">{capability.title}</span>
              <p className="text-sm text-slate-600 dark:text-slate-300/80 mt-3">{capability.description}</p>
              <div className="skill-list">
                {capability.highlights.map((highlight) => (
                  <span key={highlight} className="skill-chip">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            Toolbelt
          </div>
          <div className="tech-marquee-wrapper">
            <div className="tech-marquee">
              {[...toolbelt, ...toolbelt].map((tool, idx) => (
                <div key={`${tool.name}-${idx}`} className="tech-icon-item">
                  {React.createElement(tool.icon, { size: 32 })}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
