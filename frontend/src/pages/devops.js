import React from 'react';
import Layout from '@components/Layout';
import TechnologiesSliderSection from '@components/sections/TechnologiesSliderSection';
import ApproachSection from '@components/sections/ApproachSection';
import TestimonialsSection from '@components/sections/TestimonialsSection';
import { devopsData } from '@utils/pages/devops-data';

const devops = () => {
  return (
    <Layout>
      <h1>Devops</h1>
      <ApproachSection data={devopsData} />
      <TechnologiesSliderSection />
      <TestimonialsSection />
      {/* // TODO: form */}
    </Layout>
  );
};

export default devops;
