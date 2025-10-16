'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { HiOutlineTrendingUp } from 'react-icons/hi';

const featuredWork = [
  {
    title: 'EduHub Learning Platform',
    description: 'Educational hub with course management, student enrollment, and interactive learning modules for academic institutions.',
    focus: 'education technology',
    outcome: 'Comprehensive learning management system with intuitive interface for students and educators.',
    tags: ['React', 'JavaScript', 'CSS', 'Node.js'],
    github: 'https://github.com/Ogero79/eduhub-front',
    live: 'https://eduhub-kabu.netlify.app',
  },
  {
    title: 'iFund Crowdfunding Platform',
    description: 'Full-stack crowdfunding application with campaign creation, donation processing, and real-time funding progress tracking.',
    focus: 'fintech application',
    outcome: 'Secure platform connecting fundraisers with supporters, featuring responsive design and payment integration.',
    tags: ['React', 'JavaScript', 'Node.js', 'CSS'],
    github: 'https://github.com/Ogero79/ifund-frontend',
    live: 'https://ifundapp.netlify.app',
  },
  {
    title: 'Jala Educators Platform',
    description: 'Modern educator management system with scheduling, resource sharing, and communication tools for educational professionals.',
    focus: 'professional development',
    outcome: 'Streamlined platform for educators with type-safe architecture and excellent performance.',
    tags: ['TypeScript', 'Next.js', 'HTML', 'Node.js'],
    github: '#',
    live: 'https://jalaeducators.netlify.app',
  },
  {
    title: 'Professional Portfolio Showcase',
    description: 'Modern portfolio website with smooth animations, responsive design, and optimized performance for showcasing projects.',
    focus: 'web design',
    outcome: 'Fast-loading, type-safe portfolio with excellent user experience and professional presentation.',
    tags: ['TypeScript', 'Next.js', 'HTML', 'CSS'],
    github: 'https://github.com/Ogero79/terry-portfolio-website',
    live: 'https://terrymasese.netlify.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-wrapper">
      <div className="page-shell">
        <div className="section-heading">
          <span className="section-label">Featured work</span>
          <h2 className="section-title">Recent projects that showcase my skills</h2>
          <p className="section-subtitle">
            A collection of web applications built with modern technologies, focusing on clean code, great UX, and performant solutions.
          </p>
        </div>

        <div className="project-grid">
          {featuredWork.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-media">
                <span className="project-index">0{index + 1}</span>
                <span className="project-ribbon">{project.focus}</span>
              </div>

              <div className="project-content">
                <div className="tag-badge">Project</div>
                <h3 className="text-slate-900 dark:text-slate-100">{project.title}</h3>
                <p className="project-description text-slate-600 dark:text-slate-300">{project.description}</p>

                <div className="project-meta">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-outcome">
                  <HiOutlineTrendingUp size={16} />
                  {project.outcome}
                </div>

                <div className="project-footer">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary"
                  >
                    <FaExternalLinkAlt size={14} />
                    View product
                  </a>
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="ghost-button"
                    >
                      <FaGithub size={16} />
                      Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
