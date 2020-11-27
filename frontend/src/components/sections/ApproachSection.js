import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import SectionTitle from '@components/typography/SectionTitle';
import Paragraph from '@components/typography/Paragraph';
// import { P } from '@components/typography/Paragraph.styled';

const ApproachSection = ({ data }) => {
  console.log(data);
  return (
    <SpinContainer>
      <Row>
        <Col>
          <SectionTopTitle>Approach</SectionTopTitle>
          <SectionTitle coloredStrong>
            How do we do <strong>it</strong>?
          </SectionTitle>
          <Paragraph>
            We&apos;ve learned to simplify complicated things as much as possible, yet to still
            maintain flexibility and attention to detail.
          </Paragraph>
        </Col>
      </Row>
    </SpinContainer>
  );
};

ApproachSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.oneOfType(PropTypes.string, PropTypes.arrayOf(PropTypes.string)),
    })
  ).isRequired,
};

ApproachSection.defaultProps = {};

export default ApproachSection;
