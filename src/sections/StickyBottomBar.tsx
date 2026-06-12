import React from 'react';
import { Button } from '../components/Button';
import { useScrollPosition } from '../hooks/useScrollPosition';
import './StickyBottomBar.css';

export const StickyBottomBar: React.FC = () => {
  const { scrollY } = useScrollPosition();
  const isVisible = scrollY > 400;

  return (
    <div className={`sticky-bar ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-bar-container">
        <p className="sticky-bar-text">Ready for your perfect smile?</p>
        <div className="sticky-bar-buttons">
          <Button variant="primary" size="sm">Book scan at Home</Button>
          <Button variant="secondary" size="sm">Book scan at Clinic</Button>
        </div>
      </div>
    </div>
  );
};
