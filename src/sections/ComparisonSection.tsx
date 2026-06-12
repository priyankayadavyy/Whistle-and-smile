import React from 'react';
import { Check, X } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import './ComparisonSection.css';

const comparisons = [
  { feature: 'Doctor Supervision', whistle: true, others: false },
  { feature: '3D Teeth Scan', whistle: true, others: true },
  { feature: 'Free Consultation', whistle: true, others: false },
  { feature: 'Lifetime Warranty', whistle: true, others: false },
  { feature: 'EMI Options', whistle: true, others: true },
  { feature: 'At-home Monitoring', whistle: true, others: false },
  { feature: 'AI Treatment Plan', whistle: true, others: false },
  { feature: 'Free Retainers', whistle: true, others: false },
];

export const ComparisonSection: React.FC = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <SectionTitle title="What sets Whistle apart?" />
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="whistle-col">Whistle</th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={index}>
                  <td>{row.feature}</td>
                  <td>
                    <Check className="comparison-icon-check" />
                  </td>
                  <td>
                    {row.others ? (
                      <Check className="comparison-icon-check" />
                    ) : (
                      <X className="comparison-icon-x" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
