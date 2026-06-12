import React from 'react';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Invisible Aligners for a dream smile</h1>
          <p className="hero-subtitle">
            Book a Scan and avail a free Orthodontist Consult{' '}
            <span className="hero-highlight">worth ₹1500</span>
          </p>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="/images/hero-woman.jpg"
            alt="Woman smiling with invisible aligners"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};
