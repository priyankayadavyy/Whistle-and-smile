import React from 'react';
import './Partnership.css';

export const Partnership: React.FC = () => {
  return (
    <section className="partnership-section">
      <div className="partnership-container">
        <div className="partnership-card">
          <p className="partnership-text">
            Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic near you.
          </p>
          <div className="partnership-logo-wrapper">
            <div className="partnership-logo" style={{ 
              background: '#5D4037', 
              padding: '12px 20px', 
              borderRadius: '8px',
              color: '#FF9800',
              fontWeight: 700,
              fontSize: '24px',
              letterSpacing: '1px'
            }}>
              clove<span style={{ color: '#fff' }}>:)</span>
              <div style={{ fontSize: '8px', color: '#fff', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '2px' }}>DENTAL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
