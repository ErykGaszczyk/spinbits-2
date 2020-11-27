import React from 'react';
import Layout from '@components/Layout';
import ApproachSection from '@components/sections/ApproachSection';
import { devopsData } from '@utils/pages/devops-data';

const devops = () => {
  return (
    <Layout>
      <h1>Devops</h1>
      <ApproachSection data={devopsData} />
    </Layout>
  );
};

export default devops;
