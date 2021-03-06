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
import FreeEstimationStepper from '@components/FreeEstimationStepper/FreeEstimationStepper';
import DownloadButton from '@components/DownloadButton';
import { facebookAddress, linkedinAddress } from '@utils/variables';
import Hero from '@images/who-we-are/hero.webp';
import { DEVICE } from '@assets/const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import addClutchScript from '../helpers/AddClutchScript';

const { MD } = DEVICE;

const ButtonsContainer = styled.div`
  margin: 2rem 0 0 0;
`;

const SocialBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 0 0;
`;

const FontawesomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${MD} {
    justify-content: flex-start;
  }

  a {
    margin: 0 1rem 0 0;
    color: var(--thirdary-font-color);
    transition: 0.3s;

    &:hover {
      color: var(--primary-font-color);
    }
  }
`;

const EstimationButton = styled.button`
  ${Button}
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
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
        <GridContainer>
          <EstimationButton onClick={() => showModal()}>
            Free&nbsp;project estimation
          </EstimationButton>
          <DownloadButton />
          <FontawesomeContainer>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={facebookAddress}
              onClick={() => gtag(facebookAddress)}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={linkedinAddress}
              onClick={() => gtag(linkedinAddress)}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </FontawesomeContainer>
          <div
            className="clutch-widget"
            data-url="https://widget.clutch.co"
            data-widget-type="2"
            data-height="50"
            data-clutchcompany-id="1585115"
          />
        </GridContainer>
        <ButtonsContainer />
        <SocialBox />
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
