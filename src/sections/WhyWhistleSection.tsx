import React from 'react';
import { Stethoscope, Cpu, Shield, Clock } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import './WhyWhistleSection.css';

const features = [
  {
    icon: Stethoscope,
    title: 'Doctor-Led Care',
    description: 'Every treatment is supervised by certified orthodontists for best results.',
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description: '3D scanning and AI-powered treatment planning for precision.',
  },
  {
    icon: Shield,
    title: 'Lifetime Support',
    description: 'Free retainers and lifetime smile guarantee with every treatment.',
  },
  {
    icon: Clock,
    title: 'Flexible Plans',
    description: 'EMI options starting from ₹3,999/month with 0% interest.',
  },
];

export const WhyWhistleSection: React.FC = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        <SectionTitle title="Why Whistle?" subtitle="The smartest way to straighten your teeth" />
        <div className="why-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-card">
              <feature.icon className="why-icon" />
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
