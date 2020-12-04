import React from 'react';
import styled from 'styled-components';
import Layout from '@components/Layout';
import ServicesSection from '@components/sections/ServicesSection';
import AboutUsSection from '@components/sections/AboutUsSection';
import PortfolioSection from '@components/sections/PortfolioSection';
import TestimonialsSection from '@components/sections/TestimonialsSection';
import TechnologiesSliderSection from '@components/sections/TechnologiesSliderSection';
import HeadingSection from '@components/sections/HeadingSection';
import ContactFormSection from '@components/sections/ContactFormSection';
import Title from '@components/typography/Title';
import Paragraph from '@components/typography/Paragraph';
import SpinButton from '@components/SpinButton';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { facebookAddress, linkedinAddress } from '@utils/variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '@images/who-we-are/hero.webp';
import DownloadButton from '@components/DownloadButton';

const ButtonsContainer = styled.div`
  margin: 2rem 0 0 0;
`;

const FontawesomeContainer = styled.div`
  margin: 2rem 0 0 0;

  a {
    margin: 0 1rem 0 0;
    color: var(--thirdary-font-color);
    transition: 0.3s;

    &:hover {
      color: var(--primary-font-color);
    }
  }
`;

const Home = () => {
  // eslint-disable-next-line
  const gtag = (url) => gtag_report_conversion(url);

  return (
    <Layout>
      <HeadingSection topTitle="Who we are" img={Hero} id="who-we-are">
        <Title coloredStrong>
          <strong>IT specialist</strong> that understand your <strong>business</strong> and will
          help you <strong>grow</strong>
        </Title>
        <Paragraph>
          We are a passionate group of specialists that love to create, build and deliver
          tailor-made IT solutions. Creating our own products and building business with our
          partners give us best understanding of your needs.
        </Paragraph>
        <Paragraph>Let&apos;s talk and make the bits spin :-)</Paragraph>
        <ButtonsContainer>
          {/* TODO: url */}
          <SpinButton url="/">Free project estimation</SpinButton>
          <DownloadButton />
        </ButtonsContainer>
        <FontawesomeContainer>
          <a href={facebookAddress} onClick={() => gtag(faFacebookF)}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href={linkedinAddress} onClick={() => gtag(faLinkedinIn)}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </FontawesomeContainer>
      </HeadingSection>

      <TechnologiesSliderSection />
      <ServicesSection />
      <AboutUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactFormSection />
    </Layout>
  );
};

export default Home;
