import React from 'react';
import Hero from '../components/Hero';
import IndustryHubs from '../components/IndustryHubs';
import SocialProof from '../components/SocialProof';
import NewsSection from '../components/NewsSection';
import LeadForm from '../components/LeadForm';

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <IndustryHubs />
      <LeadForm />
      <SocialProof />
      <NewsSection />
    </main>
  );
};

export default Home;