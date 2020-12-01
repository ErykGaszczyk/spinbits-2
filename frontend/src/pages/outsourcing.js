import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '@components/Layout';
import ApproachSection from '@components/sections/ApproachSection';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import Paragraph, { BasicText } from '@components/typography/Paragraph';
import SpinButton from '@components/SpinButton';
import SpinAccordion from '@components/SpinAccordion';
import TestimonialsSection from '@components/sections/TestimonialsSection';
import HeadingSection from '@components/sections/HeadingSection';
import Title from '@components/typography/Title';
import outsourcingImg from '@images/outsourcing.webp';
import { approachData } from '@utils/pages/outsourcing-data';

const MainTitle = styled.h3`
  ${BasicText}
  font-size: 2.063rem;
  font-weight: 900;
  color: var(--primary-font-color);
`;

const outsourcing = ({ data }) => {
  const { availableDevelopers } = data.cms;
  return (
    <Layout>
      <HeadingSection topTitle="Outsourcing & body leasing" img={outsourcingImg}>
        <Title coloredStrong>
          <strong>Scalable</strong> and <strong>reliable</strong> team
        </Title>
        <Paragraph>
          Current markets are always changing, decision making is fast and you need to grab
          opportunities.{' '}
        </Paragraph>
        <Paragraph>
          Spinbits offers solutions to keep up with the pace - both outsourcing and body leasing.
        </Paragraph>
        <Paragraph>
          Our team members are experienced developers, designers, and managers that first work on
          our internal projects - that’s why we are sure of their capabilities and expertise level.
        </Paragraph>
      </HeadingSection>
      <ApproachSection data={approachData} />
      <SpinContainer>
        <Row>
          <Col xs={12} lg={5} data-sal="slide-right" data-sal-easing="easeOutCubic">
            <SectionTopTitle>Available developers</SectionTopTitle>
            <MainTitle coloredStrong>
              Check out our awesome <strong>team</strong> members that are available for{' '}
              <strong>bodylease</strong> and <strong>oursource</strong>
            </MainTitle>
            <Paragraph>
              Would you like to ask about bodylease or outsource? Or maybe you have some additional
              questions? Don’t hesitate to ask!
            </Paragraph>
            {/* {TODO: add <a href/>} */}
            <SpinButton url="/">Ask a question</SpinButton>
          </Col>
          <Col xs={12} lg={7}>
            <SpinAccordion data={availableDevelopers} />
          </Col>
        </Row>
      </SpinContainer>
      <TestimonialsSection />
      {/* // TODO: form */}
    </Layout>
  );
};

export const query = graphql`
  query {
    cms {
      availableDevelopers {
        content
        title
      }
    }
  }
`;

export default outsourcing;
