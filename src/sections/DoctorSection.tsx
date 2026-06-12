import React from 'react';
import { Button } from '../components/Button';
import './DoctorSection.css';

export const DoctorSection: React.FC = () => {
  return (
    <section className="doctor-section">
      <div className="doctor-container">
        <div className="doctor-content">
          <h2 className="doctor-title">We are Doctor-led, not aligned to customers</h2>
          <p className="doctor-text">
            Unlike other aligner companies, we believe that every smile transformation 
            should be overseen by a qualified orthodontist. Our network of 200+ certified 
            dental experts ensures that your treatment plan is medically sound and 
            tailored to your unique needs.
          </p>
          <div>
            <Button variant="primary">Know More</Button>
          </div>
        </div>
        <div className="doctor-image-wrapper">
          <img
            src="/images/doctor.jpg"
            alt="Professional dentist at Whistle clinic"
            className="doctor-image"
          />
        </div>
      </div>
    </section>
  );
};
