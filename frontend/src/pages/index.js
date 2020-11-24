import React from 'react';
import Layout from '@components/Layout';
import SectionTitle from '@components/typography/SectionTitle';
import { Row, Col } from '@bootstrap-styled/v4';
import Title from '@components/typography/Title';
import Paragraph from '@components/typography/Paragraph';
import { P } from '@components/typography/Paragraph.styled';
import { SpinContainer, RowAlignCenter } from '@components/overrides';
import SpinButton, { Button } from '@components/SpinButton';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { facebookAddress, linkedinAddress } from '@utils/variables';
import Hero from '@images/home/hero.webp';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { DEVICE } from '@assets/const';

const { MD } = DEVICE;

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

const Home = () => {
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
    <Layout>
      <SpinContainer>
        <Row>
          <Col>
            <SectionTitle>Who we are</SectionTitle>
          </Col>
        </Row>
        <RowAlignCenter>
          <Col md={7}>
            <Title coloredStrong hover>
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
      </SpinContainer>
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
              We can help you to pick the right path to build your project. To offer the best
              possible quality, we need to use only the best available tools. That&apos;s why we
              work with tested and proven technologies and solutions.
            </Paragraph>
          </Col>
        </Row>
      </SpinContainer>
    </Layout>
  );
};

export default Home;
