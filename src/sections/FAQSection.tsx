import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import './FAQSection.css';

const faqs = [
  {
    question: 'What are invisible aligners?',
    answer: 'Invisible aligners are clear, removable trays that gradually straighten your teeth. They are custom-made for your teeth and are virtually invisible when worn.',
  },
  {
    question: 'How long does the treatment take?',
    answer: 'Treatment duration varies based on individual needs, but most cases are completed within 6-12 months. Our orthodontists will give you a precise timeline during your consultation.',
  },
  {
    question: 'Are the aligners painful?',
    answer: 'You may experience mild discomfort for the first few days of wearing a new set of aligners. This is normal and a sign that the treatment is working. The discomfort typically subsides quickly.',
  },
  {
    question: 'Can I eat with aligners on?',
    answer: 'No, you should remove your aligners when eating or drinking anything other than water. This helps maintain the aligners and prevents staining.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Our treatments start at Rs 47,999. We also offer flexible EMI options starting from Rs 3,999 per month with 0% interest. Book a free consultation to get a personalized quote.',
  },
  {
    question: 'Is there a warranty?',
    answer: 'Yes! We offer a lifetime smile warranty. If your teeth shift after treatment, we will provide complimentary aligners to correct them.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <SectionTitle
          title="Got Questions? We've got answers"
          subtitle="Everything you need to know about our invisible aligners"
        />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <Plus className={`faq-icon ${openIndex === index ? 'open' : ''}`} />
              </button>
              <div className={`faq-answer-wrapper ${openIndex === index ? 'open' : ''}`}>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
