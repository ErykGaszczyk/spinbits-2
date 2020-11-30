import React from 'react';
import Layout from '@components/Layout';
import WhoWeAreSection from '@components/sections/WhoWeAreSection';
import ServicesSection from '@components/sections/ServicesSection';
import AboutUsSection from '@components/sections/AboutUsSection';
import PortfolioSection from '@components/sections/PortfolioSection';
import TestimonialsSection from '@components/sections/TestimonialsSection';
import TechnologiesSliderSection from '@components/sections/TechnologiesSliderSection';

const Home = () => {
  return (
    <Layout>
      <WhoWeAreSection />
      <TechnologiesSliderSection />
      <ServicesSection />
      <AboutUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      {/* // TODO: form */}
    </Layout>
  );
};

export default Home;
