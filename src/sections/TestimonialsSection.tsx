import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    text: 'My smile transformation was amazing! The aligners were so comfortable.',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Rahul Gupta',
    text: 'Best decision ever. The doctors were so supportive throughout.',
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    text: 'I got my perfect smile in just 5 months. Highly recommend!',
    image: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    text: 'The EMI option made it so affordable. Worth every penny!',
    image: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 5,
    name: 'Neha Kapoor',
    text: 'Professional service and great results. Thank you Whistle!',
    image: 'https://i.pravatar.cc/150?img=9',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <SectionTitle title="Happy Smilers!" subtitle="Real stories from real customers" />
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-avatar"
                loading="lazy"
              />
              <div>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
