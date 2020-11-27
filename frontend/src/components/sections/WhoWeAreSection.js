import React from 'react';
import styled from 'styled-components';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import { Row, Col } from '@bootstrap-styled/v4';
import Title from '@components/typography/Title';
import Paragraph from '@components/typography/Paragraph';
import { SpinContainer, RowAlignCenter } from '@components/overrides';
import SpinButton, { Button } from '@components/SpinButton';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { facebookAddress, linkedinAddress } from '@utils/variables';
import Hero from '@images/who-we-are/hero.webp';
import { Link } from 'gatsby';
import { DEVICE } from '@assets/const';

const { MD } = DEVICE;

const CustomContainer = styled(SpinContainer)`
  position: relative;
`;

const PortfolioButton = styled(Button)`
  border-bottom: 2px solid var(--light-font-color);
  background-color: transparent;
  padding: 1.063rem 0; // 17px
  border-radius: 0;
  margin: 0 0 0 2rem;

  &:hover {
    bottom: 2px solid var(--light-font-color);
    a {
      color: var(--light-font-color);
    }
  }

  a {
    font-weight: 800;
    color: var(--primary-font-color);
    transition: 0.3s;
  }
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
    <CustomContainer>
      <Row>
        <Col>
          <SectionTopTitle>Who we are</SectionTopTitle>
        </Col>
      </Row>
      <RowAlignCenter>
        <Col md={7}>
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
            <PortfolioButton>
              {/* TODO: url */}
              <Link to="/">
                Our portfolio <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </PortfolioButton>
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
        <ImgContainer>
          <img width="100%" src={Hero} alt="hero" />
        </ImgContainer>
      </RowAlignCenter>
    </CustomContainer>
  );
};

export default WhoWeAreSection;
