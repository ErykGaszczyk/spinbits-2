import React from 'react';
import styled from 'styled-components';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import SectionTitle from '@components/typography/SectionTitle';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import Paragraph from '@components/typography/Paragraph';
import { P } from '@components/typography/Paragraph.styled';
import Portfolio from '@images/portfolio/portfolio.webp';

const Img = styled.img`
  width: 100%;
  margin: 3rem 0 0 0;
`;

const PortfolioSection = () => {
  return (
    <SpinContainer>
      <Row>
        <Col lg={4}>
          <SectionTopTitle>Portfolio</SectionTopTitle>
          <SectionTitle coloredStrong>
            Check out what we have <strong>built together</strong> with our great customers
          </SectionTitle>
          <Paragraph>
            There&apos;s no better feeling than using something that some time ago was just an idea.
            Thanks to our awesome customers and their trust we were able to take part in making
            their ideas real.
          </Paragraph>
          <Img src={Portfolio} alt="Spinbits - Portfolio" />
        </Col>
        <Col lg={8}>dupa</Col>
      </Row>
    </SpinContainer>
  );
};

PortfolioSection.propTypes = {};

PortfolioSection.defaultProps = {};

export default PortfolioSection;
