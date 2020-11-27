import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import SectionTitle from '@components/typography/SectionTitle';
import Paragraph from '@components/typography/Paragraph';
import Apps from '@images/our-expertise/apps.webp';
import B2b from '@images/our-expertise/b2b.webp';
import B2c from '@images/our-expertise/b2c.webp';
import Blockchain from '@images/our-expertise/blockchain.webp';
import Intranet from '@images/our-expertise/intranet.webp';
import Mobile from '@images/our-expertise/mobile.webp';
import ReactCardFlip from 'react-card-flip';

const CardContainer = styled.div`
  background-color: #f1f5ff;
  padding: 30px;
  min-height: 100%;
`;

const CustomCol = styled(Col)`
  margin: 0 0 1rem 0;
`;

const OurExpertise = () => {
  const cardsData = [
    {
      id: 1,
      title: `B2C web systems and websites`,
      description: `Working with B2C projects we always want to understand customer business in terms of values, selling points, unique products, and services as well as customer persona. All our projects are tailor-made and suitable for your budget - no matter if you will choose WordPress or Symfony to make your project happen.`,
      img: `${B2c}`,
    },
    {
      id: 2,
      title: `B2B web systems and websites`,
      description: `Building B2B solutions means simplicity and scalability. In spinbits, we know how to achieve both in no-time and make your project stable and secure.`,
      img: `${B2b}`,
    },
    {
      id: 3,
      title: `Mobile applications`,
      description: `We do love creating mobile apps, it can be really entertaining and fun. In spinbits, we always focus on good design and UX and efficient development thanks to using most recent solutions, like Flutter, Swift or React Native.`,
      img: `${Apps}`,
    },
    {
      id: 4,
      title: `Intranet systems, CRM and ERP`,
      description: `We've worked and created intranet, CRM, and ERP type projects - each case is different and we put 100% effort to understand your business, company flows, communication, and problems. We're here to help and make it work better - by creating a solution from scratch or by customizing CRM or ERP.`,
      img: `${Intranet}`,
    },
    {
      id: 5,
      title: `Mobile, desktop and browser games`,
      description: `We're gamers on our own for the last 25 years - from completely casual to pro-level and on all platforms. Game development process is one of the most engaging and challenging processes in the industry - we're happy to share our experiences coming from working on dozens of games.`,
      img: `${Mobile}`,
    },
    {
      id: 6,
      title: `Blockchain, ML and VR`,
      description: `We were lucky to participate in new technology projects and we're really proud of it. If you would like to talk about Blockchain, Machine Learning, or VR in fintech, supply chain, data pools, VR in e-commerce - we're here!`,
      img: `${Blockchain}`,
    },
  ];

  // data-sal="slide-up"
  // data-sal-easing="easeOutCubic"
  // data-sal-delay={100 * index}

  const renderCards = () => {
    return cardsData.map((item) => {
      const { id, title, description, img } = item;
      const [isFlipped, setIsFlipped] = useState(true);
      const handleFlip = () => setIsFlipped((origin) => !origin);

      return (
        <CustomCol md={6} lg={4} key={`${id}-${title}`}>
          <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
            containerStyle={{ height: '100%' }}
          >
            <CardContainer onClick={handleFlip}>
              <h3>{title}</h3>
              <img src={img} alt={`Spinbits - ${title}`} />
              <button type="button">Click to flip</button>
            </CardContainer>

            <CardContainer onClick={handleFlip}>
              <h3>{title}</h3>
              <p>{description}</p>
              <button type="button">Click to flip</button>
            </CardContainer>
          </ReactCardFlip>
        </CustomCol>
      );
    });
  };

  return (
    <SpinContainer>
      <Row>
        <Col>
          <SectionTopTitle>Our expertise</SectionTopTitle>
          <SectionTitle coloredStrong>
            Projects <strong>we work</strong> on
          </SectionTitle>
          <Paragraph>
            Check out what our customers and partners say about working with spinbits.
          </Paragraph>
        </Col>
      </Row>
      <Row>{renderCards()}</Row>
    </SpinContainer>
  );
};

OurExpertise.propTypes = {};

OurExpertise.defaultProps = {};

export default OurExpertise;
