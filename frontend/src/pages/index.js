import React from 'react';
import Layout from '@components/Layout';
import WhoWeAreSection from '@components/sections/WhoWeAreSection';
import ServicesSection from '@components/sections/ServicesSection';
import AboutUsSection from '@components/sections/AboutUsSection';
import PortfolioSection from '@components/sections/PortfolioSection';
import TestimonialsSection from '@components/sections/TestimonialsSection';

const Home = () => {
  const renderSections = () => {
    return [
      WhoWeAreSection(),
      ServicesSection(),
      AboutUsSection(),
      PortfolioSection(),
      TestimonialsSection(),
    ];
  };

  return <Layout>{renderSections()}</Layout>;
};

export default Home;
