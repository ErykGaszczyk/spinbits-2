import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from '@bootstrap-styled/v4';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import { SpinContainer, RowAlignCenter } from '@components/overrides';
import { DEVICE } from '@assets/const';

const { MD } = DEVICE;

const CustomContainer = styled(SpinContainer)`
  position: relative;
`;

const ImgContainer = styled.div`
  display: none;

  @media ${MD} {
    display: block;
    position: absolute;
    width: 50%;
    right: 0;
    z-index: -1;
  }
`;

const HeadingSection = ({ children, topTitle, img, id, seoTitle }) => {
  return (
    <>
      <Helmet>
        <title>{`Spinbits - ${seoTitle}`}</title>
      </Helmet>
      <CustomContainer id={id}>
        <Row data-sal="slide-down" data-sal-easing="easeOutCubic">
          <Col>
            <SectionTopTitle>{topTitle}</SectionTopTitle>
          </Col>
        </Row>
        <RowAlignCenter>
          <Col md={6} data-sal="slide-right" data-sal-easing="easeOutCubic">
            {children}
          </Col>
          <ImgContainer data-sal="slide-left" data-sal-easing="easeOutCubic">
            <img width="100%" src={img} alt={`Spinbits - ${topTitle}`} />
          </ImgContainer>
        </RowAlignCenter>
      </CustomContainer>
    </>
  );
};

HeadingSection.propTypes = {
  children: PropTypes.node.isRequired,
  topTitle: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string,
  seoTitle: PropTypes.string,
};

HeadingSection.defaultProps = {
  id: null,
  seoTitle: 'IT projects in PHP, Python, JS, Wordpress, React Native.',
};

export default HeadingSection;
