import React from 'react';
import Layout from '@components/Layout';
import ApproachSection from '@components/sections/ApproachSection';
import { marketingData } from '@utils/pages/marketing-data';

const marketing = () => {
  return (
    <Layout>
      <h1>Marketing</h1>
      <ApproachSection data={marketingData} />
    </Layout>
  );
};

export default marketing;
