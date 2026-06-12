import React from 'react';
import { Header } from '../sections/Header';
import { PromoBanner } from '../sections/PromoBanner';
import { HeroSection } from '../sections/HeroSection';
import { BookingForm } from '../sections/BookingForm';
import { Partnership } from '../sections/Partnership';
import { StatsSection } from '../sections/StatsSection';
import { ResultsSection } from '../sections/ResultsSection';
import { WhyWhistleSection } from '../sections/WhyWhistleSection';
import { ComparisonSection } from '../sections/ComparisonSection';
import { ProcessSection } from '../sections/ProcessSection';
import { DoctorSection } from '../sections/DoctorSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { FAQSection } from '../sections/FAQSection';
import { Footer } from '../sections/Footer';
import { StickyBottomBar } from '../sections/StickyBottomBar';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <PromoBanner />
      <main>
        <HeroSection />
        <BookingForm />
        <Partnership />
        <StatsSection />
        <ResultsSection />
        <WhyWhistleSection />
        <ComparisonSection />
        <ProcessSection />
        <DoctorSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyBottomBar />
    </>
  );
};

export default Home;
