'use client';

import { motion } from 'framer-motion';
import { FiCompass, FiFeather, FiUsers } from 'react-icons/fi';

const About = () => {
  const stats = [
    { label: 'Projects completed', value: '15+' },
    { label: 'Technologies mastered', value: '12+' },
    { label: 'Years of experience', value: '3+' },
  ];

  const experiences = [
    {
      role: 'Computer Science Student · Kabarak University',
      period: '2022 — Present',
      summary: 'Pursuing BSc in Computer Science while building real-world applications.',
    },
    {
      role: 'Full-Stack Developer · Freelance',
      period: '2021 — Present',
      summary: 'Developing web applications with modern frameworks and responsive design.',
    },
    {
      role: 'UX/UI Designer · Self-Taught',
      period: '2020 — Present',
      summary: 'Creating user-centered designs with Figma and design thinking principles.',
    },
  ];

  const principles = [
    {
      icon: FiCompass,
      title: 'Clean code principles',
      description: 'Writing maintainable, well-documented code that follows best practices and industry standards.',
    },
    {
      icon: FiFeather,
      title: 'User-first design',
      description: 'Creating intuitive interfaces that prioritize user needs and provide seamless experiences.',
    },
    {
      icon: FiUsers,
      title: 'Continuous learning',
      description: 'Staying current with new technologies and constantly improving my development skills.',
    },
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="page-shell">
        <div className="section-heading">
          <span className="section-label">About</span>
          <h2 className="section-title">Full-Stack Developer with a passion for great UX</h2>
          <p className="section-subtitle">
            I build complete web applications from concept to deployment, combining technical skills with design thinking to create solutions that users love.
          </p>
        </div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6 }}
            className="about-story"
          >
            <p>
              I am a computer science student and full-stack developer specializing in building modern web applications. My approach combines solid programming fundamentals with user-centered design principles to create intuitive, responsive experiences.
            </p>
            <p>
              With expertise spanning React, Next.js, Node.js, and Python, I enjoy tackling challenging problems and learning new technologies. I also have a strong foundation in UX/UI design, allowing me to bridge the gap between development and design effectively.
            </p>

            <div className="principles-grid">
              {principles.map((principle) => (
                <div key={principle.title} className="principle-card">
                  <principle.icon size={20} />
                  <div>
                    <strong>{principle.title}</strong>
                    <p>{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="stat-stack"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}

            <div className="experience-track">
              {experiences.map((experience) => (
                <div key={experience.role} className="experience-card">
                  <div>
                    <strong>{experience.role}</strong>
                    <span>{experience.period}</span>
                    <span>{experience.summary}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
