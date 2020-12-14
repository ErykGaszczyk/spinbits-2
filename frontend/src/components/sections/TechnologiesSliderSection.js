import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import Blockchain from '@images/technologies/blockchain.webp';
import Selenium from '@images/technologies/selenium.webp';
import Flutter from '@images/technologies/flutter.webp';
import Javascript from '@images/technologies/javascript.webp';
import Php from '@images/technologies/php.webp';
import Python from '@images/technologies/python.webp';
import Aws from '@images/technologies/aws.webp';
import Gcp from '@images/technologies/gcp.webp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MOBILE_BREAKPOINT } from '@assets/const';

const { sm, md, lg } = MOBILE_BREAKPOINT;

const ImgWrapper = styled.a`
  img {
    min-height: 65px;
    height: 65px;
    max-width: 100%;
    filter: grayscale(100%);
    transition: 0.5s;
  }

  &:hover {
    img {
      filter: grayscale(0);
    }
  }
`;

const TechnologiesSliderSection = () => {
  const technologies = [
    {
      id: 1,
      icon: `${Php}`,
      slug: `php`,
      url: `https://www.php.net/`,
    },
    {
      id: 2,
      icon: `${Python}`,
      slug: `python`,
      url: `https://www.python.org/`,
    },
    {
      id: 3,
      icon: `${Javascript}`,
      slug: `javascript`,
      url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
    },
    {
      id: 4,
      icon: `${Flutter}`,
      slug: `flutter`,
      url: `https://flutter.dev/`,
    },
    {
      id: 5,
      icon: `${Blockchain}`,
      slug: `blockchain`,
      url: `https://www.blockchain.com/`,
    },
    {
      id: 6,
      icon: `${Selenium}`,
      slug: `selenium`,
      url: `https://www.selenium.dev/`,
    },
    {
      id: 7,
      icon: `${Aws}`,
      slug: `aws`,
      url: `https://aws.amazon.com/`,
    },
    {
      id: 8,
      icon: `${Gcp}`,
      slug: `gcp`,
      url: `https://cloud.google.com/`,
    },
  ];

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: lg,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: md,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: sm,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const renderTechnologisIcon = () => {
    return technologies.map((item) => {
      const { id, icon, slug, url } = item;
      return (
        <ImgWrapper to={url} key={`${id}-${slug}`}>
          <img src={icon} alt={`Spinbits - ${slug}`} />
        </ImgWrapper>
      );
    });
  };
  return (
    <SpinContainer data-sal="slide-up" data-sal-easing="easeOutCubic">
      <Row>
        <Col>
          <Slider {...settings}>{renderTechnologisIcon()}</Slider>
        </Col>
      </Row>
    </SpinContainer>
  );
};

export default TechnologiesSliderSection;
