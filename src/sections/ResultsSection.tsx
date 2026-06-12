import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import './ResultsSection.css';

const results = [
  { id: 1, image: '/images/result-1.jpg', caption: 'Teeth Alignment' },
  { id: 2, image: '/images/result-2.jpg', caption: 'Gap Closure' },
  { id: 3, image: '/images/result-3.jpg', caption: 'Perfect Smile' },
];

export const ResultsSection: React.FC = () => {
  return (
    <section className="results-section">
      <div className="results-container">
        <SectionTitle title="Results You'll Love" />
        <div className="results-grid">
          {results.map((result) => (
            <div key={result.id} className="results-card">
              <img
                src={result.image}
                alt={result.caption}
                className="results-image"
                loading="lazy"
              />
              <p className="results-caption">{result.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
