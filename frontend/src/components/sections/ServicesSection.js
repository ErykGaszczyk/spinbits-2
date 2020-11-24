import React from 'react';
import styled from 'styled-components';
import SectionTitle from '@components/typography/SectionTitle';
import { Row, Col } from '@bootstrap-styled/v4';
import Paragraph from '@components/typography/Paragraph';
import { P } from '@components/typography/Paragraph.styled';
import { SpinContainer } from '@components/overrides';

const ServicesParagraph = styled(P)`
  font-size: 2.25rem;
  color: var(--primary-font-color);
`;

const ServicesTechnologyParagraph = styled(ServicesParagraph)`
  color: var(--white);
`;

const ServicesTechnologyContainer = styled.div`
  background-color: var(--primary-font-color);
  padding: 2.5rem; // 40px;
  border-radius: 0.5rem;
`;

const TechnologgiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  div {
    display: flex;
    align-items: center;
    font-size: 0.813rem; // 13px
    color: var(--white);
    margin: 1rem 1rem 0 0;

    div {
      margin: 0 5px 2px 0;
      height: 10px;
      width: 10px;
      background-color: var(--secondary-font-color);
    }
  }
`;

const ServicesSection = () => {
  const technologies = [
    'PHP',
    'Symfony',
    'WordPress',
    'React Native',
    'Flutter',
    'IOS & Android',
    'Python',
    'JavaScript',
    'HTML5 & CSS3',
    'Selenium',
    'Blockchain',
  ];

  return (
    <SpinContainer>
      <Row>
        <Col md={6}>
          <ServicesTechnologyContainer>
            <ServicesTechnologyParagraph bold>Technologies</ServicesTechnologyParagraph>
            <TechnologgiesList>
              {technologies.map((item) => {
                return (
                  <div>
                    <div />
                    {item}
                  </div>
                );
              })}
            </TechnologgiesList>
          </ServicesTechnologyContainer>
        </Col>
        <Col md={6}>
          <SectionTitle>Services</SectionTitle>
          <ServicesParagraph coloredStrong bold>
            What can we do <strong>for you</strong>
          </ServicesParagraph>
          <Paragraph>
            We can help you to pick the right path to build your project. To offer the best possible
            quality, we need to use only the best available tools. That&apos;s why we work with
            tested and proven technologies and solutions.
          </Paragraph>
        </Col>
      </Row>
    </SpinContainer>
  );
};

export default ServicesSection;
