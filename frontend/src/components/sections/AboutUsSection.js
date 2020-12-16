import React from 'react';
import styled from 'styled-components';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import SectionTitle from '@components/typography/SectionTitle';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import Paragraph, { BasicText } from '@components/typography/Paragraph';
import About from '@images/about/about.webp';
import Location from '@images/about/location.webp';
import StatsUp from '@images/about/stats_up.webp';
import User from '@images/about/user.webp';
import World from '@images/about/world.webp';
import SpinButton from '@components/SpinButton';

const Img = styled.img`
  width: 100%;
  margin: 3rem 0 0 0;
`;

const AboutBox = styled.div`
  display: flex;
  padding: 1.25rem 1.688rem; // 20px 27px;
  width: 100%;
  background: #f1f5ff;
  border-radius: 0.5rem;
  margin: 0 0 2rem 0;
`;

const IconBox = styled.div`
  height: 3.438rem; // 55px;
  width: 3.438rem; // 55px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 22px;
  }
`;

const MarginParagraph = styled.p`
  ${BasicText}
  margin: 0 0 3rem 0;
`;

const DescriptionContainer = styled.div`
  margin: 0 0 0 1rem;
  width: calc(100% - 3.438rem);
`;

const DescriptionContainerTitle = styled.h3`
  ${BasicText}
  font-size: 1.5rem;
  font-weight: 700;
`;

const AboutUsSection = () => {
  const aboutData = [
    {
      id: 1,
      icon: `${User}`,
      title: `Complex Solutions`,
      text1: `We strive to give our partners and customers all-in one package that you can use to build your complete business. `,
      text2: `Create projects, build teams and grow with us.`,
    },

    {
      id: 2,
      icon: `${StatsUp}`,
      title: `Experience`,
      text1: `Always passionate and open minded. That's why we've built dozens of projects in food, automotive, fintech, gambling, medical and real estate industries. `,
      text2: `Let us hear about your idea.`,
    },
    {
      id: 3,
      icon: `${Location}`,
      title: `Located in Poland`,
      text1: `We deliver solutions and build products combining both high quality of service and approachable pricing.`,
    },
    {
      id: 4,
      icon: `${World}`,
      title: `Worldwide Partnership`,
      text1: `Thanks to our location, we can easily work in your time zone, no matter where your business is placed. `,
      text2: `Don't hesitate to drop in for a coffee, as Warsaw is one of the biggest transport and technology hubs in Europe.`,
    },
  ];

  const renderAboutData = () => {
    return aboutData.map((item) => {
      const { id, icon, title, text1, text2 } = item;

      return (
        <AboutBox key={`${title}-${id}`} data-sal="slide-up" data-sal-easing="easeOutCubic">
          <IconBox>
            <img src={icon} alt={`Spinbits - ${title}`} />
          </IconBox>
          <DescriptionContainer>
            <DescriptionContainerTitle primary>{title}</DescriptionContainerTitle>
            <Paragraph>{text1}</Paragraph>
            {text2 && <Paragraph>{text2}</Paragraph>}
          </DescriptionContainer>
        </AboutBox>
      );
    });
  };

  return (
    <SpinContainer id="about">
      <Row>
        <Col lg={6} xl={5}>
          {renderAboutData()}
        </Col>
        <Col lg={6} xl={{ offset: 1 }} data-sal="slide-left" data-sal-easing="easeOutCubic">
          <SectionTopTitle>About us</SectionTopTitle>
          <SectionTitle coloredStrong>
            We <strong>believe</strong> in having a wide picture, while <strong>perfecting</strong>{' '}
            the details
          </SectionTitle>
          <MarginParagraph>
            Spinbits specialize in creating in-house products, custom project development and
            maintenance, outsourcing and consulting. For this day, we&apos;ve helped customers from
            almost all of continents in dozens of IT projects. No matter of project size - we&apos;d
            love to get to know you and make your plans real.
          </MarginParagraph>
          <SpinButton
            onClick="return gtag_report_conversion('/#contact');"
            url="/#contact"
            data-sal="slide-up"
            data-sal-easing="easeOutCubic"
          >
            Contact us
          </SpinButton>
          <Img
            src={About}
            alt="Spinbits - About us"
            data-sal="slide-up"
            data-sal-easing="easeOutCubic"
          />
        </Col>
      </Row>
    </SpinContainer>
  );
};

export default AboutUsSection;
