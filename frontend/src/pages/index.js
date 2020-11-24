import React from 'react';
import Layout from '@components/Layout';
import WhoWeAreSection from '@components/sections/WhoWeAreSection';
import ServicesSection from '@components/sections/ServicesSection';
import AboutUsSection from '@components/sections/AboutUsSection';

const Home = () => {
  const renderSections = () => {
    return [WhoWeAreSection(), ServicesSection(), AboutUsSection()];
  };

  return <Layout>{renderSections()}</Layout>;
};

export default Home;
