import React from 'react';
import Layout from '@components/Layout';
import WhoWeAreSection from '@components/sections/WhoWeAreSection';
import ServicesSection from '@components/sections/ServicesSection';

const Home = () => {
  const renderSections = () => {
    return [WhoWeAreSection(), ServicesSection()];
  };

  return <Layout>{renderSections()}</Layout>;
};

export default Home;
