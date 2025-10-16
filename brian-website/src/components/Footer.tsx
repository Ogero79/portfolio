'use client';

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <footer className="footer-shell">
      <div className="page-shell">
        <div className="footer-grid">
          <div>
            <h3 className="text-lg font-semibold gradient-text">Brian Ogero Studio</h3>
            <p className="text-sm text-slate-400/80 mt-3 leading-relaxed">
              Boutique engineering partner building expressive web products with incredible polish.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-slate-400/70">Navigate</h4>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-slate-300/85 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-slate-400/70">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300/85">
              <li>brianogero@kabarak.ac.ke</li>
              <li>+254 759 776 864</li>
              <li>Nairobi · Remote friendly</li>
            </ul>
          </div>
        </div>

        <div className="footer-meta">
          <span>© {currentYear} Crafted with curiosity and care.</span>
          <div className="social-cluster">
            <a href="https://github.com/Ogero79" target="_blank" rel="noreferrer" className="social-pill" aria-label="GitHub">
              <FaGithub size={16} />
            </a>
            <a href="https://linkedin.com/in/brian-ogero-07739526a" target="_blank" rel="noreferrer" className="social-pill" aria-label="LinkedIn">
              <FaLinkedin size={16} />
            </a>
            <a href="https://x.com/ogeroofficial" target="_blank" rel="noreferrer" className="social-pill" aria-label="Twitter">
              <FaTwitter size={15} />
            </a>
            <a href="https://instagram.com/ogero_official" target="_blank" rel="noreferrer" className="social-pill" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
