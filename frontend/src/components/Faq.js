import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import { BasicText } from '@components/typography/Paragraph';
import SpinButton from '@components/SpinButton';
import SpinAccordion from '@components/SpinAccordion';
import { StaticQuery, graphql } from 'gatsby';

const MainTitle = styled.h3`
  ${BasicText}
  font-size: 2.063rem;
  font-weight: 900;
`;

const Faq = ({ data }) => {
  const { faqs } = data.cms;
  return (
    <SpinContainer id="faq">
      <Row>
        <Col data-sal="slide-down" data-sal-easing="easeOutCubic">
          <SectionTopTitle>FAQ</SectionTopTitle>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={5} data-sal="slide-right" data-sal-easing="easeOutCubic">
          <MainTitle coloredStrong primary>
            Any <strong>questions?</strong> Don&apos;t hesitate to ask us
          </MainTitle>
          {/* {TODO: add <a href/>} */}
          <SpinButton url="/">Ask a question</SpinButton>
        </Col>
        <Col xs={12} lg={7}>
          <SpinAccordion data={faqs} />
        </Col>
      </Row>
    </SpinContainer>
  );
};

export default function MyFaq() {
  return (
    <StaticQuery
      query={graphql`
        query {
          cms {
            faqs {
              content
              title
              id
            }
          }
        }
      `}
      render={(data) => <Faq data={data} />}
    />
  );
}

Faq.propTypes = {
  data: PropTypes.shape({
    cms: PropTypes.shape({
      faqs: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.string,
          title: PropTypes.string,
          id: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};

Faq.defaultProps = {};
