import React from 'react';
import Layout from '@components/Layout';
import OurExpertise from '@components/sections/OurExpertise';
import ApproachSection from '@components/sections/ApproachSection';
import { customProjectData } from '@utils/pages/custom-projects-data';

const customProjects = () => {
  return (
    <Layout>
      <h1>Custom projects</h1>
      <OurExpertise />
      <ApproachSection data={customProjectData} />
    </Layout>
  );
};

export default customProjects;
