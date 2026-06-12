import React from 'react';
import { Phone } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import './Header.css';

export const Header: React.FC = () => {
  const { isScrolled } = useScrollPosition(50);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Main Navigation Bar */}
      <div className="header-container">
        <div className="header-logo">
          <span className="logo-whistle">whistle</span>
          <span className="logo-and-smile">AND SMILE</span>
        </div>
        
        {/* Hover karne par ye button expand hoga */}
        <a href="tel:01169328350" className="header-phone" aria-label="Call Us">
          <Phone className="header-phone-icon" size={20} fill="currentColor" />
          <span className="phone-number">01169328350</span>
        </a>
      </div>
    </header>
  );
};