import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedPlatforms from '../components/FeaturedPlatforms';
import MLMPlans from '../components/MLMPlans';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage = () => {
  return (
    <>
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="platforms">
        <FeaturedPlatforms />
      </div>
      <div id="mlm-plans">
        <MLMPlans />
      </div>
      <Features />
      <div id="pricing">
        <Pricing />
      </div>
      <CallToAction />
      <WhatsAppButton />
    </>
  );
};

export default HomePage;