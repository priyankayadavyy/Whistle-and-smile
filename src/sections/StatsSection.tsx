import React from 'react';
import './StatsSection.css';

export const StatsSection: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-card">
          <h3 className="stats-card-title">Dream smiles achieved seamlessly</h3>
          <p className="stats-card-text">
            Join thousands who have transformed their smiles with our invisible aligners
          </p>
          <div className="stats-highlight">50,000+</div>
          <p className="stats-card-text">Happy customers across India</p>
        </div>
        <div className="stats-card">
          <h3 className="stats-card-title">Invisalign aligners</h3>
          <p className="stats-card-text">
            World's most advanced clear aligner technology backed by dental experts
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6mo</div>
              <div className="stat-label">Avg. Treatment</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Clinics</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
