import React from 'react';
import Layout from '@components/Layout';
import ApproachSection from '@components/sections/ApproachSection';
import TestimonialsSection from '@components/sections/TestimonialsSection';
import HeadingSection from '@components/sections/HeadingSection';
import Title from '@components/typography/Title';
import Paragraph from '@components/typography/Paragraph';
import marketingImg from '@images/marketing.webp';
import { data } from '@utils/pages/marketing-data';

const marketing = () => {
  return (
    <Layout>
      <HeadingSection topTitle="Digital marketing" img={marketingImg}>
        <Title coloredStrong>
          <strong>Grow up</strong> your business <strong>quickly</strong> and{' '}
          <strong>efficiently</strong>
        </Title>
        <Paragraph>
          In spinbits, we do understand the power of good marketing - that’s why we combine our
          technical and marketing expertise to offer you full support in the business.
        </Paragraph>
        <Paragraph>
          We can help you with SEO/SEM, copywriting, phrase, and link building, through AdWords,
          Google / Facebook / Instagram / LinkedIn Ads, and many more.
        </Paragraph>
        <Paragraph>
          Spinbits have experience working with customers on almost all continents with various
          industries - give us a try!
        </Paragraph>
      </HeadingSection>
      <ApproachSection data={data} />
      {/* // TODO: form */}
      <TestimonialsSection />
    </Layout>
  );
};

export default marketing;
