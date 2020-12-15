import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '@components/Layout';
import ServicesSection from '@components/sections/ServicesSection';
import AboutUsSection from '@components/sections/AboutUsSection';
import PortfolioSection from '@components/sections/PortfolioSection';
import TestimonialsSection from '@components/sections/TestimonialsSection';
import TechnologiesSliderSection from '@components/sections/TechnologiesSliderSection';
import HeadingSection from '@components/sections/HeadingSection';
import ContactFormSection from '@components/sections/ContactFormSection';
import Faq from '@components/Faq';
import Title from '@components/typography/Title';
import Paragraph from '@components/typography/Paragraph';
import { Button } from '@components/SpinButton';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { facebookAddress, linkedinAddress } from '@utils/variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '@images/who-we-are/hero.webp';
import DownloadButton from '@components/DownloadButton';
<<<<<<< HEAD
import addClutchScript from '../helpers/AddClutchScript';
=======
import FreeEstimationStepper from '@components/FreeEstimationStepper/FreeEstimationStepper';
>>>>>>> @{-1}

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

<<<<<<< HEAD
const ClutchWidget = styled.div`
  margin: 1rem 0 0 0;
=======
const EstimationButton = styled.button`
  ${Button}
>>>>>>> @{-1}
`;

const Home = () => {
  // eslint-disable-next-line
  const gtag = (url) => gtag_report_conversion(url);
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const callbackFunction = (childData) => {
    setOpenModal(childData);
  };

  addClutchScript();

  return (
    <Layout>
      {openModal && (
        <FreeEstimationStepper openFromParent={openModal} parentCallback={callbackFunction} />
      )}
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
          <EstimationButton onClick={() => showModal()}>Free project estimation</EstimationButton>
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
        <ClutchWidget
          className="clutch-widget"
          data-url="https://widget.clutch.co"
          data-widget-type="2"
          data-height="50"
          data-clutchcompany-id="1585115"
        />
      </HeadingSection>

      <TechnologiesSliderSection />
      <ServicesSection />
      <AboutUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Faq />
      <ContactFormSection />
    </Layout>
  );
};

export default Home;
