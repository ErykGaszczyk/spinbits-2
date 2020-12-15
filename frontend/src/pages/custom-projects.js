import React from 'react';
import Layout from '@components/Layout';
import OurExpertise from '@components/sections/OurExpertise';
import ApproachSection from '@components/sections/ApproachSection';
import PortfolioSection from '@components/sections/PortfolioSection';
import TestimonialsSection from '@components/sections/TestimonialsSection';
import HeadingSection from '@components/sections/HeadingSection';
import Title from '@components/typography/Title';
import Paragraph from '@components/typography/Paragraph';
import ContactFormSection from '@components/sections/ContactFormSection';
import Faq from '@components/Faq';
import customProjectsImg from '@images/custom-projects.webp';
import { data } from '@utils/pages/custom-projects-data';

const customProjects = () => {
  return (
    <Layout>
      <HeadingSection topTitle="Custom Projects" img={customProjectsImg}>
        <Title coloredStrong>
          Unique <strong>IT solutions</strong> for your <strong>business</strong>
        </Title>
        <Paragraph>
          Spinbits specialize in custom projects and helping companies grow from scratch as a
          startup or working to get legacy projects on track is our bread and butter. No matter what
          you would like to achieve, we can do it together!
        </Paragraph>
        <Paragraph>
          We also work on our own products, so we know how to work efficient, agile, and
          transparent.
        </Paragraph>
        <Paragraph>You can count on our experience and friendly approach.</Paragraph>
      </HeadingSection>
      <OurExpertise />
      <ApproachSection data={data} />
      <PortfolioSection />
      <TestimonialsSection />
      <Faq />
      <ContactFormSection />
    </Layout>
  );
};

export default customProjects;
