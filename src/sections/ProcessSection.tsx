import React from 'react';
import './ProcessSection.css';

const steps = [
  {
    number: 1,
    title: 'Book a Free Scan',
    description: 'Schedule a free 3D teeth scan at a Clove Dental clinic near you.',
  },
  {
    number: 2,
    title: 'Visit the Clinic',
    description: 'Our orthodontist will examine your teeth and discuss your smile goals.',
  },
  {
    number: 3,
    title: 'Get Your 3D Scan',
    description: 'Advanced 3D imaging creates a precise digital model of your teeth.',
  },
  {
    number: 4,
    title: 'Start Your Treatment',
    description: 'Receive your custom aligners and begin your journey to a perfect smile.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-content">
          <h2 className="process-title">Get your perfect smile in four simple steps</h2>
          <div className="steps-list">
            {steps.map((step) => (
              <div key={step.number} className="step-item">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="process-image-wrapper">
          <img
            src="/images/clinic-scan.jpg"
            alt="3D teeth scanning process at clinic"
            className="process-image"
          />
        </div>
      </div>
    </section>
  );
};
