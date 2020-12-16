import React from 'react';
import styled from 'styled-components';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import SectionTitle from '@components/typography/SectionTitle';
import Paragraph, { BasicText } from '@components/typography/Paragraph';
import { DEVICE } from '@assets/const';
import Discussion from '@images/services/discussion.webp';
import Planing from '@images/services/planing.webp';
import SeoWeb from '@images/services/seo-web.webp';
import Seo from '@images/services/seo.webp';
import { Link } from 'gatsby';

const { XL } = DEVICE;

const CustomContainer = styled(SpinContainer)`
  position: relative;
  @media ${XL} {
    margin-bottom: 8rem;
  }
`;

const ServicesTechnologyParagraph = styled.p`
  ${BasicText}
  font-size: 2.25rem;
  color: var(--white);
`;

const ServicesTechnologyContainer = styled.div`
  background-color: var(--primary-font-color);
  padding: 2.5rem; // 40px;
  border-radius: 0.5rem;
  margin: 0 0 2rem 0;

  @media ${XL} {
    padding: 2.5rem 4.375rem;
    margin: 0;
  }
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

  @media ${XL} {
    flex-direction: column;

    div {
      font-size: 1rem;
      font-weight: 700;
      margin: 0 0 1.5rem 0;
    }
  }
`;

const IconBox = styled.div`
  height: 5.938rem; // 95px;
  width: 5.938rem; // 95px;
  border-radius: 0.5rem;
  background: #f1f5ff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  margin-bottom: 1.875rem; // 30px;
`;

const MoreTechnologiesCol = styled(Col)`
  margin: 0 0 2rem 0;
  @media ${XL} {
    margin: 0;
    padding-right: 0 !important;
  }
`;

const MoreTechnologiesLink = styled(Link)`
  &:hover ${IconBox} {
    background: var(--secondary-font-color);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(299deg) brightness(116%) contrast(260%);
    }
  }
`;

const ServiceContainer = styled.div`
  background: var(--white);
  box-shadow: -15px 15px 54px rgba(0, 17, 100, 0.1);
  border-radius: 0.5rem;
  padding: 1.875rem 1.438rem; // 30px 23px;
  min-height: 28.125rem; // 450px;
  height: 100%;
`;

const ServiceContainerTitle = styled.h3`
  ${BasicText}
  font-size: 1.5rem;
  font-weight: 700;
`;

const CustomCol = styled(Col)`
  margin: 3rem 0 0 0;
  @media ${XL} {
    position: absolute !important;
    top: 13.125rem;
    right: 0;
    margin: 0;
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

  const moreTechnologies = [
    {
      id: 1,
      icon: `${SeoWeb}`,
      title: `Custom Projects`,
      text1: `Passion and dreams propel our engines and we can help you to cross the finish line. `,
      text2: `From early stage consulting, through design, development, QA to marketing and maintenance - we got you covered.`,
      url: '/custom-projects',
    },
    {
      id: 2,
      icon: `${Planing}`,
      title: `Support & Maintenance`,
      text1: `Successfully launched project is only the beginning of journey.`,
      text2: `Let us keep your product and infrastructure safe and stable, so you will be able to look into future of your business.`,
      url: '/devops',
    },
    {
      id: 3,
      icon: `${Discussion}`,
      title: `Outsourcing & Body Leasing`,
      text1: `Creating adaptive and scalable business is not easy and we know it.`,
      text2: `That's why we understand the need of always available, experienced and well managed specialists.`,
      url: '/outsourcing',
    },
    {
      id: 4,
      icon: `${Seo}`,
      title: `Digital Marketing`,
      text1: `Most agencies are great in marketing but not in technology.`,
      text2: `We combine both to deliver effects, not promises - 94% of our customers stay with us for the next campaigns and new projects.`,
      url: '/marketing',
    },
  ];

  const renderTechnologies = () => {
    return technologies.map((item) => {
      return (
        <div key={item}>
          <div />
          {item}
        </div>
      );
    });
  };

  const renderMoreTechnologies = () => {
    return moreTechnologies.map((item, index) => {
      const { id, icon, title, text1, text2, url } = item;
      return (
        <MoreTechnologiesCol
          xs={12}
          sm={6}
          lg={3}
          key={`${title}-${id}`}
          data-sal="slide-up"
          data-sal-easing="easeOutCubic"
          data-sal-delay={200 * index}
        >
          <MoreTechnologiesLink to={url}>
            <ServiceContainer>
              <IconBox>
                <img src={icon} alt={`Spinbits - ${title}`} />
              </IconBox>
              <div>
                <ServiceContainerTitle primary>{title}</ServiceContainerTitle>
                <Paragraph>{text1}</Paragraph>
                <Paragraph>{text2}</Paragraph>
              </div>
            </ServiceContainer>
          </MoreTechnologiesLink>
        </MoreTechnologiesCol>
      );
    });
  };

  return (
    <CustomContainer id="services">
      <Row>
        <Col md={6} xl={5} data-sal="slide-right" data-sal-easing="easeOutCubic">
          <ServicesTechnologyContainer>
            <ServicesTechnologyParagraph>Technologies</ServicesTechnologyParagraph>
            <TechnologgiesList>{renderTechnologies()}</TechnologgiesList>
          </ServicesTechnologyContainer>
        </Col>
        <Col md={6} xl={{ offset: 1 }} data-sal="slide-down" data-sal-easing="easeOutCubic">
          <SectionTopTitle>Services</SectionTopTitle>
          <SectionTitle coloredStrong>
            What can we do <strong>for you</strong>
          </SectionTitle>
          <Paragraph>
            We can help you to pick the right path to build your project. To offer the best possible
            quality, we need to use only the best available tools. That&apos;s why we work with
            tested and proven technologies and solutions.
          </Paragraph>
        </Col>
        <CustomCol xl={9}>
          <Row>{renderMoreTechnologies()}</Row>
        </CustomCol>
      </Row>
    </CustomContainer>
  );
};

export default ServicesSection;
