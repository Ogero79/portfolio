'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { HiOutlineTrendingUp } from 'react-icons/hi';

const featuredWork = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with product management, shopping cart, secure checkout, and order tracking.',
    focus: 'web application',
    outcome: 'Complete shopping experience with responsive design and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/Ogero79',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task tracking application with real-time updates, team workspaces, and deadline notifications.',
    focus: 'productivity tool',
    outcome: 'Intuitive interface for managing projects and team collaboration.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/Ogero79',
    live: '#',
  },
  {
    title: 'Portfolio Showcase',
    description: 'Modern portfolio website with smooth animations, dark mode support, and optimized performance.',
    focus: 'web design',
    outcome: 'Fast-loading, responsive design with excellent user experience.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/Ogero79',
    live: '#',
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-button"
                  >
                    <FaGithub size={16} />
                    Repo
                  </a>
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
