import React from 'react';
import './PromoBanner.css';

export const PromoBanner: React.FC = () => {
  return (
    <div className="promo-banner">
      <p className="promo-banner-text">
        Starting at <span className="promo-banner-original">Rs 69,999</span>
        <span className="promo-banner-price"> Rs 47,999</span>.
        <span className="promo-banner-urgent"> Hurry! Offer ends soon.</span>
      </p>
    </div>
  );
};
