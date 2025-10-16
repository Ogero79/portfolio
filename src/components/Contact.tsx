"use client";

import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCalendar, FiMail, FiPhoneCall } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-wrapper">
      <div className="page-shell">
        <div className="section-heading">
          <span className="section-label">Get in touch</span>
          <h2 className="section-title">Let's build something great together</h2>
          <p className="section-subtitle">
            Looking for a developer who combines technical skills with design thinking? I'm available for freelance projects and full-time opportunities.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="contact-card"
        >
          <div className="grid gap-6 md:grid-cols-[1.2fr,0.9fr] items-start relative">
            <div>
              <div className="pill" style={{ marginBottom: '1.5rem' }}>
                <FiCalendar size={16} />
                Available for freelance work & opportunities
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
                Whether you need a full-stack developer or a UX-focused designer, I'm here to help bring your ideas to life.
              </h3>
              <p className="text-slate-600 dark:text-slate-300/80 text-sm leading-relaxed">
                I'm passionate about creating clean, efficient code and delightful user experiences. Let's discuss your project and how I can contribute to its success.
              </p>

              <div className="contact-actions">
                <a href="mailto:brianogero@kabarak.ac.ke" className="button-primary">
                  <FiMail size={18} />
                  Email me
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="ghost-button"
                >
                  <FiCalendar size={16} />
                  Download CV
                </a>
                <a
                  href="https://wa.me/254759776864"
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  <FiPhoneCall size={16} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="glass-panel soft outline-accent p-6 rounded-3xl">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400/80">What you get</div>
                <FiArrowUpRight size={18} className="text-slate-500 dark:text-slate-400/80" />
              </div>
              <ul className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300/85">
                {[
                  'Clean, maintainable code following best practices',
                  'Responsive designs that work across all devices',
                  'Fast turnaround with regular communication',
                  'User-centered approach to every project',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-violet-400"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
