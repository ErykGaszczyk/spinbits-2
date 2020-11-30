import React from 'react';
import Layout from '@components/Layout';
import OurExpertise from '@components/sections/OurExpertise';
import ApproachSection from '@components/sections/ApproachSection';
import PortfolioSection from '@components/sections/PortfolioSection';
import TestimonialsSection from '@components/sections/TestimonialsSection';
import { customProjectData } from '@utils/pages/custom-projects-data';

const customProjects = () => {
  return (
    <Layout>
      <h1>Custom projects</h1>
      <OurExpertise />
      <ApproachSection data={customProjectData} />
      <PortfolioSection />
      <TestimonialsSection />
      {/* // TODO: form */}
    </Layout>
  );
};

export default customProjects;
