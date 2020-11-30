import React from 'react';
import Layout from '@components/Layout';
import TechnologiesSliderSection from '@components/sections/TechnologiesSliderSection';
import ApproachSection from '@components/sections/ApproachSection';
import TestimonialsSection from '@components/sections/TestimonialsSection';
import HeadingSection from '@components/sections/HeadingSection';
import Title from '@components/typography/Title';
import Paragraph from '@components/typography/Paragraph';
import devopsImg from '@images/devops.webp';
import { devopsData } from '@utils/pages/devops-data';

const devops = () => {
  return (
    <Layout>
      <HeadingSection topTitle="Maintenance & Support" img={devopsImg}>
        <Title coloredStrong>
          <strong>Stable</strong> and <strong>efficient</strong> infrastructure
        </Title>
        <Paragraph>
          Our DevOps and support specialists are ready to boost your company and projects
          efficiency, scalability, and stability.
        </Paragraph>
        <Paragraph>We work on continuous integration and deliver (CI/CD) solutions.</Paragraph>
        <Paragraph>
          Our team can prepare detailed roadmap and documentation and then make it happen. We track
          the newest hardware news and test it by ourselves so we can advise you when picking your
          equipment.
        </Paragraph>
      </HeadingSection>
      <ApproachSection data={devopsData} />
      <TechnologiesSliderSection />
      <TestimonialsSection />
      {/* // TODO: form */}
    </Layout>
  );
};

export default devops;
