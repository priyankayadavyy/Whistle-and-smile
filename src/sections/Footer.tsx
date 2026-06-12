import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">whistle</div>
            <p className="footer-tagline">
              India's most trusted invisible aligner brand. Transforming smiles 
              with doctor-led care and advanced technology.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <Facebook className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Instagram className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Linkedin className="footer-social-icon" />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <div className="footer-links">
              <span className="footer-link">About Us</span>
              <span className="footer-link">Careers</span>
              <span className="footer-link">Blog</span>
              <span className="footer-link">Press</span>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Support</h4>
            <div className="footer-links">
              <span className="footer-link">Contact Us</span>
              <span className="footer-link">FAQs</span>
              <span className="footer-link">Book a Scan</span>
              <span className="footer-link">Find a Clinic</span>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Legal</h4>
            <div className="footer-links">
              <span className="footer-link">Privacy Policy</span>
              <span className="footer-link">Terms of Service</span>
              <span className="footer-link">Cookie Policy</span>
              <span className="footer-link">Refund Policy</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Whistle and Smile. All rights reserved.
          </p>
          <div className="footer-legal">
            <span className="footer-legal-link">Privacy</span>
            <span className="footer-legal-link">Terms</span>
            <span className="footer-legal-link">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
