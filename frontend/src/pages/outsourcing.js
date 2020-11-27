import React from 'react';
import Layout from '@components/Layout';
import ApproachSection from '@components/sections/ApproachSection';
import { outsourcingData } from '@utils/pages/outsourcing-data';

const outsourcing = () => {
  return (
    <Layout>
      <h1>Outsourcing</h1>
      <ApproachSection data={outsourcingData} />
    </Layout>
  );
};

export default outsourcing;
