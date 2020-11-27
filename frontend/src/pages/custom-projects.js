import React from 'react';
import Layout from '@components/Layout';
import OurExpertise from '@components/sections/OurExpertise';

const customProjects = () => {
  const renderSections = () => {
    return [OurExpertise()];
  };

  return (
    <Layout>
      <h1>Custom projects</h1>
      {renderSections()}
    </Layout>
  );
};

export default customProjects;
