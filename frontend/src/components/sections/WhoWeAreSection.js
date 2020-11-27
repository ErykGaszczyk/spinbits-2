import React from 'react';
import styled from 'styled-components';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import { Row, Col } from '@bootstrap-styled/v4';
import Title from '@components/typography/Title';
import Paragraph from '@components/typography/Paragraph';
import { SpinContainer, RowAlignCenter } from '@components/overrides';
import SpinButton from '@components/SpinButton';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { facebookAddress, linkedinAddress } from '@utils/variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero from '@images/who-we-are/hero.webp';
import { Link } from 'gatsby';
import { DEVICE } from '@assets/const';
import DownloadButton from '@components/DownloadButton';

const { MD } = DEVICE;

const CustomContainer = styled(SpinContainer)`
  position: relative;
`;

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

const WhoWeAreSection = () => {
  return (
    <CustomContainer id="who-we-are">
      <Row data-sal="slide-down" data-sal-easing="easeOutCubic">
        <Col>
          <SectionTopTitle>Who we are</SectionTopTitle>
        </Col>
      </Row>
      <RowAlignCenter>
        <Col md={7} data-sal="slide-right" data-sal-easing="easeOutCubic">
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
          {/* TODO: url */}
          <ButtonsContainer>
            <SpinButton url="/">Free project estimation</SpinButton>
            <DownloadButton />
          </ButtonsContainer>
          <FontawesomeContainer>
            <Link to={facebookAddress}>
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to={linkedinAddress}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </FontawesomeContainer>
        </Col>
        <ImgContainer data-sal="slide-left" data-sal-easing="easeOutCubic">
          <img width="100%" src={Hero} alt="hero" />
        </ImgContainer>
      </RowAlignCenter>
    </CustomContainer>
  );
};

export default WhoWeAreSection;
